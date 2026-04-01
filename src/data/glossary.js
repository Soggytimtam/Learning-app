export const glossary = [
  {
    term: 'Peppol',
    category: 'Foundation',
    plainEnglish: 'A shared network and rule set that lets business software exchange standardised documents like invoices.',
    technical: 'An interoperability framework using governance, discovery, transport, identifiers, and document specifications for structured business messaging.',
    baRelevance: 'You need this to explain the ecosystem, define scope, and separate business process issues from network issues.'
  },
  {
    term: 'Four-corner model',
    category: 'Architecture',
    plainEnglish: 'The buyer and supplier do not send directly to each other. Their service providers handle the exchange in between.',
    technical: 'A topology where sender and receiver business systems connect via sending and receiving access points.',
    baRelevance: 'Useful when mapping ownership, handoffs, and support responsibilities.'
  },
  {
    term: 'Access Point',
    category: 'Transport',
    plainEnglish: 'The service that sends or receives Peppol messages for a participant.',
    technical: 'A network endpoint operated by a provider that handles Peppol message transport and trust requirements.',
    baRelevance: 'Important for provider evaluation, onboarding, and incident ownership.'
  },
  {
    term: 'SMP',
    category: 'Discovery',
    plainEnglish: 'A lookup service that tells senders what a receiver supports and where messages should go.',
    technical: 'Service Metadata Publisher containing supported document/process metadata and endpoint references.',
    baRelevance: 'Critical when diagnosing receiver-not-found or unsupported-capability problems.'
  },
  {
    term: 'SML',
    category: 'Discovery',
    plainEnglish: 'A registry layer that helps locate the correct metadata publisher for a participant.',
    technical: 'Service Metadata Locator used in dynamic discovery flows for participant metadata resolution.',
    baRelevance: 'Helps you understand why discovery can fail before message delivery even begins.'
  },
  {
    term: 'AS4',
    category: 'Transport',
    plainEnglish: 'The secure message delivery method used between Peppol access points.',
    technical: 'A B2B messaging profile used for secure asynchronous message exchange with signing and encryption.',
    baRelevance: 'You do not need deep protocol engineering, but you should know where transport issues sit in the stack.'
  },
  {
    term: 'CustomizationID',
    category: 'Syntax',
    plainEnglish: 'A label that tells systems which ruleset the document follows.',
    technical: 'An identifier that points to the customisation or specification profile used by the payload.',
    baRelevance: 'Vital when checking whether a document matches the expected implementation specification.'
  },
  {
    term: 'ProfileID',
    category: 'Syntax',
    plainEnglish: 'A label that tells systems which business process the document is part of.',
    technical: 'An identifier indicating the business process context for the message exchange.',
    baRelevance: 'Useful for diagnosing process mismatch and capability support issues.'
  },
  {
    term: 'EndpointID',
    category: 'Identifiers',
    plainEnglish: 'The participant address used to route a message on the network.',
    technical: 'A participant electronic address paired with a scheme identifier used in routing and discovery.',
    baRelevance: 'A common root cause in onboarding and delivery troubleshooting.'
  },
  {
    term: 'PINT A-NZ',
    category: 'Localisation',
    plainEnglish: 'The Australia and New Zealand version of the invoicing specification.',
    technical: 'A localisation of the Peppol International model for Australia and New Zealand business and legal requirements.',
    baRelevance: 'Essential when your implementation needs GST-aware and trans-Tasman-ready behaviour.'
  }
];
