import {Link} from 'react-router-dom';
function Navigation() {
    return (
        <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        
      </ul>
    )
}

export default Navigation
