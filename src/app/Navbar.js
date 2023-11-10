import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="" className="nav">
        ABOUT
      </Link>
      <Link to="/projects" className="nav">
        PROJECTS
      </Link>
      <Link to="/cv" className="nav">
        CV
      </Link>
    </div>
  )
}
