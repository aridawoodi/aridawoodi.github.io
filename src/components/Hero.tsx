import type { MouseEvent } from "react";
import { profile, record } from "../content/profile";

function follow(event: MouseEvent<HTMLAnchorElement>) {
  if (window.location.hash !== event.currentTarget.hash) return;
  event.preventDefault();
  window.dispatchEvent(new Event("hashchange"));
}

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
      <div className="record" aria-label="Current record">
        {record.map((row) => {
          const body = (
            <>
              <span className="record-label">{row.label}</span>
              <span className="record-line">
                <span>{row.detail}</span>
                <span className="record-meta">
                  {"live" in row && row.live ? (
                    <span className="live-mark" aria-hidden="true" />
                  ) : null}
                  {row.meta}
                </span>
              </span>
            </>
          );
          return "href" in row ? (
            <a key={row.label} href={row.href} onClick={follow}>
              {body}
            </a>
          ) : (
            <div key={row.label}>{body}</div>
          );
        })}
      </div>
    </section>
  );
}
