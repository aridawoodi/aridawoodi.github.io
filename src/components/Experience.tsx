import { useState } from "react";
import { education } from "../content/profile";
import { roles } from "../content/experience";

export function Experience() {
  const [openMore, setOpenMore] = useState(false);
  const [showEarlier, setShowEarlier] = useState(false);
  const current = roles[0];
  const earlier = roles.slice(1);
  if (!current) return null;

  return (
    <section
      className="section"
      id="experience"
      aria-labelledby="experience-heading"
    >
      <div className="section-head">
        <p className="eyebrow">03 — Experience</p>
        <h2 id="experience-heading">
          From operations work to the systems that run it
        </h2>
        <p className="section-intro">
          I have been a software engineer at Asurion since 2021. Before that I
          taught analytics, trained in data, and worked in restaurant and office
          operations.
        </p>
      </div>
      <article className="role role-current">
        <header>
          <p className="when">{current.when}</p>
          <h3>{current.title}</h3>
          <p className="org">
            {current.org}
            {current.place ? ` · ${current.place}` : ""}
          </p>
        </header>
        <p>{current.summary}</p>
        <ul>
          {current.points?.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        {current.more && openMore ? (
          <ul>
            {current.more.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        ) : null}
        {current.more ? (
          <button type="button" onClick={() => setOpenMore((value) => !value)}>
            {openMore ? "Show fewer Asurion details" : "More Asurion work"}
          </button>
        ) : null}
      </article>
      <div className="earlier">
        <button
          type="button"
          aria-expanded={showEarlier}
          onClick={() => setShowEarlier((value) => !value)}
        >
          {showEarlier ? "Hide earlier roles" : "Earlier roles, 2007–2023"}
        </button>
        {showEarlier ? (
          <ol className="timeline">
            {earlier.map((role) => (
              <li key={role.id}>
                <p className="when">{role.when}</p>
                <h3>{role.title}</h3>
                <p className="org">
                  {role.org}
                  {role.place ? ` · ${role.place}` : ""}
                </p>
                <p>{role.summary}</p>
              </li>
            ))}
          </ol>
        ) : null}
      </div>
      <div className="education" id="education">
        <h3>Education and certificates</h3>
        <ul>
          {education.map((item) => (
            <li key={item.title}>
              <strong>{item.title}</strong>
              <span>{item.detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
