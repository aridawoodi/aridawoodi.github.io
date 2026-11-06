import { profile, record } from "../content/profile";

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="intro-heading">
      <div className="hero-copy">
        <p className="eyebrow">
          {profile.role}
          <span aria-hidden="true"> · </span>
          {profile.location}
        </p>
        <h1 id="intro-heading">{profile.headline}</h1>
        <p className="lede">{profile.lede}</p>
        <p className="hero-links">
          <a href="#work">Selected work</a>
          <a href={profile.linkedin}>LinkedIn</a>
          <a href={profile.github}>GitHub</a>
        </p>
      </div>
      <dl className="record" aria-label="Current record">
        {record.map((row) => (
          <div key={row.label}>
            <dt>{row.label}</dt>
            <dd>
              <span>{row.detail}</span>
              <span className="record-meta">
                {"live" in row && row.live ? (
                  <span className="live-mark" aria-hidden="true" />
                ) : null}
                {row.meta}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
