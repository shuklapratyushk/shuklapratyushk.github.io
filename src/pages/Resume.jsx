import SectionTitle from "../components/SectionTitle.jsx"
import Card from "../components/Card.jsx"
import Button from "../components/Button.jsx"
import { Download, ExternalLink } from "lucide-react"

export default function Resume() {
  return (
    <div className="page">
      <SectionTitle
        overline="RESUME"
        title="Résumé (PDF)"
      />

      <Card title="Download">
        <div className="btnRow">
          <Button href="resume.pdf" icon={<Download size={18} />}>
            Download résumé (PDF)
          </Button>
          <Button href="resume.pdf" variant="ghost" icon={<ExternalLink size={18} />}>
            Open in new tab
          </Button>
        </div>
        <p className="muted small">
          Put your PDF at <code>public/resume.pdf</code>. (This repo ships with a placeholder file.)
        </p>
      </Card>

      <Card title="On-page preview" subtitle="If you prefer, embed the PDF inline.">
        <div className="pdfFrame">
          <iframe title="Resume PDF" src="resume.pdf" />
        </div>
        <p className="muted small">
          If the preview looks blank, your browser may block PDFs until you allow it.
        </p>
      </Card>
    </div>
  )
}
