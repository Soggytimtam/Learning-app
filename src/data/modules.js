export const modules = [
  {
    slug: 'peppol-101',
    title: 'Peppol 101 Meadow',
    zone: 'Starter Plains',
    type: 'Foundation',
    level: 1,
    status: 'available',
    summary: 'Learn the four-corner basics, why structured eInvoicing beats PDFs, and how Peppol fits into real business operations.',
    skills: ['Current vs future state', 'Stakeholder mapping', 'Value framing'],
    quests: [
      'Explain why a PDF is not the same thing as a Peppol invoice.',
      'Map the buyer and supplier journey before and after eInvoicing.',
      'Write a one-paragraph exec summary of Peppol business value.'
    ]
  },
  {
    slug: 'four-corner-city',
    title: 'Four Corner City',
    zone: 'Interchange Borough',
    type: 'Architecture',
    level: 2,
    status: 'available',
    summary: 'Walk the buyer-supplier-access-point journey through the four-corner model and learn where ownership changes hands.',
    skills: ['Process mapping', 'Operating model understanding', 'Issue ownership'],
    quests: [
      'Trace a document from sender system to receiver system.',
      'Decide which corner owns a failed handoff.',
      'Create a swimlane view of the Peppol exchange path.'
    ]
  },
  {
    slug: 'syntax-dungeon',
    title: 'Syntax Dungeon',
    zone: 'Crystal Caves',
    type: 'Technical BA',
    level: 3,
    status: 'locked',
    summary: 'Explore invoice XML, UBL structure, identifiers, totals, tax blocks, and field mapping between business language and document syntax.',
    skills: ['XML literacy', 'Field mapping', 'Business-to-technical translation'],
    quests: [
      'Locate EndpointID, CustomizationID, and ProfileID in a sample invoice.',
      'Trace a business requirement to the matching XML element.',
      'Find the missing tax total causing a validation problem.'
    ]
  },
  {
    slug: 'rules-tribunal',
    title: 'Rules Tribunal',
    zone: 'Sunstone Court',
    type: 'Validation',
    level: 4,
    status: 'locked',
    summary: 'Battle rule failures, code list mismatches, and malformed values until you can explain why a payload passes or fails.',
    skills: ['Acceptance criteria', 'Rule interpretation', 'Test design'],
    quests: [
      'Identify which invoice errors are syntax problems versus business-rule failures.',
      'Turn a BIS rule into a test case.',
      'Fix a bad currency code and invalid scheme ID.'
    ]
  },
  {
    slug: 'discovery-forest',
    title: 'Discovery Forest',
    zone: 'Registry Wilds',
    type: 'Interoperability',
    level: 5,
    status: 'locked',
    summary: 'Learn participant IDs, SMP/SML discovery, supported capabilities, and how routing decisions are made.',
    skills: ['Identifier logic', 'Metadata analysis', 'Root-cause diagnosis'],
    quests: [
      'Diagnose why the receiver cannot be found.',
      'Compare two identifier schemes and choose the right one.',
      'Prove whether a participant supports the intended process and document type.'
    ]
  },
  {
    slug: 'as4-port-city',
    title: 'AS4 Port City',
    zone: 'Harbor of Trust',
    type: 'Transport',
    level: 6,
    status: 'locked',
    summary: 'Understand access point transport, message exchange, acknowledgement flow, and why this layer matters without diving into telecom engineering.',
    skills: ['Integration reasoning', 'Security basics', 'Plain-English explanation'],
    quests: [
      'Explain AS4 to a finance team without jargon.',
      'Separate a payload issue from a transport issue.',
      'Write a dependency note for AP-to-AP message delivery.'
    ]
  },
  {
    slug: 'a-nz-localisation-lab',
    title: 'A-NZ Localisation Lab',
    zone: 'Trans-Tasman Institute',
    type: 'Regional Specialist',
    level: 7,
    status: 'locked',
    summary: 'Master PINT A-NZ, GST context, local requirements, and what changes when an implementation needs Australia and New Zealand specifics.',
    skills: ['Localisation analysis', 'GST-aware mapping', 'Gap analysis'],
    quests: [
      'Compare base billing to PINT A-NZ billing.',
      'Identify the effect of GST on field usage and validation expectations.',
      'Write a localisation gap analysis for an offshore product team.'
    ]
  },
  {
    slug: 'incident-detective-mode',
    title: 'Incident Detective Mode',
    zone: 'Clocktower Ops',
    type: 'Capstone',
    level: 8,
    status: 'locked',
    summary: 'Investigate realistic delivery failures, misleading vendor claims, onboarding defects, and production incidents like a true technical BA.',
    skills: ['Triage', 'Stakeholder communication', 'Evidence-based recommendation'],
    quests: [
      'Decide whether a failed invoice was caused by onboarding, routing, validation, or mapping.',
      'Prepare one incident summary for developers and another for executives.',
      'Recommend the fastest mitigation and the long-term fix.'
    ]
  }
];

export const lore = {
  history: [
    'The world begins in Manual Valley, where invoices travel as paper, PDFs, and email attachments.',
    'Peppol rises as the interoperability road network that standardises exchange and reduces rekeying.',
    'Business analysts help turn that network into real operating change by connecting business pain, process design, and implementation detail.'
  ],
  signals: [
    'Peppol sits above the low-level communications layer and focuses on exchanging business meaning reliably.',
    'A strong BA uses the model to separate routing, process, mapping, and validation questions.'
  ]
};
