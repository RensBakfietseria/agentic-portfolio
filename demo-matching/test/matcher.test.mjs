import test from 'node:test';
import assert from 'node:assert/strict';
import { evaluateProspect, prepareDraft } from '../src/matcher.mjs';

const type = { name: 'Samenwerking', wantedTopics: ['teamdag', 'ontmoeting'], suggestedRole: 'HR' };

test('matching is gebaseerd op expliciet bewijs en herleidbare bronnen', () => {
  const result = evaluateProspect(type, {
    name: 'Fictief Bedrijf',
    evidence: [
      { topic: 'teamdag', statement: 'een teamdag gepland is', source: 'fictief.example/teamdag' },
      { topic: 'anders', statement: 'er een magazijn is', source: 'fictief.example/over' },
    ],
  });
  assert.equal(result.score, 50);
  assert.equal(result.evidence.length, 1);
  assert.equal(result.evidence[0].source, 'fictief.example/teamdag');
  assert.equal(result.reviewRequired, true);
});

test('zonder bewijs ontstaat geen conceptmail', () => {
  const result = evaluateProspect(type, { name: 'Fictief Bedrijf', evidence: [] });
  const output = prepareDraft(result, 'Rens');
  assert.equal(result.status, 'onvoldoende-bewijs');
  assert.equal(output.draft, null);
});

test('een concept blijft een concept; nooit automatisch versturen', () => {
  const result = evaluateProspect(type, {
    name: 'Fictief Bedrijf',
    evidence: [{ topic: 'ontmoeting', statement: 'ontmoetingen plaatsvinden', source: 'fictief.example' }],
  });
  const output = prepareDraft(result, 'Rens');
  assert.equal(output.requiresHumanApproval, true);
  assert.equal(output.sent, false);
  assert.match(output.draft, /ontmoetingen plaatsvinden/);
  assert.equal(output.evidenceSource, 'fictief.example');
});
