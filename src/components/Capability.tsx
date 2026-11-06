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
        <h2 id="capability-heading">What I use</h2>
        <p className="section-intro">
          Languages and platforms from my job at Asurion and from the projects
          above.
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
