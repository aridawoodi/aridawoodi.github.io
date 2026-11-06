import { profile } from "../content/profile";

export function Contact() {
  return (
    <section className="section contact" id="contact" aria-labelledby="contact-heading">
      <div className="section-head">
        <p className="eyebrow">05 — Contact</p>
        <h2 id="contact-heading">If the work fits, write.</h2>
        <p className="section-intro">
          I am looking across software engineering, cloud and delivery, and
          data. The same record supports all three. English, Arabic, and Kurdish.
        </p>
      </div>
      <ul className="contact-list">
        <li>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </li>
        <li>
          <a href={profile.phoneHref}>{profile.phone}</a>
        </li>
        <li>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a href={profile.resume}>Resume PDF</a>
        </li>
      </ul>
      <p className="colophon">
        Ari Dawoodi · Nashville. Project notes on this site are limited to the
        resume and repositories I can account for.
      </p>
    </section>
  );
}
