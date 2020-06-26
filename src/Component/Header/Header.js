import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
               
      <header className="main_menu home_menu">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="Home"> <img src="img/logo.png" alt="logo" /> </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse main-menu-item justify-content-center" id="navbarSupportedContent">
                  <ul className="navbar-nav align-items-center">
                    <li className="nav-item active">
                      <a className="nav-link" href="Home">Home</a>
                    </li> <li className="nav-item">
                      <a className="nav-link" href="Test">Test</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="About">About</a>
                    </li>
                   
                  
                  
                    <li className="nav-item">
                      <a className="nav-link" href="Contact">Contact</a>
                    </li>    
                  </ul>
                </div>
              
              </nav>
            </div>
          </div>
        </div>
      </header>

            </div>
        )
    }
}
