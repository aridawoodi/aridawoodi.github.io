import { useEffect, useId, useState } from "react";
import { projects, scripts } from "../content/projects";
import { filters, type Filter, type Project } from "../content/types";

function external(href: string) {
  return href.startsWith("http");
}

function CaseStudy({ project }: { project: Project }) {
  return (
    <div className="study" id={`${project.id}-study`}>
      <div className="study-grid">
        <div>
          <h4>Problem</h4>
          <p>{project.problem}</p>
          <h4>What it does</h4>
          <p>{project.does}</p>
          <h4>My part</h4>
          <p>{project.contribution}</p>
        </div>
        <div>
          <h4>Why this stack</h4>
          <ul className="stack">
            {project.stack.map((item) => (
              <li key={item.name}>
                <strong>{item.name}.</strong> {item.why}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {project.flow ? (
        <div className="flow-block">
          <h4>Path through the system</h4>
          <ol className="flow">
            {project.flow.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      ) : null}
      <div className="study-grid">
        <div>
          <h4>Decisions</h4>
          <ul>
            {project.decisions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>What I built</h4>
          <ul>
            {project.implemented.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className="study-links">
        {project.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            {...(external(link.href)
              ? { target: "_blank", rel: "noreferrer" }
              : {})}
          >
            {link.label}
          </a>
        ))}
      </p>
    </div>
  );
}

export function Work() {
  const [filter, setFilter] = useState<Filter>("All");
  const [openId, setOpenId] = useState<string | null>(null);
  const baseId = useId();

  const visible = projects.filter(
    (project) => filter === "All" || project.capabilities.includes(filter),
  );

  useEffect(() => {
    const id = window.location.hash.replace("#", "");
    if (projects.some((project) => project.id === id)) {
      setOpenId(id);
      setFilter("All");
    }
  }, []);

  function toggle(project: Project) {
    const next = openId === project.id ? null : project.id;
    setOpenId(next);
    const url = new URL(window.location.href);
    url.hash = next ? project.id : "work";
    window.history.replaceState(null, "", url);
  }

  return (
    <section className="section" id="work" aria-labelledby="work-heading">
      <div className="section-head">
        <p className="eyebrow">01 — Work</p>
        <h2 id="work-heading">Selected work</h2>
        <p className="section-intro">
          Applications, data pipelines, and tools I have shipped or built in
          depth. Open a project for the technical detail.
        </p>
      </div>
      <div className="filters" role="toolbar" aria-label="Filter projects">
        {filters.map((item) => {
          const selected = filter === item;
          return (
            <button
              key={item}
              type="button"
              aria-pressed={selected}
              onClick={() => {
                setFilter(item);
                if (
                  item !== "All" &&
                  openId &&
                  !projects
                    .find((project) => project.id === openId)
                    ?.capabilities.includes(item)
                ) {
                  setOpenId(null);
                }
              }}
            >
              {item}
            </button>
          );
        })}
      </div>
      <p className="filter-status" aria-live="polite">
        {filter === "All" ? "All work" : filter}
      </p>
      <div className="project-list">
        {visible.map((project, index) => {
          const open = openId === project.id;
          const panelId = `${baseId}-${project.id}`;
          return (
            <article
              key={project.id}
              id={project.id}
              className={open ? "project is-open" : "project"}
            >
              <div className="project-top">
                <p className="index">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div className="project-main">
                  <div className="project-title">
                    <h3>{project.name}</h3>
                    <p className="status">
                      {project.live ? (
                        <span className="live-mark" aria-hidden="true" />
                      ) : null}
                      {project.status}
                    </p>
                  </div>
                  <p className="sentence">{project.sentence}</p>
                  <p className="problem">{project.problem}</p>
                  <ul className="cap-list" aria-label="Capabilities">
                    {project.capabilities.map((cap) => (
                      <li key={cap}>{cap}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="project-actions">
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => toggle(project)}
                >
                  {open ? "Close" : "Project details"}
                </button>
                {project.links.slice(0, 2).map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    {...(external(link.href)
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              {open ? (
                <div id={panelId}>
                  <CaseStudy project={project} />
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
      {filter === "All" ? (
        <div className="scripts">
          <h3>Earlier scripts</h3>
          <p>
            Restaurant scripts I wrote before TableEdge.
          </p>
          <ul>
            {scripts.map((script) => (
              <li key={script.id}>
                <a href={script.href} target="_blank" rel="noreferrer">
                  {script.name}
                </a>
                <span>{script.sentence}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}
