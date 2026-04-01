export const npcs = [
  {
    slug: 'mayor-myrtle',
    role: 'Village guide',
    personality: 'Warm, practical, encouraging',
    zone: 'Peppol 101 Meadow',
    teaches: ['Why structured data matters', 'Current state vs future state'],
    sampleDialogue: 'A PDF might look like an invoice to us, dear, but the computer still needs to retype it in its own way.'
  },
  {
    slug: 'archivist-quill',
    role: 'Standards librarian',
    personality: 'Precise, nerdy, kind',
    zone: 'Syntax Dungeon',
    teaches: ['UBL/XML structure', 'CustomizationID', 'ProfileID'],
    sampleDialogue: 'Meaning hides in structure. Follow the element path and the mystery gives up its secrets.'
  },
  {
    slug: 'warden-vera',
    role: 'Rules judge',
    personality: 'Strict but fair',
    zone: 'Rules Tribunal',
    teaches: ['Business rules', 'Code lists', 'Acceptance criteria'],
    sampleDialogue: 'A document can be beautifully formed and still utterly wrong.'
  },
  {
    slug: 'ranger-io',
    role: 'Metadata scout',
    personality: 'Restless, observant, technical',
    zone: 'Discovery Forest',
    teaches: ['Identifiers', 'SMP', 'SML', 'Capability checks'],
    sampleDialogue: 'If you cannot find the path, do not blame the forest before you check the address.'
  },
  {
    slug: 'captain-astra',
    role: 'Port authority mentor',
    personality: 'Calm, dependable, systems-minded',
    zone: 'AS4 Port City',
    teaches: ['Transport basics', 'Trust model', 'Payload vs delivery issues'],
    sampleDialogue: 'A sealed vessel can still carry the wrong cargo, and the right cargo can still miss the tide.'
  },
  {
    slug: 'analyst-tui',
    role: 'Trans-Tasman specialist',
    personality: 'Sharp, collaborative, region-savvy',
    zone: 'A-NZ Localisation Lab',
    teaches: ['PINT A-NZ', 'GST context', 'Localisation gap analysis'],
    sampleDialogue: 'Global standards are the road, but local requirements decide how you drive on it.'
  }
];
