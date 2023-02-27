import {MdHome, MdEmail} from 'react-icons/md'
import {AiFillPhone, AiFillLinkedin} from 'react-icons/ai'
import './index.css'

const Header=()=>{
    return(
        <>
            <div className="headerContainer">
            <div>
                <img src="https://img.freepik.com/free-icon/woman_318-157570.jpg?w=2000" alt="profile" className="profile" />
            <div className="nameContainer">
            <h1 className="firstname">Farzana</h1>
            <h1 className="lastName">Shaik</h1>
            </div>
            </div>
            <div className="contactUsContainer">
            <div className="addressIconContainer">
            <p className="address">Hyderabad, Telangana, 500081</p>
            <MdHome className="addressIcon" />
            </div>
            <div className="addressIconContainer">
            <p className="address">91XXXXXXXXXX</p>
            <AiFillPhone className="addressIcon" />
            </div>
            <div className="addressIconContainer">
            <p className="address">farzanask2108@gmail.com</p>
            <MdEmail className="addressIcon" />
            </div>
            <div className="addressIconContainer">
            <a className="linkdinUrl" href="https://www.linkedin.com/in/farzana-shaik-388282135/">https://www.linkedin.com/in/farzana-shaik-388282135/</a>
            <br />
            <AiFillLinkedin className="addressIcon" />
            </div>
            </div>
        </div>
        </>
    )
}

export default Header