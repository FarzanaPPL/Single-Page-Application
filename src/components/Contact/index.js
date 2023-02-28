import {AiFillPhone} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import './index.css'

const Contact = () => (
  <div className="contactContainer">
    <h1 className="contactHeading">Contact Us</h1>
    <div className="contactOptionsContainer">
      <div className="optionContainer">
        <AiFillPhone className="contactIcon" />
        <h1 className="contactOptionHeading">BY PHONE</h1>
      </div>
      <div className="optionContainer">
        <MdEmail className="contactIcon" />
        <h1 className="contactOptionHeading">BY EMAIL</h1>
      </div>
      <div className="optionContainer">
        <BsFillChatDotsFill className="contactIcon" />
        <h1 className="contactOptionHeading">LIVE CHAT</h1>
      </div>
    </div>
  </div>
)

export default Contact
