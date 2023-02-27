import {MdSchool} from 'react-icons/md'
import {GrTechnology, GrProjects} from 'react-icons/gr'
import {BsBriefcaseFill} from 'react-icons/bs'
import Header from '../Header'
import Education from '../Education'
import TechnicalSkills from '../TechnicalSkills'
import Projects from '../Projects'
import ProfessionalExperience from '../ProfessionalExperience'
import './index.css'

const Resume = () => (
  <div className="resumeContainer">
    <div className="resumeContentContainer">
      <div className="sideNav">
        <div className="desktopNav">
          <a href="#education" className="a">
            <MdSchool size={23} className="contentsLogo" />
            Education
          </a>
          <a href="#technicalSkills" className="a">
            <GrTechnology size={25} className="contentsLogo" />
            Technical Skills
          </a>
          <a href="#projects" className="a">
            <GrProjects size={15} className="contentsLogo" />
            Projects
          </a>
          <a href="#professionalExperience" className="a">
            <BsBriefcaseFill size={18} className="contentsLogo" />
            Professional Experience
          </a>
        </div>
        <div className="mobileNav">
          <a href="#education" className="a">
            <MdSchool size={23} className="contentsLogo" />
          </a>
          <a href="#technicalSkills" className="a">
            <GrTechnology size={25} className="contentsLogo" />
          </a>
          <a href="#projects" className="a">
            <GrProjects size={15} className="contentsLogo" />
          </a>
          <a href="#professionalExperience" className="a">
            <BsBriefcaseFill size={18} className="contentsLogo" />
          </a>
        </div>
      </div>
      <Header />
      <Education />
      <TechnicalSkills />
      <Projects />
      <ProfessionalExperience />
    </div>
  </div>
)

export default Resume
