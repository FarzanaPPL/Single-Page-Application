import './index.css'

const Education = () => (
  <div id="education" className="educationContainer">
    <p className="education">Education</p>
    <hr className="hrLine" />
    <div className="educationDetailsContainer">
      <div>
        <h1 className="institute">IRC, CCBP Intensive 4.0 Tech Program </h1>
        <p className="branch">Full Stack Web Development</p>
      </div>
      <p className="year">Jan 2023</p>
    </div>
    <div className="educationDetailsContainer">
      <div>
        <h1 className="institute">
          Rajiv Gandhi University of Knowledge Technologies - Nirmal, Hyderabad
        </h1>
        <p className="branch">
          Graduation - Metallurgical and Materials Engineering, 8.61
        </p>
      </div>
      <p className="year">2018</p>
    </div>
    <div className="educationDetailsContainer">
      <div>
        <h1 className="institute">
          Rajiv Gandhi University of Knowledge Technologies - Nirmal, Hyderabad{' '}
        </h1>
        <p className="branch">Intermediate - M.Bi.P.C, 7.07</p>
      </div>
      <p className="year">2014</p>
    </div>
    <div className="educationDetailsContainer">
      <div>
        <h1 className="institute">
          Z P High School, Allaparru - Guntur, Andhra Pradesh
        </h1>
        <p className="branch">Secondary School of Certificate, 9.5</p>
      </div>
      <p className="year">2012</p>
    </div>
  </div>
)

export default Education
