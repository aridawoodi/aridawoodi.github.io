export const profile = {
  name: "Ari Dawoodi",
  role: "Software engineer",
  location: "Nashville, TN",
  email: "aridawoodii@gmail.com",
  phone: "(615) 440-0763",
  phoneHref: "tel:+16154400763",
  linkedin: "https://www.linkedin.com/in/aridawoodi",
  github: "https://github.com/aridawoodi",
  resume: "/Ari_Dawoodi_Resume.pdf",
  headline: "I build applications, data paths, and the delivery around them.",
  lede: "At Asurion since 2021 I work in two kinds of systems: custom workflow applications on AWS, and Power Platform apps that stay inside Microsoft’s security model. I also ship TableEdge, a restaurant operations product, and a local-AI assistant for job applications.",
} as const;

export const record = [
  {
    label: "Asurion",
    detail: "Workflow apps, pipelines, reporting",
    meta: "Since 2021",
  },
  {
    label: "TableEdge",
    detail: "Restaurant operations product",
    meta: "In production",
    live: true,
  },
  {
    label: "Job assistant",
    detail: "Chrome extension, on-device AI",
    meta: "Web Store",
  },
  {
    label: "Delivery",
    detail: "Terraform, GitHub Actions, Pipelines",
    meta: "AWS + Microsoft",
  },
] as const;

export const approach = [
  {
    title: "Match the platform to the constraint",
    body: "When I need to own the infrastructure, I build Django and Python services on PostgreSQL, with Terraform for AWS and GitHub Actions for test and deploy. When the app should live in Microsoft’s managed environment, I use Power Apps, Dataverse, and Power Platform Pipelines instead of pretending it is the same kind of system.",
  },
  {
    title: "Keep secrets and models in the right place",
    body: "The policy assistant keeps cloud keys on the server. The job assistant runs AI on the computer, stores the profile in the browser, and does not keep job-board passwords. TableEdge’s runtime secrets sit in the host, not in the repository.",
  },
  {
    title: "Make delivery something I can repeat",
    body: "Terraform describes the AWS resources so an environment can be rebuilt. GitHub Actions tests and deploys the custom apps, and it gates TableEdge with lint, permission checks, a secret scan, tests, and a production build. Power Platform Pipelines promote the Microsoft apps from dev to prod.",
  },
  {
    title: "Do not let generated text outrun the source",
    body: "Resume tailoring blocks employers, titles, dates, numbers, and tools that are not already on the resume. Cover letters get the same check. The policy proof of concept shows the passages behind an answer, and I treat its Azure abstention as model behavior, not a verified guarantee.",
  },
] as const;

export const education = [
  {
    title: "Bachelor’s, Computer Science / Software Engineering",
    detail: "Foundation of Technical Education, Kirkuk, Iraq · 2003–2007",
  },
  {
    title: "Data Analytics Bootcamp",
    detail: "Nashville Software School · 2020",
  },
  {
    title: "Computer science coursework, 40 credit hours",
    detail:
      "Middle Tennessee State University · 2016–2018. This is coursework, not a completed second degree.",
  },
  {
    title: "Graduate computer science coursework, 3 credit hours",
    detail: "Tennessee State University · 2021. This is not a completed master’s degree.",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    detail: "2023",
  },
  {
    title: "ServiceNow Admin Certificate",
    detail: "2025",
  },
  {
    title: "Microsoft Learn Power Platform training",
    detail: "Training badges",
  },
] as const;
