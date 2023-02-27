import './index.css'

const TechnicalSkills = () => (
  <div id="technicalSkills">
    <p className="technicalSkills">Technical Skills</p>
    <hr className="hrLine" />
    <table className="table">
      <tr>
        <td className="table-row tech">Front End</td>
        <td className="table-row">HTML, CSS, Bootstrap, JavaScript, ReactJS</td>
      </tr>
      <tr>
        <td className="table-row tech">Back-End</td>
        <td className="table-row">Python, Express, Nodejs</td>
      </tr>
      <tr>
        <td className="table-row tech">Databases</td>
        <td className="table-row">SQL</td>
      </tr>
    </table>
  </div>
)

export default TechnicalSkills
