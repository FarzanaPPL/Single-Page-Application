import './index.css'

const Projects = () => (
  <div id="projects" className="projectsContainer">
    <p className="projects">Projects</p>
    <hr className="hrLine" />
    <div className="projectDetailsContainer">
      <h1 className="projectName">Food Munch</h1>
      <p className="projectDescription">
        Developed a responsive website for Food Store where users can see a list
        of food items, detailed information about a food item, offers
      </p>
      <ul>
        <li className="features">
          Designed page using following HTML structure elements like li, header,
          article, footer elements and different bootstrap components to show
          different sections in the website and different bootstrap classes for
          responsiveness through mobile-first approach.
        </li>
        <li className="features">
          Implemented product youtube videos by using bootstrap embed and model
          components
        </li>
      </ul>
      <div className="technologiesContainer">
        <p className="technologies">
          <span className="technologiesHeading">Technologies used: </span>HTML,
          CSS, Bootstrap{' '}
        </p>
        <p className="link">
          (
          <a className="projectLink" href="https://farzanafoodm.ccbp.tech/">
            https://farzanafoodm.ccbp.tech/
          </a>
          )
        </p>
      </div>
    </div>
    <div className="projectDetailsContainer">
      <h1 className="projectName">Todos Application</h1>
      <p className="projectDescription">
        Developed persistent todo application with CRUD operations to track list
        of tasks
      </p>
      <ul>
        <li className="features">
          Displayed list of todos with HTML list elements, styled todo list
          using CSS, Bootstrap.
        </li>
        <li className="features">
          Implemented todo crud operations by using JavaScript event listeners
          and updated UI dynamically by using JavaScript DOM operations.
        </li>
        <li className="features">
          Used Arrays, Objects and their methods during todolist CRUD
          Operations, Persisted todo list state on page reloads using local
          storage methods.
        </li>
      </ul>
      <div className="technologiesContainer">
        <p className="technologies">
          <span className="technologiesHeading">Technologies used: </span>HTML,
          CSS, JS, Bootstrap
        </p>
        <p className="link">
          (
          <a className="projectLink" href="https://farzanatodo.ccbp.tech/">
            https://farzanatodo.ccbp.tech/
          </a>
          )
        </p>
      </div>
    </div>
    <div className="projectDetailsContainer">
      <h1 className="projectName">Book Hub (Goodreads Clone)</h1>
      <p className="projectDescription">
        Implemented responsive Goodreads Clone where users can log in and see a
        list of books, bookshelves like all shelves, completed reading shelf,
        currently reading shelf, want to read shelf , and user can also search
        books with authors name and books name.
      </p>
      <ul>
        <li className="features">
          Implemented different routes for features like login, home,
          bookshelves by using React Router components Route, Switch, Link.
        </li>
        <li className="features">
          Used Figma mockups to implement UI-rich and pixel-perfect React
          components.
        </li>
        <li className="features">
          Used fetch to call REST APIs for a list of books, bookshelves details
          and books search APIs.
        </li>
        <li className="features">
          Implemented username and password authentication and persisted login
          state using client storage.
        </li>
      </ul>
      <div className="technologiesContainer">
        <p className="technologies">
          <span className="technologiesHeading">Technologies used: </span>HTML,
          CSS, JavaScript, React JS, CSS Flexbox, client storage. Routing, JWT
          Token, Authorization, Authentication, Figma, VS Code, Git.{' '}
        </p>
        <p className="link">
          (
          <a className="projectLink" href="https://farzanabookhub.ccbp.tech/">
            https://farzanabookhub.ccbp.tech/
          </a>
          )
        </p>
      </div>
    </div>
  </div>
)

export default Projects
