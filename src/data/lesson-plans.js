export const lessonPlans = [
  {
    moduleSlug: 'peppol-101',
    learningObjectives: [
      'Define eInvoicing in plain English.',
      'Explain why structured invoice data beats PDF-only workflows.',
      'Describe the roles of buyer, supplier, and service provider.'
    ],
    exercise: 'Rewrite a manual invoice workflow as a future-state Peppol-enabled process.',
    deliverable: 'One-page current-state vs future-state process summary.',
    bossChallenge: 'Calm an angry CFO who thinks eInvoicing is just emailed PDF automation.'
  },
  {
    moduleSlug: 'syntax-dungeon',
    learningObjectives: [
      'Read a simplified invoice XML structure.',
      'Match business meaning to the right element.',
      'Locate identifiers and totals in the payload.'
    ],
    exercise: 'Annotate a sample invoice with business labels.',
    deliverable: 'Business-to-technical mapping table.',
    bossChallenge: 'Find the missing field that breaks a valid-looking invoice.'
  },
  {
    moduleSlug: 'a-nz-localisation-lab',
    learningObjectives: [
      'Explain what PINT A-NZ changes.',
      'Recognise GST-aware local examples.',
      'Describe the difference between generic capability and localised implementation.'
    ],
    exercise: 'Compare a base billing scenario to an A-NZ localised scenario.',
    deliverable: 'Localisation gap analysis for an offshore vendor.',
    bossChallenge: 'Convince a cross-border product team that one global default setup is not enough.'
  }
];
