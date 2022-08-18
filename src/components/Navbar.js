import React from 'react'
// import{Link} from "react-router-dom"

export default function Navbar(props) {
  return (
    <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <Link className="nav-link active"  to="/">Home</Link>
            </li> */}
            <li className="nav-item">
              <a className="nav-link active"  href="/">Home</a>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li> */}
          </ul>
          <div className="form-check form-switch">
            <input className="form-check-input" onClick={props.toggle} type="checkbox" id="flexSwitchCheckDefault"/>
            <label className={`form-check-label text-${props.mode==='dark'?'light':'dark'}`} htmlFor="flexSwitchCheckDefault">{props.mode==='dark'?'Enabled dark mode':'Enable dark mode'}</label>
          </div>
        </div>
      </div>
  </nav>
    </>
  )
}

// Navbar.propTypes={
//   title:PropTypes.string.isRequired,
// }

// //Default props

// Navbar.defaultProps ={
//   title:"Hello world"
// }