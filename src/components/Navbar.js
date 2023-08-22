import React from 'react';
import PropTypes from 'prop-types'
import './navbar.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.about}</Link>
            </li>
          </ul>
          {/* <div>
            <span className="dot1 bg-primary" onClick={()=>{props.toggleMode('info')}}></span>
            <span className="dot2 bg-danger" onClick={()=>{props.toggleMode('danger')}}></span>
            <span className="dot3 bg-success" onClick={()=>{props.toggleMode('success')}}></span>
            <span className="dot4 bg-warning" onClick={()=>{props.toggleMode('warning')}}></span>
          </div> */}
          <div className={`form-check form-switch mx-3 text-${props.mode === 'light'?'dark':'light'}`}>
            <input className="form-check-input dot5" onClick={()=>{props.toggleMode(null)}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.btnText}</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string
}
Navbar.defaultProps = {
  title: 'Set title here',
  about: 'About text here'
}