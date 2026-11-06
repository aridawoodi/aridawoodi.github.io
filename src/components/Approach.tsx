import { approach } from "../content/profile";

export function Approach() {
  return (
    <section className="section" id="approach" aria-labelledby="approach-heading">
      <div className="section-head">
        <p className="eyebrow">04 — Approach</p>
        <h2 id="approach-heading">How I decide what to build</h2>
        <p className="section-intro">
          The pattern across the job is practical: understand the operational
          problem, choose the system that fits the constraint, and leave a path
          that can be tested and deployed again.
        </p>
      </div>
      <ol className="approach-list">
        {approach.map((item, index) => (
          <li key={item.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
