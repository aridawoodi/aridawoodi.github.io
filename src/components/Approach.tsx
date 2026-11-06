import { approach } from "../content/profile";

export function Approach() {
  return (
    <section className="section" id="approach" aria-labelledby="approach-heading">
      <div className="section-head">
        <p className="eyebrow">04 — Approach</p>
        <h2 id="approach-heading">How I decide what to build</h2>
        <p className="section-intro">
          I start from the operational problem, pick the system that fits, and
          leave a path I can test and deploy again.
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
