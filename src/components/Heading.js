import React, { Component } from 'react';
import './heading-style.css';



const Heading = () => {
    return (<header>
        
        <nav className="navbar navbar-dark bg-dark box-shadow">
          <div className="container d-flex justify-content-between">
            <a href="#" className="navbar-brand d-flex">
               <strong>Baila</strong>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
             data-target="#navBarMenu" aria-controls="navBarMenu" aria-expanded="false" aria-label="Navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse align-item-right" id="navBarMenu">
                <ul className="navbar-nav mr-auto">
                {/* <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
             
                <li className="nav-item">
                    <a className="nav-link" href="#">Matches</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Messages</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Profile</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Settings</a>
                </li> */}
                </ul>
              
            </div>
          </div>
        </nav>
      </header>)
}

export default Heading; 