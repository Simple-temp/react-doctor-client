import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light pt-4">
            <div class="container">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">About</a>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/dashboard/appoinment">Dashboard</Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="/">Admin</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="/">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="/">Contact us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;