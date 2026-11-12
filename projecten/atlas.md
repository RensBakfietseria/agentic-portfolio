# Atlas — van ondernemersinterview naar onderbouwd prospectvoorstel

**Mijn rol:** initiatief, productontwerp, gebruikersgerichte ontwikkeling en testen van een AI-ondersteunde webapp.  
**Fase:** pilotprototype in doorontwikkeling. Niet ieder onderdeel van de beoogde keten is al volledig gevalideerd in de praktijk.

## Wat is de uitdaging?

Een kleine ondernemer weet vaak wel wat hij of zij aanbiedt, maar heeft nog geen scherp beeld van de beste doelgroepen en mogelijke klanten. Bovendien kost prospectonderzoek tijd, en zijn algemene verkoopmails weinig persoonlijk.

## Hoe ik het probleem vertaal naar software

1. **Eerst begrijpen.** Via een interview met de ondernemer worden zijn of haar aanbod, klanten en onderscheidende kwaliteiten onderzocht.
2. **Structureren.** De antwoorden vormen de basis voor een marktmodel en verschillende prospecttypen.
3. **Onderbouwen.** Atlas zoekt en beoordeelt mogelijke prospects, met expliciete aanwijzingen (bewijs) waarom ze bij het model passen.
4. **Concreet maken.** Voor een kansrijke prospect bereidt de app een eerste mail voor, met een haakje dat verwijst naar dat bewijs.
5. **De juiste route kiezen.** Atlas adviseert over een passende benaderingsroute en het type contactpersoon.
6. **Menselijke beslissing.** De ondernemer beoordeelt het voorstel; mail wordt niet zonder goedkeuring automatisch verstuurd.

## De flow

**Interview ondernemer → Marktmodel en prospecttypen → Prospectonderzoek → Bewijs en matchonderbouwing → Conceptmail en benaderingsadvies → Menselijke beoordeling → Contact en opvolging.**

## Tools en ontwerpkeuzes

- **ChatGPT** als ontwikkelpartner; **GitHub** voor versiebeheer; **Vercel** voor webdeployments.
- **Next.js / React** voor de applicatie, **Supabase** voor backend- en datafunctionaliteit.
- **OpenAI** voor analyses *binnen* de webapp.
- Aandacht voor bewijsherleidbaarheid, gebruiksvriendelijke uitleg en menselijke controle.

## Wat dit over mijn werk laat zien

Ik probeer niet simpelweg een proces te automatiseren. Ik wil eerst snappen **wat iemand nodig heeft om een goede beslissing te kunnen nemen**, bouw daarvoor een bruikbare flow en stel hem steeds bij aan de hand van tests en gebruikersreacties.

**Broncode:** privé. In dit portfolio staat een **zelfstandige, fictieve demonstratie** van bewijsgericht matchen: [demo-matching](../demo-matching/README.md). Die is geen kopie van de productiecode.
