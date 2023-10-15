import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function Navbar(props) {
  return (
    <nav class={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div class="container">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <Link class="navbar-brand" to="/">{props.title}</Link>

        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/about">{props.abouttext}</Link>
            </li>
          </ul>
          <form class="d-flex my-3" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-secondary" type="submit">Search</button>
          </form>
        </div>
        <div class={`form-check my-3 form-switch text-${props.mode=='light'?'dark':'light'}`}>
            <input class="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label class="form-check-label" for="flexSwitchCheckDefault">Dark Mode</label>
          </div>
      </div>
    </nav>
  )
}

Navbar.propTypes ={
  title: propTypes.string.isRequired,
  abouttext: propTypes.string.isRequired
}

Navbar.defaultProps = {
  title: 'Set title here',
  abouttext: 'About'
}