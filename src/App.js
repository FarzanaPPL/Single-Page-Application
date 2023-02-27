import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './components/About/index'
import Contact from './components/Contact'
import ResumeTemplate from './components/ResumeTemplate'
import LogicalPart from './components/LogicalPart'

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
    <Route exact path="/" element={<About/>} />
    <Route exact path="/resumeTemplate" element={<ResumeTemplate/>} />
    <Route exact path="/logical" element={<LogicalPart/>} />
    <Route exact path="/contact" element={<Contact/>} />
    </Routes>
  </BrowserRouter>
)

export default App
