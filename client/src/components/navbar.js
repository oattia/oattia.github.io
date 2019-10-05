import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <div className="navbar-brand">
                    <img src={require("../images/uw-brand.png")}/> |  Scientific Computing
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" href="https://www.linkedin.com/in/chufeng-hu-545022114/">LinkedIn</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://github.com/ChesterHu" >GitHub</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://www.facebook.com/profile.php?id=100009987228975">Facebook</a>
                </li>
                <li className="nav-item">
                    <Link to="/gallery">
                        <div className="nav-link">Gallery</div>
                    </Link>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    );
}