import { evaluateProspect, prepareDraft } from './src/matcher.mjs';

// FICTIEF voorbeeld: geen echte organisaties, bronnen of klantdata.
const type = {
  name: 'Organisatie met aandacht voor teamontmoeting',
  wantedTopics: ['teamdag', 'persoonlijke-ontmoeting'],
  suggestedRole: 'HR- of eventverantwoordelijke',
};
const prospect = {
  name: 'Fictieve Organisatie Noord',
  evidence: [
    { topic: 'teamdag', statement: 'Fictieve Organisatie Noord een teamdag organiseert', source: 'Fictieve voorbeeldpagina /teamdag' },
    { topic: 'persoonlijke-ontmoeting', statement: 'de organisatie ontmoeting tussen collega’s belangrijk vindt', source: 'Fictieve voorbeeldpagina /over-ons' },
  ],
};

const match = evaluateProspect(type, prospect);
const mail = prepareDraft(match, 'Rens');
console.log(JSON.stringify({ match, mail }, null, 2));
