import { skillGroups } from "../content/skills";

export function Capability() {
  return (
    <section
      className="section"
      id="capability"
      aria-labelledby="capability-heading"
    >
      <div className="section-head">
        <p className="eyebrow">02 — Capability</p>
        <h2 id="capability-heading">Tools, next to the work that uses them</h2>
        <p className="section-intro">
          The list is limited to what shows up in the resume or in a repository
          I can account for. Working knowledge is labeled as working knowledge.
        </p>
      </div>
      <div className="skill-list">
        {skillGroups.map((group) => (
          <article key={group.id} className="skill">
            <h3>{group.title}</h3>
            <p className="skill-items">{group.items}</p>
            <p>{group.context}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
