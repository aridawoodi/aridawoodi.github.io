import type { Project, ScriptNote } from "./types";

/**
 * Add a project by appending to `projects` or `scripts`.
 * Projects render as case studies. Scripts render as short public notes.
 * Keep claims tied to the repository or the resume. Do not add metrics
 * that are not already documented.
 */
export const projects: Project[] = [
  {
    id: "tableedge",
    name: "TableEdge",
    status: "In production",
    live: true,
    sentence:
      "A restaurant operations app for administration, sales tracking, and cost and EBITDA reporting.",
    problem:
      "A restaurant’s sales, cost, and accounting numbers start in different products. Staff end up reconciling them by hand.",
    does: "TableEdge is a multi-tenant web app. It pulls point-of-sale and accounting data into one place for administration, sales tracking, and cost and EBITDA reporting.",
    contribution:
      "Personal project I design and ship on weekends. My resume states that it is in production with one paying restaurant customer. The repository is private; I can walk through it in an interview. Agent flows in the product were built through iterative prompt design.",
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
        why: "Those are the operational sources: point-of-sale sales and accounting data, rather than a generic file upload.",
      },
      {
        name: "Stripe and Plaid",
        why: "The codebase includes billing and bank-link surfaces. I am not publishing revenue or transaction volume.",
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
      "CI on pull requests runs lint, a typecheck, middleware route coverage, API permission gates, a secret scan, unit tests with a coverage floor, and a production build. Dependency audit runs on the way to main and weekly, after Actions minutes were being spent retesting the same commits.",
      "The product is restaurant-specific. The screens cover sales, budget, documents, compliance, and data health rather than a generic admin template.",
    ],
    implemented: [
      "Authenticated multi-tenant app with organization administration.",
      "Sales, budget, documents, compliance, and data-health areas in the app.",
      "Integration surfaces for Toast, Square, QuickBooks, and additional connectors present in the source.",
      "Stripe billing and Plaid bank linking in the codebase.",
      "Agent flows built through iterative prompt design.",
      "A public site at tableedge.io.",
    ],
    notClaimed: [
      "I do not publish a user count beyond the one paying restaurant customer stated on my resume.",
      "I do not claim a measured revenue or performance delta.",
      "Commit history includes AI-assisted development. I do not describe every line as hand-written.",
    ],
    links: [
      { label: "tableedge.io", href: "https://tableedge.io" },
      {
        label: "Private source, on request",
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
      "I built and published it. It is MIT licensed, listed on the Chrome Web Store, and has a public site on GitHub Pages. A desktop companion in a separate repository is still in progress and is not this extension.",
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
    notClaimed: [
      "I do not publish install counts or a claim that it outperforms larger commercial tools on site coverage.",
      "The desktop app (Electron, TypeScript, Playwright, and Ollama) is a separate in-progress repository. It is not the shipped extension, and I am not presenting it as a finished release.",
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
      "I built the iOS app. My resume refers to it as ScoreBoard Sync Pro. The repository is private, and I do not have a public store link to offer here.",
    capabilities: ["Applications", "Cloud"],
    stack: [
      {
        name: "SwiftUI",
        why: "The client is a native iOS app, organized as models, views, and view models rather than a wrapped website.",
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
    ],
    notClaimed: [
      "No public App Store link is listed because I am not putting an unverified store URL on this site.",
      "S3 is in the project for user assets. I am not describing a content platform beyond that.",
    ],
    links: [
      {
        label: "Private source, on request",
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
      "A grounded assistant has to show where an answer came from, and it has to refuse questions the documents do not cover. This repository is a verified slice of that path, not a production system.",
    does: "A person asks a question. The API retrieves fictional policy passages and either returns the excerpts or, in Azure mode, asks a model to answer from those passages. Unsupported questions are part of the demo.",
    contribution:
      "I built the proof of concept. Local mode, the Azure retrieval path, and Entra sign-in are implemented. Cloud hosting for the app is still pending. The repository is private.",
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
      "Local mode returns exact excerpts so the retrieval path can be explained without an Azure account. Azure mode is a separate, verified provider switch, not a mock.",
      "Authentication and the model provider are separate settings. A localhost demo can run without sign-in. The server refuses to start a public deployment with authentication disabled.",
      "The corpus is six fictional passages that are already small chunks. PDF ingestion is intentionally later.",
    ],
    implemented: [
      "Question form with source inspection, loading, and error states.",
      "Local retrieval over six fictional passages.",
      "Azure hybrid retrieval and grounded generation, verified against real Azure resources.",
      "Azure AI Search excerpt mode that does not call OpenAI.",
      "Entra sign-in and a Policy.Reader role check.",
      "Tests around auth and retrieval. The repository itself says those tests are not a full evaluation.",
    ],
    notClaimed: [
      "No deployed application hosting, uploaded documents, tenant separation, or streaming.",
      "Citations are prompted, not mechanically verified. Azure abstention depends on the model.",
      "The rate limit is per process and IP. It is not a distributed control.",
      "An agent that drafts a checklist and waits for approval is described as future work. This is a fixed retrieval pipeline.",
    ],
    links: [
      {
        label: "Private source, on request",
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
