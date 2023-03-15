import { Link } from "react-router-dom";

function Projects() {
  return (
    <div>
      <h1>projects.</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <hr style={{ maxWidth: "400px", border: "1px dashed #999", margin: 0 }} />
      <ul>
        <li>
          <Link className="link" to="/colorgame">ColorGame</Link>
        </li>
      </ul>
    </div>
  );
}

export default Projects;
