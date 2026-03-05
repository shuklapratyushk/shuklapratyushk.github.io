export default function SectionTitle({ overline, title, subtitle }) {
  return (
    <div className="sectionTitle">
      {overline ? <div className="overline">{overline}</div> : null}
      <h1 className="h1">{title}</h1>
      {subtitle ? <p className="muted">{subtitle}</p> : null}
    </div>
  )
}
