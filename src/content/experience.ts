import type { Role } from "./types";

export const roles: Role[] = [
  {
    id: "asurion",
    title: "Software Engineer 2 · DevOps Engineer 2 · Technology Analyst",
    org: "Asurion",
    when: "2021–present",
    place: "Nashville, TN",
    summary:
      "Technology Automations and Reporting Solutions. I design tools, reports, and automations for IT operations and internal support, in both custom software and Microsoft’s Power Platform.",
    points: [
      "Build and maintain Django and Python workflow applications on PostgreSQL: a helpdesk incident queue, incident assignment, PTO requests, approval flows, and an internal site for the service desk and desktop support.",
      "Provision AWS with Terraform: databases, networking rules, ECS, Lambda, and related resources, so environments can be created again instead of rebuilt by hand.",
      "Test and deploy with GitHub Actions, and contribute to legacy C#/.NET projects when those systems need a change.",
      "Built scheduled Lambda pipelines that pull uBreakiFix store APIs — camera data, device status, door-sensor counts, store hours, and network uptime — into PostgreSQL, and send an email when a job fails.",
      "Write SQL for Power BI visuals of store location, time zone, and visitor counts by hour and day, and use that to explain traffic at low-revenue stores.",
      "Built a separate Power Platform path: a Copilot Studio agent over HR documents, a Power Apps code app in React and TypeScript, Dataverse tables, and dev-to-prod promotion with Power Platform Pipelines.",
    ],
    more: [
      "Modeled a process in Dataverse and delivered a model-driven app so records that lived in separate spreadsheets sit in one governed source.",
      "Push events to BigPanda for alerting, and add features requested through Jira and Confluence ticket flows.",
      "Automate daily and monthly reports with Python and openpyxl, and build databases from multiple endpoints for Power BI.",
      "Use pay-as-you-go cloud services where that keeps cost down. I do not attach a savings number to that.",
      "Use Claude Code, GitHub Copilot, and Cursor on internal tooling. The agents do not replace the design of the system.",
    ],
  },
  {
    id: "renas",
    title: "Instructor, Excel and Power BI",
    org: "Renas Academy",
    when: "2022–2023",
    place: "Nashville, TN",
    summary:
      "Taught Excel and Power BI through formulas, pivot tables, VBA, dashboards, DAX, and Query Editor, using real data rather than isolated exercises.",
  },
  {
    id: "nss",
    title: "Apprentice Data Analyst",
    org: "Nashville Software School",
    when: "2020–2022",
    place: "Nashville, TN",
    summary:
      "Project-based training across cleaning, exploration, reporting, and visualization with SQL, Excel, Power BI, and Python.",
  },
  {
    id: "brugada",
    title: "Assistant Manager",
    org: "Brugada Bar & Restaurant",
    when: "2014–2020",
    place: "Nashville, TN",
    summary:
      "Ran daily operations, personnel records, and inventory, and analyzed sales in Excel for the general manager. That operations context is part of why TableEdge is a restaurant product.",
  },
  {
    id: "kirkuk-admin",
    title: "Office Administrator",
    org: "Department of Security and Affairs, Kirkuk North Oil Company",
    when: "2007–2014",
    place: "Kirkuk, Iraq",
    summary:
      "Supervised staff, maintained the department database, and reported on outstanding items.",
  },
  {
    id: "interpreter",
    title: "Interpreter",
    org: "Mission Essential Personnel / Global Linguist Solutions",
    when: "2009–2010",
    place: "Kirkuk, Iraq",
    summary:
      "Interpreted among English, Arabic, and Kurdish during Operation Iraqi Freedom, including classified documents in meetings, training, and patrols. Received U.S. Army commendations.",
  },
];
