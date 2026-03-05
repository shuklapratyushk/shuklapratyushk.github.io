import SectionTitle from "../components/SectionTitle.jsx"
import Card from "../components/Card.jsx"
import Badge from "../components/Badge.jsx"
import { blogs } from "../data/blogs.js"

export default function Blog() {
  return (
    <div className="page">
      <SectionTitle
        overline="BLOG"
        title="Weekly Blogs"
        subtitle="Newest at the top"
      />

      <div className="stack">
        {blogs.map((b) => (
          <Card
            key={b.week}
            title={b.title}
            subtitle={`${b.date} • Week ${b.week}`}
            right={<Badge>Week {b.week}</Badge>}
          >
            <p>{b.excerpt}</p>
          </Card>
        ))}
      </div>

      <Card title="Full Weekly Report PDF">
        <a className="link" href="weekly-report.pdf" target="_blank" rel="noreferrer">
          Open Weekly Report PDF
        </a>
      </Card>
    </div>
  )
}
