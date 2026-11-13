import type { Project, ScriptNote } from "./types";

export const projects: Project[] = [
  {
    id: "tableedge",
    name: "TableEdge",
    status: "Shipped",
    live: true,
    sentence:
      "A restaurant operations app I shipped. Customers use it for administration, sales tracking, and cost and EBITDA reporting.",
    problem:
      "A restaurant’s sales, cost, and accounting numbers start in different products. Staff end up reconciling them by hand.",
    does: "TableEdge is a multi-tenant web app. It pulls point-of-sale and accounting data into one place for administration, sales tracking, and cost and EBITDA reporting.",
    contribution:
      "I built TableEdge and shipped it. It is live at tableedge.io, and customers use it. I designed the agent flows through prompt work with Claude. The source is private.",
    capabilities: ["Applications", "Data", "Cloud", "Automation", "AI"],
    stack: [
      {
        name: "TypeScript, React, and Next.js",
        why: "The interface and the API route handlers live in one typed codebase, with middleware for the session and route protection.",
      },
      {
        name: "Supabase PostgreSQL",
        why: "Tenant data, authentication, and row-level security sit in Postgres. Continuous integration includes a row-level security check.",
      },
      {
        name: "Vercel",
        why: "The app is deployed as a Next.js site. Runtime secrets stay in the host, and the build used in CI does not need real credentials.",
      },
      {
        name: "Toast, Square, and QuickBooks",
        why: "Toast, Square, and QuickBooks supply the sales and accounting data.",
      },
      {
        name: "Stripe and Plaid",
        why: "Stripe handles billing. Plaid connects bank accounts.",
      },
    ],
    flow: [
      "Toast, Square, QuickBooks",
      "Integration routes",
      "Supabase Postgres",
      "Next.js app",
      "Sales, cost, and EBITDA views",
    ],
    diagram: `flowchart TB
  Owner((Restaurant operator))

  subgraph AppShell["TableEdge app"]
    Dash["Dashboard<br/>[dashboard-client.tsx]"]
    BudgetUI["Budget<br/>[budget-client.tsx]"]
    HealthUI["Data health<br/>[data-health-client.tsx]"]
    DocsUI["Documents<br/>[documents-client.tsx]"]
    ComplianceUI["Compliance<br/>[compliance-client.tsx]"]
    IntegUI["Integrations UI<br/>[integrations-client.tsx]"]
  end

  subgraph API["API and sync"]
    MW["Middleware<br/>[middleware.ts]"]
    ToastSync["Toast sync<br/>[api/pos/toast-sync]"]
    SquareSync["Square sync<br/>[api/pos/square/sync]"]
    QBSync["QuickBooks sync<br/>[api/accounting/quickbooks/sync]"]
    PlaidSync["Plaid sync<br/>[api/bank/plaid/sync]"]
    StripeAPI["Stripe checkout<br/>[api/stripe/checkout]"]
  end

  subgraph Data["Data"]
    DB[("Supabase Postgres")]
  end

  subgraph Integrations["Integrations"]
    Toast["Toast"]
    Square["Square"]
    QB["QuickBooks"]
    Plaid["Plaid"]
    Stripe["Stripe"]
  end

  Owner -->|uses| Dash
  Dash --> BudgetUI
  Dash --> HealthUI
  Dash --> DocsUI
  Dash --> ComplianceUI
  Owner -->|connects sources| IntegUI
  IntegUI -->|requests actions| MW
  MW --> ToastSync
  MW --> SquareSync
  MW --> QBSync
  MW --> PlaidSync
  MW --> StripeAPI
  Toast -->|sales and labor| ToastSync
  Square -->|POS sales| SquareSync
  QB -->|accounting| QBSync
  Plaid -->|bank accounts| PlaidSync
  Stripe -.->|billing| StripeAPI
  ToastSync --> DB
  SquareSync --> DB
  QBSync --> DB
  PlaidSync --> DB
  DB -->|powers reports| Dash`,
    decisions: [
      "One TypeScript application owns both the screens and the request handlers, so permission rules are checked in the same repository as the interface.",
      "On pull requests, CI runs lint, a typecheck, middleware coverage, API permission checks, a secret scan, unit tests, and a production build. I run the dependency audit on the way to main, and weekly.",
      "The screens cover restaurant sales, budget, documents, compliance, and data health.",
    ],
    implemented: [
      "Authenticated multi-tenant app with organization administration.",
      "Sales, budget, documents, compliance, and data health.",
      "Toast, Square, and QuickBooks integrations.",
      "Stripe billing and Plaid bank linking.",
      "Agent flows designed through prompt work with Claude.",
      "Public site at tableedge.io.",
    ],
    links: [
      { label: "tableedge.io", href: "https://tableedge.io" },
      {
        label: "Email for the source",
        href: "mailto:aridawoodii@gmail.com?subject=TableEdge%20source",
      },
    ],
  },
  {
    id: "tableloop",
    name: "TableLoop",
    status: "Shipped",
    live: true,
    sentence:
      "A restaurant reservations and marketing app I shipped. Customers use it for bookings, guests, and campaigns.",
    problem:
      "Reservations, the guest list, and marketing usually sit in separate tools, so the booking and the campaign that led to it never meet.",
    does: "TableLoop is a multi-tenant web app for reservations, guest profiles, email automations, rewards, and Wi-Fi signup. A visit can be tied back to the campaign that brought the guest in.",
    contribution:
      "I built TableLoop and shipped it. It is live at tableloop.io, and customers use it. The source is private.",
    capabilities: ["Applications", "Automation", "Cloud", "AI"],
    stack: [
      {
        name: "JavaScript, React, and Next.js",
        why: "The screens and the route handlers live in one Next.js app, including reservations, messaging, billing, and the connections to other systems.",
      },
      {
        name: "Supabase PostgreSQL",
        why: "Restaurants, guests, reservations, and campaigns sit in Postgres. The test suite includes a tenant-isolation check.",
      },
      {
        name: "Vercel",
        why: "The production build runs on Vercel, where the runtime secrets are. GitHub Actions runs lint and tests on every push.",
      },
      {
        name: "Stripe",
        why: "Stripe handles billing and connected payments for a restaurant.",
      },
    ],
    flow: [
      "Reservation, walk-in, or campaign",
      "Guest profile",
      "Supabase Postgres",
      "Rewards, email, and Wi-Fi",
      "Visit tied back to the campaign",
    ],
    diagram: `flowchart TB
  Host((Restaurant host))

  subgraph AppShell["TableLoop app"]
    AuthUI["Auth<br/>[Auth.js]"]
    ResTab["Reservations<br/>[ReservationsTab.js]"]
    GuestUI["Guest profile<br/>[GuestProfile.js]"]
    Mkt["Marketing hub<br/>[MarketingHub.js]"]
    AutoUI["Automations<br/>[Automations.js]"]
    Seg["Segments<br/>[SegmentBuilder.js]"]
  end

  subgraph API["API"]
    ResAPI["Reservations API<br/>[api/reservations/*]"]
    LoyAPI["Loyalty API<br/>[api/loyalty/*]"]
    WifiAPI["Wi-Fi capture<br/>[api/wifi/*]"]
    StripeAPI["Stripe Connect<br/>[api/stripe-connect/*]"]
    MenuAI["Menu studio AI<br/>[api/menu-studio/ai/*]"]
  end

  subgraph Data["Data"]
    DB[("Supabase Postgres")]
  end

  subgraph Integrations["Integrations"]
    Stripe["Stripe"]
    Claude["Claude"]
    OT["OpenTable import"]
  end

  Host -->|signs in| AuthUI
  Host -->|books and seats| ResTab
  ResTab -->|creates and transitions| ResAPI
  ResAPI --> DB
  DB --> GuestUI
  GuestUI --> Seg
  Seg --> Mkt
  Mkt --> AutoUI
  AutoUI --> LoyAPI
  AutoUI --> WifiAPI
  LoyAPI --> DB
  WifiAPI --> DB
  ResAPI -.->|deposits| StripeAPI
  StripeAPI -->|charges| Stripe
  MenuAI -->|drafts| Claude
  OT -.->|imports bookings| ResAPI
  DB -->|visit tied to campaign| Mkt`,
    decisions: [
      "CI on every push runs lint and the test suite, including tenant isolation. Vercel runs the production build with the real secrets, so Actions does not need a second build with placeholders.",
      "Tokens for connected accounts are encrypted before they are stored.",
      "Menu studio and event proposals can draft with Claude. Reservations, billing, and guest records stay in the application code.",
    ],
    implemented: [
      "Reservations, guest profiles, segments, and email automations.",
      "Rewards, vouchers, and Wi-Fi guest capture.",
      "Campaign attribution back to the visit, covered by tests.",
      "Menu studio and private-event proposals, including Claude-backed drafting.",
      "Stripe billing.",
      "Public site at tableloop.io.",
    ],
    links: [
      { label: "tableloop.io", href: "https://www.tableloop.io" },
      {
        label: "Email for the source",
        href: "mailto:aridawoodii@gmail.com?subject=TableLoop%20source",
      },
    ],
  },
  {
    id: "teachat",
    name: "TeaChat",
    status: "Shipped",
    live: true,
    sentence:
      "A team chat and project-board app I shipped for the web, iPhone, and Android. Customers use it.",
    problem:
      "A small team ends up with messages in one product and the board in another, and the two drift apart.",
    does: "TeaChat is one workspace for channels, direct messages, threads, and boards with due dates, assignees, and checklists. The same workspace is on the web and in the iOS and Android apps.",
    contribution:
      "I built TeaChat and shipped it. Customers use it on the web and on the App Store. The source is private.",
    capabilities: ["Applications", "Cloud", "AI"],
    stack: [
      {
        name: "One web app, then Capacitor",
        why: "The product is a progressive web app. Capacitor wraps that same app for iOS and Android, so the three clients share the screens.",
      },
      {
        name: "Supabase",
        why: "Auth, Postgres, storage, and realtime sit in Supabase. Unread summaries go through an edge function, so the model key stays on the server.",
      },
      {
        name: "LiveKit",
        why: "Voice and video use LiveKit. On iPhone, an incoming call goes through CallKit. On Android, it opens a full-screen answer screen.",
      },
      {
        name: "Claude",
        why: "Spill the Tea summarizes unread messages. A Supabase function calls Claude, and the plan meters how often someone can use it.",
      },
    ],
    flow: [
      "Web, iPhone, or Android",
      "Same workspace",
      "Supabase",
      "Messages and boards",
      "Unread summary, on request",
    ],
    diagram: `flowchart TB
  Member((Team member))

  subgraph Clients["Clients"]
    Web["Web app<br/>[web/app.html]"]
    iOS["iOS shell<br/>[AppDelegate.swift]"]
    And["Android shell<br/>[MainActivity.java]"]
  end

  subgraph Caps["Capacitor bridge"]
    Cap["Capacitor<br/>[capacitor.config.ts]"]
    CalliOS["CallKit bridge<br/>[TeaCallManager.swift]"]
    CallAnd["Incoming call<br/>[IncomingCallActivity.java]"]
  end

  subgraph Backend["Supabase backend"]
    DB[("Supabase Postgres + Realtime")]
    Spill["Spill the Tea<br/>[spill-tea/index.ts]"]
    LK["LiveKit token<br/>[livekit-token/index.ts]"]
    Push["Push notify<br/>[notify-push/index.ts]"]
    ClaudeFn["Claude connector<br/>[claude-connector/*]"]
  end

  subgraph Integrations["Integrations"]
    LiveKit["LiveKit"]
    Claude["Claude"]
  end

  Member -->|opens workspace| Web
  Member -->|opens workspace| iOS
  Member -->|opens workspace| And
  Web --> Cap
  iOS --> Cap
  And --> Cap
  Cap -->|messages and boards| DB
  DB -->|realtime updates| Cap
  Cap -->|requests summary| Spill
  Spill -->|calls model| Claude
  Cap -->|starts call| LK
  LK -->|issues token| LiveKit
  iOS --> CalliOS
  And --> CallAnd
  CalliOS -.-> LiveKit
  CallAnd -.-> LiveKit
  DB --> Push
  ClaudeFn -.->|board and chat tools| Claude`,
    decisions: [
      "One web codebase ships to the browser and to both app stores, instead of three separate interfaces.",
      "The unread summary runs on the server. The app asks for it. The model key does not ship in the client.",
      "Calling is native on each phone. The web app does not pretend to be the phone’s incoming-call screen.",
    ],
    implemented: [
      "Channels, direct messages, threads, reactions, and file attachments.",
      "Boards with due dates, assignees, labels, checklists, and a calendar of those dates.",
      "Spill the Tea, a Claude summary of unread messages, gated by plan.",
      "iOS and Android builds with push and calling.",
      "Site at teachat.io and an App Store listing.",
    ],
    links: [
      { label: "teachat.io", href: "https://teachat.io" },
      {
        label: "App Store",
        href: "https://apps.apple.com/app/id6770593395",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=io.teachat.app",
      },
      {
        label: "Email for the source",
        href: "mailto:aridawoodii@gmail.com?subject=TeaChat%20source",
      },
    ],
  },
  {
    id: "cashroll",
    name: "Cashroll",
    status: "Shipped",
    live: true,
    sentence:
      "A rental portfolio app I built for profit and loss, cash flow after debt, and a tax summary that matches the screen.",
    problem:
      "Rental income, expenses, and debt usually live in spreadsheets, and a tax export can disagree with the numbers on the screen.",
    does: "Cashroll tracks properties, rent, expenses, short-term bookings, and cash flow after debt. The tax summary is built from the same figures as the on-screen Schedule E view.",
    contribution:
      "I built Cashroll and use it for a 14-property Nashville portfolio. The site is cashroll.ai. Checkout is built, and it does not charge anyone until live Stripe keys are turned on. The source is private.",
    capabilities: ["Applications", "Data", "AI"],
    stack: [
      {
        name: "One HTML app, plus the public site",
        why: "The working portfolio is a single web app on Supabase. The marketing pages, the DSCR calculator, and the privacy pages are a separate site.",
      },
      {
        name: "Supabase PostgreSQL",
        why: "Properties, units, transactions, bookings, and settings are in Postgres, with realtime updates when more than one person has the portfolio open.",
      },
      {
        name: "A tested tax engine",
        why: "Schedule E totals are computed in one engine. Tests require the on-screen summary, the per-property breakdown, and the exported lines to be the same number.",
      },
      {
        name: "Claude, behind a server function",
        why: "Ask Zalaa answers questions about the portfolio and can turn a receipt into a transaction. The function holds the model key, checks workspace membership, and meters use by plan.",
      },
    ],
    flow: [
      "Spreadsheet or receipt",
      "Import",
      "Supabase",
      "Profit and loss, cash flow after debt",
      "Tax summary that matches the screen",
    ],
    diagram: `flowchart TB
  Owner((Portfolio owner))

  subgraph AppShell["Cashroll app"]
    WebApp["Portfolio app<br/>[site/app.html]"]
    Site["Marketing site<br/>[site/index.html]"]
    DSCR["DSCR calculator<br/>[site/dscr-calculator.html]"]
  end

  subgraph Functions["Supabase functions"]
    Ask["Ask Zalaa<br/>[ask-zalaa/index.ts]"]
    Tax["Tax engine<br/>[tax-engine/engine.js]"]
    Checkout["Create checkout<br/>[create-checkout/index.ts]"]
    StripeHook["Stripe webhook<br/>[stripe-webhook/index.ts]"]
  end

  subgraph Data["Data"]
    DB[("Supabase Postgres")]
  end

  subgraph Integrations["Integrations"]
    Claude["Claude"]
    Stripe["Stripe"]
  end

  Owner -->|manages portfolio| WebApp
  Owner -->|reads product| Site
  Owner -->|runs calculator| DSCR
  WebApp -->|loads and saves| DB
  WebApp -->|asks about portfolio| Ask
  Ask -->|sends prompts| Claude
  Ask --> DB
  WebApp -->|builds Schedule E| Tax
  Tax --> DB
  Tax -->|same totals on screen and export| WebApp
  WebApp -.->|starts billing| Checkout
  Checkout -.-> Stripe
  Stripe -.->|events| StripeHook
  StripeHook --> DB`,
    decisions: [
      "The tax figures have one path. A disagreement between the screen and the export fails the test, because those numbers have to add up.",
      "The model is called from a Supabase function. The HTML app sends the question and the workspace. It does not carry the key.",
      "Stripe checkout and the store webhook are in the project. They fail closed until the live keys exist, so the portfolio I use is not waiting on billing.",
    ],
    implemented: [
      "Properties, rent roll, transactions, short-term bookings, and cash flow after debt.",
      "A Schedule E summary and a per-property export that tests keep in agreement.",
      "Ask Zalaa for portfolio questions and receipt import.",
      "Google sign-in on the public site.",
      "Checkout code that does not charge until live Stripe keys are set.",
      "Public site at cashroll.ai.",
    ],
    links: [
      { label: "cashroll.ai", href: "https://cashroll.ai" },
      {
        label: "Email for the source",
        href: "mailto:aridawoodii@gmail.com?subject=Cashroll%20source",
      },
    ],
  },
  {
    id: "job-assistant",
    name: "AI Job Application Assistant",
    status: "Shipped",
    live: true,
    sentence:
      "A free Chrome extension that fills applications and drafts writing with AI that stays on the computer. More than 500 people use it.",
    problem:
      "Most application tools give away autofill and charge for the writing, because the model runs on their server and the resume leaves the machine.",
    does: "It builds a profile from a PDF or Word resume, fills supported application forms, drafts open-ended answers, tailors the resume, and writes cover letters. It never presses Submit.",
    contribution:
      "I built it and published it. More than 500 people use it. It is free, MIT licensed, and on the Chrome Web Store. A separate desktop version, using Electron and Playwright, is still in progress.",
    capabilities: ["Applications", "Automation", "AI"],
    stack: [
      {
        name: "Plain JavaScript, Manifest V3",
        why: "There is no framework and no build step for the extension itself. That keeps remote code out of a tool that reads a resume.",
      },
      {
        name: "Chrome’s built-in model or Ollama",
        why: "The writing runs locally, so the features stay free and the resume is not sent to an application server.",
      },
      {
        name: "Vendored pdf.js, JSZip, and jsPDF",
        why: "Resume import and export need those libraries, and vendoring them avoids pulling code at runtime.",
      },
      {
        name: "GitHub Actions",
        why: "The workflow lints for syntax, manifest rules, remote code, and personal data, runs unit tests, and builds the store zip.",
      },
    ],
    flow: [
      "Desktop UI and pipeline controls",
      "Main coordinator over IPC",
      "Search, match, and local AI",
      "Browser-driven apply and tracker",
      "Filled form, still unsubmitted",
    ],
    diagramTitle: "Desktop app system diagram",
    diagram: `flowchart TB
  Seeker((Job seeker))

  subgraph Desktop["Desktop shell"]
    UI["Desktop UI<br/>[App.tsx]"]
    Pipeline["Pipeline controls<br/>[PipelinePanel.tsx]"]
    Preload["Desktop API<br/>[preload/index.ts]"]
    Main["Main coordinator<br/>[electron/main/index.ts]"]
    BrowserCtrl["Browser controller<br/>[browser-controller.ts]"]
  end

  subgraph ProfileAI["Profile and AI"]
    ProfileUI["Profile and resume UI<br/>[ProfilePanel.tsx]"]
    ResumeImport["Resume import<br/>[resume/import.ts]"]
    AiUI["AI assistance UI<br/>[AiAssistPanel.tsx]"]
    Cover["AI writing assists<br/>[ai/cover.ts]"]
    OllamaClient["Ollama client<br/>[ollama-client.ts]"]
  end

  subgraph Discovery["Job discovery"]
    Search["Multi-source search<br/>[search/index.ts]"]
    Adapters["Search adapters<br/>LinkedIn / Indeed / Google"]
    Match["Job matching<br/>[match/engine.ts]"]
    Notify["Notifications<br/>[notify/index.ts]"]
  end

  subgraph ApplyFlow["Application flow"]
    Apply["Application automation<br/>[apply/index.ts]"]
    Fill["Form filling<br/>[apply/fill.ts]"]
    Tracker["Application tracker<br/>[tracker/index.ts]"]
  end

  subgraph LocalState["Local state"]
    Prefs["Preferences store<br/>[preferences-store.ts]"]
    ProfileStore["Profile store<br/>[profile-store.ts]"]
    ImportExport["Profile import/export<br/>[import/index.ts]"]
  end

  Browser["Chrome or Edge"]
  Ollama["Local Ollama"]

  Seeker -->|uses| UI
  UI -->|renders| Pipeline
  Pipeline -->|requests actions| Preload
  Preload -->|forwards IPC| Main
  Main -->|renders| ProfileUI
  ProfileUI -->|imports resume| ResumeImport
  Main -->|renders| AiUI
  AiUI -->|requests AI assists| Cover
  Cover -->|calls| OllamaClient
  OllamaClient -->|sends prompts| Ollama
  Main -->|runs search| Search
  Search -->|dispatches searches| Adapters
  Main -->|runs matching| Match
  Main -->|sends notifications| Notify
  Main -->|runs apply| Apply
  Apply -->|fills forms| Fill
  Main -->|updates tracker| Tracker
  Main -->|loads and saves| Prefs
  Main -->|loads and saves| ProfileStore
  Main -->|imports profiles| ImportExport
  Main --> BrowserCtrl
  BrowserCtrl -->|drives| Browser`,
    decisions: [
      "Ollama rejects browser extension origins. The extension installs a declarativeNetRequest rule that removes the Origin header only on its own requests to the configured local address. Other websites stay blocked, and a manual fallback remains for unusual setups.",
      "Tailoring may reword what is already true. Suggested employers, titles, dates, numbers, and tools that are not on the resume are blocked, and the person approves the change. Equal-opportunity questions are never filled by the model.",
      "Confirm-before-submit is the product rule: the extension does not press Submit, Next, or Apply.",
    ],
    implemented: [
      "Autofill on Greenhouse, Lever, and Ashby, plus basic Workday and LinkedIn Easy Apply.",
      "Field-by-field review of what was filled, drafted, or still needs a person.",
      "Resume match, tailoring to Word or PDF, and fact-checked cover letters.",
      "An application tracker with stages, notes, reminders, and CSV export.",
      "Unit tests in CI, plus a larger set of local end-to-end harnesses.",
      "Chrome Web Store listing and a GitHub Pages site.",
    ],
    links: [
      {
        label: "Website",
        href: "https://aridawoodi.github.io/job-apply-assistant/",
      },
      {
        label: "Chrome Web Store",
        href: "https://chromewebstore.google.com/detail/ai-job-application-assist/ianfkblcpiejjcjammkdloflpjhodaen",
      },
      {
        label: "GitHub",
        href: "https://github.com/aridawoodi/job-apply-assistant",
      },
    ],
  },
  {
    id: "scoreboard",
    name: "ScoreBoard",
    status: "iOS app",
    live: false,
    sentence:
      "An iOS scoreboard for creating games, joining with a code, and syncing scores across devices.",
    problem:
      "A shared game needs one board that every player sees, including people who do not want to make an account.",
    does: "Players create a game, share a code, enter scores, and see updates as other devices write. Guest play and signed-in profiles both exist, with history and player statistics.",
    contribution:
      "I built ScoreBoard. On my resume it is ScoreBoard Sync Pro. The source is private.",
    capabilities: ["Applications", "Cloud"],
    stack: [
      {
        name: "SwiftUI",
        why: "Native SwiftUI, structured as models, views, and view models.",
      },
      {
        name: "Amazon Cognito",
        why: "Accounts and sessions are handled by Cognito, with a guest path for people who are not signing up.",
      },
      {
        name: "AWS AppSync",
        why: "Game state is GraphQL, and subscriptions are what make a score appear on the other devices.",
      },
      {
        name: "GitHub Actions on macOS",
        why: "The build uses a placeholder Amplify configuration so the pipeline can compile without real backend credentials in the repo.",
      },
    ],
    flow: [
      "SwiftUI client",
      "Cognito or guest",
      "AppSync GraphQL",
      "Subscription update",
      "Shared scoreboard",
    ],
    diagram: `flowchart TB
  Player((Player))

  subgraph iOS["iOS app"]
    App["App entry<br/>[ScoreBoardApp.swift]"]
    Content["Root UI<br/>[ContentView.swift]"]
    Create["Create game<br/>[CreateGameView.swift]"]
    Join["Join game<br/>[JoinGameView.swift]"]
    Board["Scoreboard<br/>[Scoreboardview.swift]"]
    AuthUI["Sign in / guest<br/>[LoginView.swift]"]
    GameVM["Game view model<br/>[GameViewModel.swift]"]
    BoardVM["Scoreboard view model<br/>[ScoreboardViewModel.swift]"]
    AuthVM["Auth view model<br/>[AuthenticationViewModel.swift]"]
  end

  subgraph Network["Network"]
    GameSvc["Game service<br/>[GameService.swift]"]
    Amplify["Amplify client<br/>[AmplifyClient.swift]"]
  end

  subgraph Cloud["AWS"]
    Cognito["Amazon Cognito"]
    AppSync["AWS AppSync GraphQL"]
    S3["S3 assets"]
  end

  Player -->|opens app| App
  App --> Content
  Content -->|creates| Create
  Content -->|joins with code| Join
  Content -->|shows live board| Board
  Content -->|signs in or continues as guest| AuthUI
  Create --> GameVM
  Join --> GameVM
  Board --> BoardVM
  AuthUI --> AuthVM
  GameVM --> GameSvc
  BoardVM --> GameSvc
  AuthVM --> Amplify
  GameSvc --> Amplify
  Amplify -->|accounts and sessions| Cognito
  Amplify -->|queries and mutations| AppSync
  AppSync -->|subscription update| BoardVM
  BoardVM -->|shared scoreboard| Board
  Amplify -.->|profile assets| S3`,
    decisions: [
      "Guest play and registered profiles are both first-class. A game should be joinable before someone decides to create an account.",
      "Realtime is a subscription on the game, not a timer that refetches the whole board.",
      "Backend configuration files that carry endpoints stay out of git. CI writes a well-formed placeholder so the Amplify build phase still runs.",
    ],
    implemented: [
      "Create and join games, including game codes and multiple players.",
      "Score entry and live synchronization across connected devices.",
      "Guest mode, Cognito sign-in, and profile management.",
      "Player statistics and historical games.",
      "A macOS GitHub Actions build and test workflow.",
      "User assets stored in S3.",
    ],
    links: [
      {
        label: "Email for the source",
        href: "mailto:aridawoodii@gmail.com?subject=ScoreBoard%20source",
      },
    ],
  },
  {
    id: "policy-assistant",
    name: "Azure State Policy Assistant",
    status: "Proof of concept",
    live: false,
    sentence:
      "A small app that answers policy questions from source passages, locally or through Azure.",
    problem:
      "Someone asking a policy question needs the passages behind the answer, and a stop when the documents do not cover it.",
    does: "The person asks a question. The API retrieves fictional policy passages and either returns the excerpts or, in Azure mode, answers from those passages.",
    contribution:
      "I built this to learn grounded retrieval on Azure. Local excerpts, Azure search, and Entra sign-in work. I have not deployed it. The source is private.",
    capabilities: ["Applications", "Cloud", "AI"],
    stack: [
      {
        name: "React, TypeScript, and Vite",
        why: "The form, the answer, the source inspection, and the loading and error states stay in one accessible client.",
      },
      {
        name: "A TypeScript HTTP API",
        why: "Validation, a request-size cap, a per-IP rate limit, security headers, and metadata-only logs live on the server. Keys do not ship to the browser.",
      },
      {
        name: "Azure OpenAI and Azure AI Search",
        why: "Azure mode embeds the passages, runs hybrid search, and generates an answer grounded in the retrieved text. A search-only mode can return excerpts without a generation call.",
      },
      {
        name: "Entra ID and MSAL",
        why: "Browser sign-in uses the authorization code flow with PKCE. The API checks the token signature, issuer, audience, expiry, and an application role.",
      },
    ],
    flow: [
      "Question",
      "API validation",
      "Local excerpts or Azure hybrid search",
      "Grounded answer",
      "Sources on screen",
    ],
    diagram: `flowchart TB
  Asker((Policy asker))

  subgraph Client["Client"]
    UI["Question UI<br/>[src/main.tsx]"]
    AuthClient["Entra sign-in<br/>[src/auth.ts]"]
    Redirect["Auth redirect<br/>[src/redirect.ts]"]
  end

  subgraph API["API"]
    Server["HTTP API<br/>[server/index.ts]"]
    Auth["Token and role check<br/>[server/auth.ts]"]
    Policies["Local passages<br/>[server/policies.ts]"]
    RAG["Retrieval and answer<br/>[server/rag.ts]"]
  end

  subgraph Azure["Azure"]
    Search["Azure AI Search"]
    OpenAI["Azure OpenAI"]
    Entra["Entra ID"]
  end

  Asker -->|asks a question| UI
  Asker -->|signs in when required| AuthClient
  AuthClient --> Redirect
  AuthClient -->|PKCE code flow| Entra
  UI -->|POST question| Server
  Server --> Auth
  Auth -->|validates JWT and role| Entra
  Server -->|local mode| Policies
  Policies -->|exact excerpts| UI
  Server -->|Azure mode| RAG
  RAG -->|hybrid search| Search
  RAG -->|grounded generation| OpenAI
  RAG -->|answer plus sources| UI`,
    decisions: [
      "Local mode returns the exact passages, so I can show the path without an Azure account. Azure mode runs hybrid search and writes the answer from those passages.",
      "Sign-in and the model are separate. A local demo can run without login. The server will not start a public deployment with authentication off.",
      "The sample set is six short fictional passages. PDF ingestion is the next step.",
    ],
    implemented: [
      "Question form with source inspection, loading, and error states.",
      "Local retrieval over six fictional passages.",
      "Azure hybrid retrieval and grounded generation, verified against real Azure resources.",
      "Azure AI Search excerpt mode that does not call OpenAI.",
      "Entra sign-in and a Policy.Reader role check.",
      "Tests for authentication and retrieval.",
    ],
    links: [
      {
        label: "Email for the source",
        href: "mailto:aridawoodii@gmail.com?subject=Policy%20assistant%20source",
      },
    ],
  },
];

export const scripts: ScriptNote[] = [
  {
    id: "toast-downloader",
    name: "Toast report downloader",
    sentence:
      "A Python and Selenium script that downloads Toast sales and labor reports for a date or a range. It reuses a browser session or waits for a person to log in. It does not store the password.",
    href: "https://github.com/aridawoodi/ToastWebsite-FileDownloading",
  },
  {
    id: "csv-to-sheets",
    name: "CSV to Google Sheets",
    sentence:
      "A Python script that appends sales and labor CSVs from local folders or Google Drive into specific sheet tabs, and skips dates already present. Testing writes to Excel. Production writes to Sheets.",
    href: "https://github.com/aridawoodi/Restaurant-Daily-Operation-Sales-Automation",
  },
];
