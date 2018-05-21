import React from 'react';
import { Link } from 'react-router-dom';
import './heading-style.css';


const Header = ({match}) => {
    return (<header>
        
        <nav className="navbar navbar-dark bg-dark box-shadow">
          <div className="container d-flex justify-content-between">
            <a href="/" className="navbar-brand d-flex">
               <strong>Baila</strong>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
             data-target="#navBarMenu" aria-controls="navBarMenu" aria-expanded="false" aria-label="Navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse align-item-right" id="navBarMenu">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/"> Home </Link>
                </li>
                
                <li className="nav-item">
                    <Link className="nav-link" to="/matches"> Matches </Link>
               </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/messages"> Messages </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/profile"> Profile </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/settings"> Settings </Link>
                </li>
                </ul> 
            </div>
          </div>
        </nav>
      </header>)
}

export default Header; 