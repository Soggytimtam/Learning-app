export const modules = [
  {
    slug: 'peppol-101',
    title: 'Peppol 101 Meadow',
    zone: 'Starter Plains',
    type: 'Foundation',
    level: 1,
    status: 'available',
    summary:
      'Learn the four-corner basics, why structured eInvoicing beats PDFs, and how Peppol fits into real business operations.',
    skills: ['Value framing', 'Stakeholder mapping', 'Current vs future state'],
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
    summary:
      'Walk the buyer-supplier-access-point journey and learn where ownership changes hands between systems.',
    skills: ['Process mapping', 'Issue ownership', 'Operating model understanding'],
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
    summary:
      'Planned zone: translate business requirements into invoice fields, XML elements, and mapping logic.',
    skills: ['Field mapping', 'Document literacy', 'Requirement tracing'],
    quests: [
      'Locate EndpointID, CustomizationID, and ProfileID in a sample invoice.',
      'Trace a business requirement to the matching invoice element.',
      'Investigate a mapping issue between business meaning and document structure.'
    ]
  },
  {
    slug: 'rules-tribunal',
    title: 'Rules Tribunal',
    zone: 'Sunstone Court',
    type: 'Validation',
    level: 4,
    status: 'locked',
    summary:
      'Planned zone: practise reading business rules, designing tests, and explaining why payloads fail.',
    skills: ['Acceptance criteria', 'Test design', 'Rule interpretation'],
    quests: [
      'Decide whether a failure is syntax or business-rule related.',
      'Turn a validation rule into a test case.',
      'Explain a failed payload to both technical and non-technical stakeholders.'
    ]
  },
  {
    slug: 'discovery-forest',
    title: 'Discovery Forest',
    zone: 'Registry Wilds',
    type: 'Interoperability',
    level: 5,
    status: 'locked',
    summary:
      'Planned zone: participant IDs, capability lookup, SMP/SML discovery, and receiver readiness.',
    skills: ['Identifier logic', 'Metadata diagnosis', 'Root-cause analysis'],
    quests: [
      'Diagnose why a participant cannot be discovered.',
      'Compare two identifier schemes and choose the right one.',
      'Confirm whether a receiver supports the intended process and document type.'
    ]
  },
  {
    slug: 'anz-lab',
    title: 'A-NZ Localisation Lab',
    zone: 'Trans-Tasman Institute',
    type: 'Regional Specialist',
    level: 6,
    status: 'locked',
    summary:
      'Planned zone: PINT A-NZ, GST-aware design decisions, and localisation analysis for Australia and New Zealand.',
    skills: ['Gap analysis', 'Localisation analysis', 'Regional requirements'],
    quests: [
      'Compare base billing with PINT A-NZ expectations.',
      'Identify GST-driven design implications.',
      'Write a localisation gap note for an offshore product team.'
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
