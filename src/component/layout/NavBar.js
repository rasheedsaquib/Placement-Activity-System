import React from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
const NavBar =()=> {

    return(

<nav className="navbar navbar-expand-lg navbar-light bg-light">
<div className='container'>
          <a className="navbar-brand">Admin</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/contact">Contact</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/about">About</NavLink>

              </li>
              
            </ul>
          </div>
          <Link className="btn btn-outline-dark w-25" to="/add/user">Add User</Link>
        </div>
      </nav>

    );
}
   

export default NavBar;