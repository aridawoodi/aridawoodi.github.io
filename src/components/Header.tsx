import { profile } from "../content/profile";

const links = [
  ["Work", "#work"],
  ["Capability", "#capability"],
  ["Experience", "#experience"],
  ["Approach", "#approach"],
  ["Contact", "#contact"],
] as const;

export function Header() {
  return (
    <header className="site-header">
      <a className="skip" href="#work">
        Skip to work
      </a>
      <a className="brand" href="#top">
        {profile.name}
      </a>
      <nav aria-label="Sections">
        <ul>
          {links.map(([label, href]) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <a className="header-resume" href={profile.resume}>
        Resume
      </a>
    </header>
  );
}
