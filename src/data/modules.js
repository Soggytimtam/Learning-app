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
  }
];

export const lore = {
  history: [
    'The world begins in Manual Valley, where invoices travel as paper, PDFs, and email attachments.',
    'Peppol rises as the interoperability road network that standardises exchange and reduces rekeying.'
  ],
  signals: [
    'Peppol sits above the low-level communications layer and focuses on exchanging business meaning reliably.'
  ]
};
