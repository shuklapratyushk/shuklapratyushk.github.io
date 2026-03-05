export default function Button({ href, children, icon, variant = "primary" }) {
  const className = `btn ${variant}`
  if (href) {
    const external = href.startsWith("http")
    return (
      <a
        className={className}
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
      >
        {icon ? <span className="btnIcon">{icon}</span> : null}
        <span>{children}</span>
      </a>
    )
  }
  return (
    <button className={className} type="button">
      {icon ? <span className="btnIcon">{icon}</span> : null}
      <span>{children}</span>
    </button>
  )
}
