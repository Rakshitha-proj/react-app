import React, { Component } from "react";
import { Link } from "react-router-dom";
class Header extends Component {
  render() {
    return (
        <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                    <a className="navbar-brand" href=" ">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
                        </li>
                        <li className="nav-item">
                        < Link className="nav-link active" to="/Features">Features</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active" to="/Pricing ">Pricing</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active" to="/Blog ">Blog</Link>
                        </li>
                    </ul>
                    
                    </div>
                </div>
                <div className="d-flex  justify-content-end">
                
                    <Link className="btn btn-primary m-3" to="/Register" role="button">Register</Link>
                    <Link className="btn btn-primary m-3" to="/Login" role="button">Login</Link>
                    </div>
                    
                </nav>
                

        </div>

    );
  }
}

export default Header ;