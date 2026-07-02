// English (source) use-case content, keyed by slug.
// Language-independent structure (slug ordering, relatedUseCases) lives in
// ../industryData.js. Every language file mirrors these exact keys.

export default {
  "commercial-real-estate": {
    label: "Commercial Real Estate",
    hero: {
      title: "Opportunity Detection Infrastructure for Commercial Real Estate",
      subtitle: "We surface the deals worth acting on — open construction tenders you can bid on, and properties priced below their market value — then do the legwork: assembling the bid file and flagging the buy.",
      cta: "Explore a Partnership for Commercial Real Estate",
    },
    whyThisIndustry: {
      heading: "The Problem in Commercial Real Estate",
      body: "The best opportunities — a tender that just opened, a property priced below the block — are scattered across hundreds of sources and move fast. Found manually, the window closes before you act. Intelinx monitors the market continuously, surfaces the tenders and listings that fit your criteria, assembles each tender’s application file autonomously (you just review and approve), and flags undervalued properties before the competition sees them.",
    },
    labels: {
      icp: "What We Look For",
      signals: "Opportunities the System Detects",
      activation: "Example Opportunity",
    },
    icpProfile: [
      { label: "Deal Types", value: "Construction tenders · Property acquisitions" },
      { label: "Value Signal", value: "Listings below the regional average" },
      { label: "Regions", value: "Your target cities and zones" },
      { label: "Tender Scope", value: "Public and private construction bids" },
    ],
    signals: [
      "New construction tenders matching your scope",
      "Properties listed below the zone’s average value",
      "Redevelopment sites and lease expirations",
      "Distressed or motivated-seller listings",
    ],
    researches: [
      "Tender requirements and eligibility",
      "Comparable values for the area",
      "Property history and ownership",
      "Deadlines and documents required",
    ],
    exampleActivation: {
      contextLabel: "Detected",
      messageLabel: "Action",
      context: "A municipal tender for a 4,000 m² mixed-use development just opened — scope and eligibility match your firm.",
      message: "Intelinx assembled the full application file — forms, compliance docs, and attachments — and queued it for your review. Approve, and it’s submitted before the deadline.",
    },
    impact: [
      "A constant flow of qualified tenders and acquisition opportunities",
      "Bid files prepared automatically — submitted faster, with less effort",
      "Undervalued properties spotted before the market reacts",
    ],
    meta: {
      title: "Opportunity Detection for Commercial Real Estate | Intelinx",
      description: "AI-powered opportunity detection for commercial real estate — surface construction tenders and undervalued properties, with bid files prepared automatically.",
      ogTitle: "Opportunity Detection Infrastructure for Commercial Real Estate",
      ogDescription: "Surface construction tenders you can bid on and properties priced below market — then act before the competition.",
    },
  },

  "financial-services": {
    label: "Financial Services",
    hero: {
      title: "Client Acquisition Infrastructure for Financial Services",
      subtitle: "We build your client acquisition end to end — pinpoint the companies that fit your product, research and prioritize the best-fit accounts, and open conversations with the people who control the money.",
      cta: "Explore a Partnership for Financial Services",
    },
    whyThisIndustry: {
      heading: "The Problem in Financial Services",
      body: "A specialized financial product only matters to companies with the right profile — take an FX desk: it only makes sense for companies with real foreign-currency exposure. Finding them by referral alone is slow and shallow. Intelinx defines your exact ICP by revenue, size and location, surfaces the full universe of companies that fit, researches and prioritizes the best targets, and opens conversations with the people who control the money — each message personalized to that company’s situation.",
    },
    icpProfile: [
      { label: "Company Size", value: "100–5,000 employees" },
      { label: "Revenue", value: "$20M–$1B" },
      { label: "Profile", value: "Companies with cross-border revenue or FX exposure" },
      { label: "Buyer Roles", value: "CFO, Treasurer, Head of Finance, Controller" },
    ],
    signals: [
      "Cross-border revenue or international clients",
      "Suppliers or imports paid in foreign currency",
      "Expansion into new countries",
      "Large or recurring international transfers",
    ],
    researches: [
      "Fit against your ICP — revenue, size, location",
      "Currency exposure and transaction volume",
      "Who controls treasury and finance decisions",
      "The context that makes the timing right",
    ],
    exampleActivation: {
      context: "A best-fit account — a $120M manufacturer importing components from Asia — pays suppliers in USD and just opened operations in Europe.",
      message: "Hi Patricia — saw you’re sourcing from Asia and now expanding into Europe. Companies managing payments across that many currencies usually lose more than they realize on spreads and timing. We help finance teams cut that cost measurably — open to a quick look at your numbers?",
    },
    impact: [
      "Conversations with high-value, well-qualified accounts",
      "A pipeline of companies that actually fit your product",
      "Less dependence on referrals and warm intros",
    ],
    meta: {
      title: "Client Acquisition for Financial Services | Intelinx",
      description: "AI-powered client acquisition for financial institutions with specialized products — from FX desks to lending. Find and engage the companies that fit.",
      ogTitle: "Client Acquisition Infrastructure for Financial Services",
      ogDescription: "Pinpoint the companies that fit your product and open conversations with the people who control the money.",
    },
  },

  "marketing-agencies": {
    label: "Marketing Agencies",
    hero: {
      title: "Client Acquisition Infrastructure for Marketing Agencies",
      subtitle: "We find the companies that obviously need marketing — strong revenue, weak online presence — and open conversations that turn them into your clients.",
      cta: "Explore a Partnership for Marketing Agencies",
    },
    whyThisIndustry: {
      heading: "The Problem in Marketing Agencies",
      body: "Marketing agencies grow everyone’s business but their own — client acquisition always slips to the bottom of the list. Intelinx fixes that: it finds companies with real revenue but a weak online presence — a dated site, thin social, poor reviews — the businesses that most need what you do. Then it researches each one, builds the context, and reaches the decision-maker with a personalized message that lands you the conversation.",
    },
    icpProfile: [
      { label: "Revenue", value: "$5M+ — can afford to invest" },
      { label: "Online Presence", value: "Weak — dated site, thin social, poor reviews" },
      { label: "Why They Fit", value: "High revenue, underinvested in marketing" },
      { label: "Buyer Roles", value: "Owner, CEO, CMO, VP of Marketing" },
    ],
    signals: [
      "High revenue with a dated or thin website",
      "Poor reviews despite strong sales",
      "Little to no social or content presence",
      "Competitors clearly outranking them online",
    ],
    researches: [
      "Revenue and ability to invest",
      "Website, SEO and social health",
      "Reviews and online reputation",
      "The owner or marketing decision-maker",
    ],
    exampleActivation: {
      context: "A best-fit account — a $30M regional HVAC company — does strong word-of-mouth business but runs a dated website, sits at 3.2 stars on Google, and has almost no social presence.",
      message: "Hi Rosa — your customers clearly love the work, but online it’s costing you: a dated site and a 3.2 rating are quietly sending ready-to-buy leads to competitors. There’s a real gap between your reputation and your digital presence — worth a quick look at what closing it could bring in?",
    },
    impact: [
      "A steady flow of high-revenue companies that genuinely need you",
      "Conversations with businesses that can afford to invest",
      "Client acquisition finally handled — so you can focus on the work",
    ],
    meta: {
      title: "Client Acquisition for Marketing Agencies | Intelinx",
      description: "AI-powered client acquisition for marketing agencies — find high-revenue companies with weak online presence and turn them into clients.",
      ogTitle: "Client Acquisition Infrastructure for Marketing Agencies",
      ogDescription: "Find the companies that obviously need marketing — strong revenue, weak online presence — and turn them into your clients.",
    },
  },

  "legal-services": {
    label: "Legal Services",
    hero: {
      title: "Client Acquisition Infrastructure for Legal Services",
      subtitle: "We find the companies entering moments that demand legal counsel — deals, raises, expansions, restructurings — and open conversations before they go looking for a firm.",
      cta: "Explore a Partnership for Legal Services",
    },
    whyThisIndustry: {
      heading: "The Problem in Legal Services",
      body: "Companies don’t shop for lawyers until they’re already in motion — closing a deal, raising capital, entering a new market — and by then they call whoever they know. Intelinx gets you there first: it detects the companies entering these moments, researches the legal exposure behind each one, and reaches the decision-maker with a message that shows you understand exactly what they’re walking into.",
    },
    icpProfile: [
      { label: "Company Size", value: "50–1,000 employees" },
      { label: "Revenue", value: "$10M–$500M" },
      { label: "Situation", value: "Entering deals, raises, or restructurings" },
      { label: "Buyer Roles", value: "General Counsel, CEO, CFO, VP of Operations" },
    ],
    signals: [
      "Mergers, acquisitions, or asset sales",
      "Funding rounds or new investors",
      "Expansion into new markets or jurisdictions",
      "Leadership changes or restructuring",
    ],
    researches: [
      "The transaction or event driving the need",
      "Corporate structure and exposure",
      "Relevant regulations and jurisdictions",
      "Who holds legal decision-making authority",
    ],
    exampleActivation: {
      context: "A best-fit account — a 400-person healthcare company — just announced expansion into three new EU markets.",
      message: "Hi Daniel — congratulations on the EU expansion. Moving into three jurisdictions at once usually surfaces a wave of compliance, employment, and data questions that are far cheaper to get ahead of than to fix later. We’ve guided companies through exactly this — open to a short conversation before things move?",
    },
    impact: [
      "Conversations with companies that have a real, immediate legal need",
      "Higher-value corporate engagements",
      "A pipeline that doesn’t depend on referrals alone",
    ],
    meta: {
      title: "Client Acquisition for Legal Services | Intelinx",
      description: "AI-powered client acquisition for law firms — reach companies entering deals, raises, and restructurings before they go looking for a firm.",
      ogTitle: "Client Acquisition Infrastructure for Legal Services",
      ogDescription: "Find the companies entering moments that demand legal counsel and open conversations first.",
    },
  },

  "manufacturing": {
    label: "Manufacturing",
    hero: {
      title: "Client Acquisition Infrastructure for Manufacturing",
      subtitle: "We find the companies that need what you produce — brands scaling output, businesses sourcing new suppliers — and open conversations with the people who own purchasing.",
      cta: "Explore a Partnership for Manufacturing",
    },
    whyThisIndustry: {
      heading: "The Problem in Manufacturing",
      body: "Manufacturers win on relationships and referrals, so most never run real outbound — and the contracts go to whoever happened to be in the room. Intelinx changes that: it detects the companies scaling production, reconfiguring supply chains, or actively sourcing new suppliers, researches what they make and what they need, and reaches the purchasing and operations leaders with a message grounded in their actual situation.",
    },
    icpProfile: [
      { label: "Company Size", value: "100–2,000 employees" },
      { label: "Revenue", value: "$20M–$500M" },
      { label: "Situation", value: "Scaling production or sourcing new suppliers" },
      { label: "Buyer Roles", value: "VP of Operations, Head of Procurement, Plant Manager, COO" },
    ],
    signals: [
      "Scaling production or new product lines",
      "Supply chain restructuring or reshoring",
      "Actively sourcing new suppliers or vendors",
      "Capital investment in capacity or facilities",
    ],
    researches: [
      "What they make and what they buy",
      "Current suppliers and gaps",
      "Volume and capacity needs",
      "Procurement and operations decision-makers",
    ],
    exampleActivation: {
      context: "A best-fit account — a $200M consumer-goods brand — just announced a new product line and opened a second distribution center.",
      message: "Hi Tomás — saw the new product line and the second DC coming online. Ramps like this usually stretch existing suppliers past their lead times right when reliability matters most. We’ve absorbed exactly these volume jumps for brands in your space — worth comparing capacity and pricing?",
    },
    impact: [
      "Conversations with companies actively sourcing",
      "Larger, longer-term supply contracts",
      "A pipeline that doesn’t rely on trade shows and referrals",
    ],
    meta: {
      title: "Client Acquisition for Manufacturing | Intelinx",
      description: "AI-powered client acquisition for manufacturers — find the companies that need your output or capacity and open conversations with purchasing.",
      ogTitle: "Client Acquisition Infrastructure for Manufacturing",
      ogDescription: "Find the companies that need what you produce and reach the people who own purchasing.",
    },
  },

  "cybersecurity": {
    label: "Cybersecurity",
    hero: {
      title: "Client Acquisition Infrastructure for Cybersecurity Companies",
      subtitle: "We find the companies whose security posture just became a priority — new hires, audits, incidents, migrations — and open conversations with the people accountable for it.",
      cta: "Explore a Partnership for Cybersecurity",
    },
    whyThisIndustry: {
      heading: "The Problem in Cybersecurity",
      body: "Security gets bought when something forces the issue — an audit, a breach, a new compliance requirement, a cloud migration. Miss that window and the budget goes to whoever was already in the conversation. Intelinx detects the companies entering exactly these moments, researches their stack and exposure, and reaches the security leaders with a message that speaks to what they’re dealing with right now.",
    },
    icpProfile: [
      { label: "Company Size", value: "100–5,000 employees" },
      { label: "Revenue", value: "$20M–$1B" },
      { label: "Situation", value: "Hardening security after a trigger event" },
      { label: "Buyer Roles", value: "CISO, VP of Security, CTO, Head of IT" },
    ],
    signals: [
      "Security or compliance hiring",
      "Pursuing SOC 2, ISO 27001, or similar",
      "A recent breach or security incident",
      "Cloud or infrastructure migration",
    ],
    researches: [
      "Current security stack and gaps",
      "Compliance requirements they face",
      "Risk and exposure profile",
      "The security decision-makers",
    ],
    exampleActivation: {
      context: "A best-fit account — a 600-person fintech — just hired its first CISO and kicked off SOC 2 Type II.",
      message: "Hi Elena — congrats on the CISO hire and the SOC 2 push. Standing up controls under audit pressure usually exposes a few gaps that are painful to close on a deadline. We’ve gotten fintechs audit-ready without derailing the roadmap — open to a quick conversation while it’s early?",
    },
    impact: [
      "Conversations with security leaders who are actively buying",
      "Higher relevance — because the trigger is real",
      "Higher win rates and shorter sales cycles",
    ],
    meta: {
      title: "Client Acquisition for Cybersecurity | Intelinx",
      description: "AI-powered client acquisition for security vendors — reach companies hardening security after audits, breaches, and migrations.",
      ogTitle: "Client Acquisition Infrastructure for Cybersecurity",
      ogDescription: "Find the companies whose security posture just became a priority and reach the people accountable for it.",
    },
  },

  "seo-agencies": {
    label: "SEO Agencies",
    hero: {
      title: "Client Acquisition Infrastructure for SEO Agencies",
      subtitle: "We find companies losing winnable search traffic, run a full SEO audit on each one, and open conversations with the ones who need you most.",
      cta: "Explore a Partnership for SEO Agencies",
    },
    whyThisIndustry: {
      heading: "The Problem in SEO Agencies",
      body: "Every business with a website is a possible SEO client — which is exactly why agencies waste time on the wrong ones. Intelinx narrows it to companies that fit your ICP, runs a full SEO audit on each site — technical health, rankings, competitors, lost traffic — and scores how badly they need help. Then it builds the context and reaches the decision-maker with a message backed by what the audit actually found.",
    },
    labels: {
      researches: "What the System Audits",
    },
    icpProfile: [
      { label: "Revenue", value: "$3M+ — real budget for growth" },
      { label: "Search Visibility", value: "Underranking for valuable terms" },
      { label: "Site Health", value: "Technical SEO issues or a new/thin site" },
      { label: "Buyer Roles", value: "Owner, CMO, Head of Marketing, Head of Digital" },
    ],
    signals: [
      "Ranking below competitors for valuable keywords",
      "A new or recently rebuilt website",
      "Technical SEO issues hurting visibility",
      "Strong product, weak organic traffic",
    ],
    researches: [
      "A full SEO audit of the site",
      "Technical health and crawl issues",
      "Keyword rankings vs. competitors",
      "Lost or untapped organic traffic",
    ],
    exampleActivation: {
      context: "A best-fit account — a $12M e-commerce brand — ranks on page 3 for its highest-intent keywords, with 40+ technical issues flagged by the audit.",
      message: "Hi Sofía — ran a full audit on your site: you’re on page 3 for the exact terms your buyers search, with 40+ technical issues holding you back, while weaker competitors outrank you. There’s real revenue stuck here — want to see the full audit?",
    },
    impact: [
      "Conversations backed by a real audit, not a cold pitch",
      "Prospects pre-qualified by how much they actually need you",
      "A steady pipeline of high-intent SEO clients",
    ],
    meta: {
      title: "Client Acquisition for SEO Agencies | Intelinx",
      description: "AI-powered client acquisition for SEO agencies — audit ICP-fit sites, score their need, and open conversations backed by real findings.",
      ogTitle: "Client Acquisition Infrastructure for SEO Agencies",
      ogDescription: "Find companies losing winnable search traffic, audit each site, and open conversations with the ones who need you most.",
    },
  },

  "recruitment": {
    label: "Recruitment",
    hero: {
      title: "Recruiting Infrastructure That Replaces Your Headhunters",
      subtitle: "We build you an end-to-end recruiting system that sources talent across companies and opens conversations with the right candidates — so you hire in-house and stop paying headhunter commissions.",
      cta: "Explore a Partnership for Recruitment",
    },
    whyThisIndustry: {
      heading: "The Problem in Recruitment",
      body: "The right senior or specialized hire can take a year or two to land — and when you finally outsource it, a headhunter takes 20–30% of the salary for a shortlist you can’t see into. Intelinx builds you an in-house recruiting engine: it defines the exact profile you need, sources matching talent across companies, researches and prioritizes the strongest fits, and opens conversations to gauge interest and set up interviews — so you hire directly, in a fraction of the time, and keep the commission.",
    },
    icpProfile: [
      { label: "Company Size", value: "50–1,000 employees" },
      { label: "Revenue", value: "$10M–$200M" },
      { label: "Hiring Profile", value: "Companies hiring continuously or scaling headcount" },
      { label: "Buyer Roles", value: "VP of People, Head of Talent, CHRO, CEO" },
    ],
    signals: [
      "Professionals signaling they’re open to move",
      "Tenure milestones at target companies",
      "Skills that match your open roles",
      "Teams being restructured, freeing up talent",
    ],
    researches: [
      "Fit against your role spec",
      "Career trajectory and skills",
      "Likelihood to make a move",
      "The best way to reach them",
    ],
    exampleActivation: {
      context: "A senior backend engineer who fits your open Platform role just passed a 3-year tenure mark and updated their profile.",
      message: "Hi Luis — your work on the payments rewrite caught our eye. We’re growing our platform team and your background is exactly the profile we’re after. Open to a quick chat about the role?",
    },
    impact: [
      "Time-to-hire cut from months — or years — to weeks",
      "A steady pipeline of qualified, interested candidates",
      "Roles filled in-house — tens of thousands saved in commissions",
    ],
    meta: {
      title: "In-House Recruiting Infrastructure | Intelinx",
      description: "AI-powered in-house recruiting — source talent across companies and open conversations with candidates, so you hire in-house and stop paying headhunters.",
      ogTitle: "Recruiting Infrastructure That Replaces Your Headhunters",
      ogDescription: "Source talent across companies and open conversations with the right candidates — hire in-house, keep the commission.",
    },
  },

  "b2b-saas": {
    label: "B2B SaaS",
    hero: {
      title: "Client Acquisition Infrastructure for B2B SaaS",
      subtitle: "We build your client acquisition end to end — define your ideal customer, research and prioritize the best-fit accounts, and open the right conversations with the people who decide.",
      cta: "Explore a Partnership for B2B SaaS",
    },
    whyThisIndustry: {
      heading: "The Problem in B2B SaaS",
      body: "Your software is a fit for a specific kind of company — but generic prospecting ignores that, so your team chases accounts that never convert. Intelinx defines your exact ICP, researches and prioritizes the accounts worth pursuing, adds the context that makes each one relevant, and opens conversations with the right decision-makers — then follows up until a meeting is booked.",
    },
    icpProfile: [
      { label: "Company Size", value: "30–500 employees" },
      { label: "Revenue", value: "$5M–$100M" },
      { label: "Company Stage", value: "Product-market fit, entering scaling phase" },
      { label: "Buyer Roles", value: "CTO, VP of Engineering, Head of Product, CEO" },
    ],
    signals: [
      "A target account just raised funding",
      "Rapid hiring on the teams you sell to",
      "A new initiative or launch in your category",
      "Expansion into new markets or regions",
    ],
    researches: [
      "Fit against your ICP",
      "Their current stack and team",
      "The context that makes the timing right",
      "The decision-makers and how to reach them",
    ],
    exampleActivation: {
      context: "A best-fit account — a 200-person logistics company — just hired a VP of Data and opened 6 analytics roles in two weeks.",
      message: "Hi Marcos — noticed you’re standing up a data team and hiring fast. Teams scaling analytics this quickly usually outgrow spreadsheets before the new headcount even lands. We’ve helped operators in your space get to clean, trustworthy dashboards in weeks — open to a quick look?",
    },
    impact: [
      "A steady flow of conversations with best-fit accounts",
      "Conversations that land because they’re personalized and well-timed",
      "A pipeline your team can forecast against",
    ],
    meta: {
      title: "Client Acquisition for B2B SaaS | Intelinx",
      description: "AI-powered client acquisition for B2B SaaS — define your ICP, prioritize best-fit accounts, and open the right conversations.",
      ogTitle: "Client Acquisition Infrastructure for B2B SaaS",
      ogDescription: "Define your ideal customer, prioritize the best-fit accounts, and open the right conversations with the people who decide.",
    },
  },
}
