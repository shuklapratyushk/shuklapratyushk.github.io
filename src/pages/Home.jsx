import SectionTitle from "../components/SectionTitle.jsx"
import Card from "../components/Card.jsx"
import Badge from "../components/Badge.jsx"

export default function Home() {
  return (
    <div className="page">
      <SectionTitle
        overline="HOME"
        title="Biomedical Computation + Machine Learning"
        subtitle="Exploring how modern AI can power real clinical and research impact."
      />

      <div className="grid2">
        <Card
          title="Quote"
          subtitle="A reminder to build anyway."
          right={<Badge>Innovation</Badge>}
        >
          <p className="quote">
            “When you innovate, you've got to be prepared for everyone telling you you're nuts.”
          </p>
          <p className="muted">— Larry Ellison</p>
        </Card>

        <Card title="Computational Approaches to Medicine">
          <div className="mediaFrame">
            <img
              src="topic-graphic.jpg"
              alt="Topic graphic placeholder"
              className="media"
            />
          </div>
        </Card>
      </div>

      <Card
        title="Quick Snapshot"
        subtitle="What this portfolio contains."
      >
        <div className="chips">
          {[
            "Professional bio + mission",
            "Résumé (PDF)",
            "Mentor bio + gratitude note",
            "Research assessments",
            "20 weekly blogs",
            "Projects + original work artifacts",
          ].map((x) => (
            <span key={x} className="chip">
              {x}
            </span>
          ))}
        </div>
      </Card>
    </div>
  )
}
