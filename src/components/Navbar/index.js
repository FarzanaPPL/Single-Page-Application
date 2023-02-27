import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav">
    <img
      src="https://149664534.v2.pressablecdn.com/wp-content/uploads/2022/01/logo-white-on-black.png"
      alt="logo"
      className="navLogo"
    />
    <ul className="navItemContainer">
      <li>
        <Link className="navItem" to="/">
          About
        </Link>
      </li>
      <div className="dropdown">
        <button type="button" className="dropbtn">
          SPA
        </button>
        <div className="dropdown-content">
          <Link to="/resumeTemplate" className="dropdownLink">
            <p className="dropList">Resume Template</p>
          </Link>
          <Link to="/logical" className="dropdownLink">
            <p className="dropList">Logical Part</p>
          </Link>
        </div>
      </div>
      <li>
        <Link className="navItem" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
    <h1 className="heading">Farzana</h1>
  </nav>
)

export default Header
