import SectionTitle from "../components/SectionTitle.jsx"
import Card from "../components/Card.jsx"
import Button from "../components/Button.jsx"
import { FileText } from "lucide-react"
import { researchAssessments } from "../data/links.js"

export default function Research() {
  return (
    <div className="page">
      <SectionTitle
        overline="RESEARCH"
        title="Assessments"
      />

      <Card title="Research Assessments">
        <div className="btnGrid">
          {researchAssessments.map((x) => (
            <Button key={x.href} href={x.href} icon={<FileText size={18} />}>
              {x.label}
            </Button>
          ))}
        </div>
      </Card>
    </div>
  )
}
