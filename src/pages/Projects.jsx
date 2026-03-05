import SectionTitle from "../components/SectionTitle.jsx"
import Card from "../components/Card.jsx"
import Button from "../components/Button.jsx"
import { Hammer, FileText, CheckCircle2 } from "lucide-react"
import { projectLinks } from "../data/links.js"

function LinkRow({ label, href }) {
  const disabled = !href
  return (
    <div className={`row ${disabled ? "disabled" : ""}`}>
      <div className="rowLeft">
        <div className="rowTitle">{label}</div>
        <div className="rowHint">
          {disabled ? "Add a link or upload a file" : "Opens in a new tab"}
        </div>
      </div>
      <div className="rowRight">
        <Button href={href || undefined} variant={disabled ? "ghost" : "primary"} icon={<FileText size={18} />}>
          {disabled ? "Not added yet" : "Open"}
        </Button>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <div className="page">
      <SectionTitle
        overline="PROJECTS"
        title="Original Work"
      />

      <div className="grid2">
        <Card title="Original Work" subtitle="Proposal → Work → Summary → Assessment" right={<Hammer size={18} />}>
          <div className="rows">
            <LinkRow label={projectLinks.originalWork.proposal.label} href={projectLinks.originalWork.proposal.href} />
            <LinkRow label={projectLinks.originalWork.originalWork.label} href={projectLinks.originalWork.originalWork.href} />
            <LinkRow label={projectLinks.originalWork.setupSummary.label} href={projectLinks.originalWork.setupSummary.href} />
            <LinkRow label={projectLinks.originalWork.assessment.label} href={projectLinks.originalWork.assessment.href} />
          </div>
        </Card>
      </div>
    </div>
  )
}
