import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/" className="navbar-logo">
          🎃 Hacktoberfest 2026
        </NavLink>
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar