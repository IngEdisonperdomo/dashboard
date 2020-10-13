import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'


const Header = () => (
  <Fragment>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      <Link to="/inicio" className="nav-link">Home <span className="sr-only">(current)</span></Link>
      </li>
      </ul>
    </div>
    <button className="btn btn-success" data-toggle="modal" data-target="#login">Login</button>
  
    </nav>
</Fragment>

)
export default Header
