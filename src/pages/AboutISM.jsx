import SectionTitle from "../components/SectionTitle.jsx"
import Card from "../components/Card.jsx"

export default function AboutISM() {
  return (
    <div className="page">
      <SectionTitle
        overline="ABOUT ISM"
        title="Independent Study and Mentorship Program"
        subtitle="A student-driven course built around professional mentorship, research habits, and real-world deliverables."
      />

      <Card title="Program Overview">
        <p>
          ISM (Independent Study and Mentorship) is a professional mentorship program that connects
          students with industry and academic mentors. Students explore a focused topic area, conduct
          research, document weekly learning through blogs, and produce original work artifacts that reflect
          real professional processes.
        </p>
        <p className="muted">
          This portfolio is organized to match the required deliverables: résumé, mentor bio, research
          assessments, weekly blogs, and project artifacts.
        </p>
      </Card>
    </div>
  )
}
