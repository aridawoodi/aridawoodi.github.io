export type SkillGroup = {
  id: string;
  title: string;
  items: string;
  context: string;
};

export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    title: "Languages",
    items: "Python, TypeScript, JavaScript, SQL, Swift, DAX",
    context:
      "Python and Django run the internal workflow apps. TypeScript and JavaScript run TableEdge, the Power Apps code app, and the Chrome extension. Swift is the ScoreBoard client. SQL is the reporting layer. C# and .NET show up when a legacy Asurion project needs a change, not as the main stack.",
  },
  {
    id: "frontend",
    title: "Interfaces",
    items: "React, Next.js, SwiftUI, Power Apps",
    context:
      "TableEdge is React 19 on the Next.js App Router. ScoreBoard is SwiftUI. The job-description app is a Power Apps code app, with canvas and model-driven apps used where that fit the process.",
  },
  {
    id: "backend",
    title: "Services and APIs",
    items: "Django, Next.js route handlers, Node, AppSync",
    context:
      "Django serves the internal workflow applications. TableEdge uses Next.js route handlers. The policy proof of concept is a small TypeScript HTTP API. ScoreBoard talks to AWS AppSync over GraphQL.",
  },
  {
    id: "data",
    title: "Data",
    items: "PostgreSQL, Supabase, Power BI, Excel, Dataverse",
    context:
      "PostgreSQL holds the workflow apps and the store pipelines. Supabase is the Postgres and auth layer for TableEdge. Power BI and Excel are how store and operations reporting reaches leaders. Dataverse is the governed store for the Power Platform apps. Pandas and Google Sheets appear in an earlier public script, not as the main data platform.",
  },
  {
    id: "cloud",
    title: "Cloud and infrastructure",
    items: "AWS Lambda, ECS, Terraform, Vercel, Azure AI, Entra",
    context:
      "Lambda, ECS, and Terraform are daily Asurion infrastructure. Vercel hosts TableEdge. The public policy proof of concept uses Azure OpenAI, Azure AI Search, and Entra sign-in. My resume also lists Azure App Service and Functions; that hosting is not what the proof of concept deploys. Docker, Kubernetes, and Google Cloud are working knowledge, not systems I am presenting as production ownership.",
  },
  {
    id: "delivery",
    title: "Delivery",
    items: "GitHub Actions, Terraform, Power Platform Pipelines",
    context:
      "Actions tests and deploys the custom applications, builds the Chrome extension zip, and runs the ScoreBoard macOS build with a placeholder Amplify config so real credentials stay out of the repo. Pipelines promote Power Platform solutions.",
  },
  {
    id: "ai",
    title: "AI in products",
    items: "On-device models, Azure RAG, Copilot Studio",
    context:
      "The Chrome extension uses Chrome’s built-in model or Ollama, and it fact-checks drafts against the resume. The policy assistant retrieves fictional passages locally and can switch to Azure hybrid search and grounded generation. Copilot Studio is the HR-document agent at work. TableEdge’s agent flows came from iterative prompt design. Claude Code, GitHub Copilot, and Cursor are how I work, not products I am selling.",
  },
  {
    id: "tools",
    title: "Integrations and tools",
    items: "Toast, Square, QuickBooks, Stripe, Plaid, BigPanda, Git, Jira",
    context:
      "TableEdge pulls restaurant data from Toast, Square, and QuickBooks. Stripe and Plaid are in that codebase for billing and bank linking. BigPanda receives alerting events from the internal support work. Figma was part of the TableEdge landing page.",
  },
];
