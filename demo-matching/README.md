# Technische mini-demo: onderbouwde match → conceptbericht

Een **klein, zelfstandig JavaScript-voorbeeld** van een principe achter Atlas: maak zichtbaar *waarom* een prospect zou kunnen passen, gebruik alleen opgegeven bewijs en stel pas daarna een conceptmail voor.

**Belangrijk:** dit is voor het portfolio geschreven demonstratiecode, **niet** afkomstig uit de privé-repository van Atlas. De bedrijven, bronnen en bevindingen zijn **volledig fictief**. Deze demo doet geen live zoekopdrachten, geen AI-calls en stuurt geen e-mails.

## Uitproberen

Vereist Node.js 20 of hoger. Geen installatie van externe packages nodig.

```bash
cd demo-matching
npm run demo
npm test
```

## Wat het laat zien

1. Een prospecttype wordt beschreven met onderwerpen die relevant zijn.
2. Bewijs wordt alleen meegenomen als onderwerp, beschrijving én bron zijn ingevuld.
3. De matchscore wordt transparant berekend (dekking van relevante onderwerpen). De score is **geen productie-algoritme**.
4. Een conceptbericht gebruikt een expliciet aanknopingspunt met een bronverwijzing.
5. Zonder relevant bewijs wordt geen bericht opgesteld.
6. De output vraagt **altijd menselijke beoordeling**; er bestaat geen verzendfunctie.

## Wat echte software extra nodig heeft

Bij een werkelijke implementatie zouden onder andere toestemming, AVG-grondslag, broncontrole, actualiteit, beveiliging, dataminimalisatie, foutafhandeling, observability en gebruikersfeedback nodig zijn. Een taalmodel kan samenvatten of voorstellen doen, maar het gevonden bewijs moet controleerbaar blijven.
