import { HashRouter, Routes, Route } from "react-router-dom"
import TabsNav from "./components/TabsNav.jsx"

import Home from "./pages/Home.jsx"
import AboutMe from "./pages/AboutMe.jsx"
import AboutISM from "./pages/AboutISM.jsx"
import Resume from "./pages/Resume.jsx"
import MentorBio from "./pages/MentorBio.jsx"
import Research from "./pages/Research.jsx"
import Blog from "./pages/Blog.jsx"
import Projects from "./pages/Projects.jsx"

export default function App() {
  return (
    <HashRouter>
      <div className="bg" aria-hidden="true">
        <div className="orb o1" />
        <div className="orb o2" />
        <div className="orb o3" />
        <div className="gridlines" />
      </div>

      <TabsNav />

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/about-ism" element={<AboutISM />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/mentor-bio" element={<MentorBio />} />
          <Route path="/research" element={<Research />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>

        <footer className="footer">
          <div className="footerInner">
            <span>© {new Date().getFullYear()} Pratyush Shukla</span>
            <span className="dot">•</span>
            <span className="muted">Built with React + Vite</span>
          </div>
        </footer>
      </main>
    </HashRouter>
  )
}
