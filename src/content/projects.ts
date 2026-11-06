import type { Project, ScriptNote } from "./types";

export const projects: Project[] = [
  {
    id: "tableedge",
    name: "TableEdge",
    status: "Shipped",
    live: true,
    sentence:
      "A restaurant operations app I shipped for administration, sales tracking, and cost and EBITDA reporting.",
    problem:
      "A restaurant’s sales, cost, and accounting numbers start in different products. Staff end up reconciling them by hand.",
    does: "TableEdge is a multi-tenant web app. It pulls point-of-sale and accounting data into one place for administration, sales tracking, and cost and EBITDA reporting.",
    contribution:
      "I built TableEdge and shipped it. It is live at tableedge.io, with one paying restaurant customer. I designed the agent flows through prompt work with Claude. The source is private.",
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
    id: "job-assistant",
    name: "AI Job Application Assistant",
    status: "Shipped",
    live: true,
    sentence:
      "A free Chrome extension that fills applications and drafts writing with AI that stays on the computer.",
    problem:
      "Most application tools give away autofill and charge for the writing, because the model runs on their server and the resume leaves the machine.",
    does: "It builds a profile from a PDF or Word resume, fills supported application forms, drafts open-ended answers, tailors the resume, and writes cover letters. It never presses Submit.",
    contribution:
      "I built it and published it. It is free, MIT licensed, and on the Chrome Web Store. A separate desktop version, using Electron and Playwright, is still in progress.",
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
      "Resume on the computer",
      "Profile in the browser",
      "Local model",
      "Fact check",
      "Filled form, still unsubmitted",
    ],
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
