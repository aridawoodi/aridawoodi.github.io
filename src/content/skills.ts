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
      "Python and Django run the internal workflow apps. TypeScript and JavaScript run TableEdge, the Power Apps code app, and the Chrome extension. Swift is the ScoreBoard client. SQL is how I report on the data. I also update legacy C# and .NET projects at Asurion.",
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
      "Django serves the internal workflow applications. TableEdge uses Next.js route handlers. The policy assistant is a TypeScript HTTP API. ScoreBoard talks to AWS AppSync over GraphQL.",
  },
  {
    id: "data",
    title: "Data",
    items: "PostgreSQL, Supabase, Power BI, Excel, Dataverse",
    context:
      "PostgreSQL holds the workflow apps and the store pipelines. Supabase is the Postgres and auth layer for TableEdge. Power BI and Excel are how I get store and operations reporting to leaders. Dataverse holds the Power Platform apps. I have also used pandas and Google Sheets to load restaurant CSVs.",
  },
  {
    id: "cloud",
    title: "Cloud and infrastructure",
    items: "AWS Lambda, ECS, Terraform, Vercel, Azure AI, Entra",
    context:
      "Lambda, ECS, and Terraform are my daily Asurion infrastructure. Vercel hosts TableEdge. The policy assistant uses Azure OpenAI, Azure AI Search, and Entra sign-in. I also work with Azure App Service and Functions, and I know Docker, Kubernetes, and Google Cloud.",
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
      "The Chrome extension uses Chrome’s built-in model or Ollama, and it checks drafts against the resume. The policy assistant retrieves passages locally and can switch to Azure hybrid search. At Asurion I built a Copilot Studio agent over HR documents. TableEdge’s agent flows came from prompt work with Claude. I use Claude Code, GitHub Copilot, and Cursor while I build.",
  },
  {
    id: "tools",
    title: "Integrations and tools",
    items: "Toast, Square, QuickBooks, Stripe, Plaid, BigPanda, Git, Jira",
    context:
      "TableEdge pulls restaurant data from Toast, Square, and QuickBooks. Stripe and Plaid are in that codebase for billing and bank linking. BigPanda receives alerting events from the internal support work. Figma was part of the TableEdge landing page.",
  },
];
