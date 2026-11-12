/**
 * Portfolio-demonstratie: bewijsgericht matchen, met menselijke controle.
 * Alle input is fictief. Dit is NIET de originele broncode van Atlas.
 * Geen zoekopdrachten, AI-aanroepen, netwerkverkeer of mailverzending.
 */

const isNonempty = (s) => typeof s === 'string' && s.trim().length > 0;

/** @param {{ name: string, wantedTopics: string[], suggestedRole: string }} prospectType
 *  @param {{ name: string, evidence: Array<{topic: string, statement: string, source: string}> }} prospect
 */
export function evaluateProspect(prospectType, prospect) {
  if (!isNonempty(prospectType?.name) || !Array.isArray(prospectType?.wantedTopics)) {
    throw new TypeError('Ongeldig prospecttype');
  }
  if (!isNonempty(prospect?.name) || !Array.isArray(prospect?.evidence)) {
    throw new TypeError('Ongeldige prospect');
  }

  const topics = new Set(prospectType.wantedTopics.map((topic) => topic.toLowerCase()));
  const validEvidence = prospect.evidence.filter((item) =>
    isNonempty(item?.topic) && isNonempty(item?.statement) && isNonempty(item?.source)
  );
  const matched = validEvidence.filter((item) => topics.has(item.topic.toLowerCase()));
  const coveredTopics = new Set(matched.map((item) => item.topic.toLowerCase()));
  const score = topics.size === 0 ? 0 : Math.round((coveredTopics.size / topics.size) * 100);

  return {
    prospect: prospect.name,
    prospectType: prospectType.name,
    score, // transparante demonstratiescore, geen echte Atlas-matchscore
    evidence: matched,
    recommendedContactRole: prospectType.suggestedRole || 'Verantwoordelijke voor dit onderwerp',
    reviewRequired: true,
    status: matched.length ? 'te-beoordelen' : 'onvoldoende-bewijs',
  };
}

/**
 * Bereid een conceptmail voor, zonder onbekende feiten of verzendactie.
 */
export function prepareDraft(match, senderName) {
  if (match.status !== 'te-beoordelen' || !match.evidence.length) {
    return { draft: null, reason: 'Geen relevant onderbouwd aanknopingspunt' };
  }
  const lead = match.evidence[0];
  return {
    subject: `Idee naar aanleiding van ${match.prospect}`,
    draft: `Beste,\n\nIk las dat ${lead.statement}. Dat viel me op omdat het raakt aan een onderwerp waarover ik graag met jullie meedenk. Zou het interessant zijn om eens kort kennis te maken?\n\nGroet,\n${senderName}`,
    evidenceSource: lead.source,
    suggestedRecipientRole: match.recommendedContactRole,
    requiresHumanApproval: true,
    sent: false,
  };
}
