import { NavLink } from "react-router-dom"

const tabs = [
  { to: "/", label: "Home" },
  { to: "/about-me", label: "About Me" },
  { to: "/about-ism", label: "About ISM" },
  { to: "/resume", label: "Résumé" },
  { to: "/mentor-bio", label: "Mentor Bio" },
  { to: "/research", label: "Research" },
  { to: "/blog", label: "Blog" },
  { to: "/projects", label: "Projects" },
]

export default function TabsNav() {
  return (
    <nav className="tabs">
      <div className="tabsInner">
        <div className="brand">
          <div className="brandMark" aria-hidden="true" />
          <div className="brandText">
            <div className="brandName">Pratyush Shukla</div>
            <div className="brandTag">ISM Digital Portfolio</div>
          </div>
        </div>

        <div className="tabRow" role="tablist" aria-label="Portfolio Sections">
          {tabs.map((t) => (
            <NavLink
              key={t.to}
              to={t.to}
              end={t.to === "/"}
              className={({ isActive }) => `tab ${isActive ? "active" : ""}`}
              role="tab"
            >
              {t.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}
