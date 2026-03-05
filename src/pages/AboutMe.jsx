import SectionTitle from "../components/SectionTitle.jsx"
import Card from "../components/Card.jsx"
import Button from "../components/Button.jsx"
import { Mail, Linkedin, Twitter } from "lucide-react"

export default function AboutMe() {
  return (
    <div className="page">
      <SectionTitle
        overline="ABOUT ME"
        title="Pratyush Shukla"
        subtitle="Student developer focused on applied ML, especially in biomedical and clinical settings."
      />

      <div className="grid2">
        <Card title="Professional Photo" >
          <div className="mediaFrame">
            <img src="me.jpg" alt="Profile placeholder" className="media" />
          </div>
        
        </Card>

        <Card title="Bio">
          <p>
            I’m a student with a strong interest in computer science and machine learning, especially
            where software meets real research impact. For ISM, my focus is <b>biomedical computation</b>—
            building and analyzing tools that help researchers and clinicians work with complex data more
            effectively.
          </p>
          <p className="muted">
            My goal this year is to strengthen my technical depth, produce high-quality original work, and
            learn professional research habits through consistent documentation and mentorship.
          </p>
        </Card>
      </div>

      <Card title="Mission Statement">
        <p>
          My mission is to build trustworthy AI-driven systems that make research workflows faster, more
          transparent, and ultimately more useful for real people.
        </p>
      </Card>

      <Card title="Contact">
        <div className="btnRow">
          <Button href="mailto:pratyushs2009@gmail.com" icon={<Mail size={18} />}>
            pratyushs2009@gmail.com
          </Button>
        </div>
      </Card>
    </div>
  )
}
