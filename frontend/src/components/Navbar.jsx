import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import searchicon from '../assets/magnifying-glass.png'
import cart from '../assets/shopping-bag.png'
import user from '../assets/person.png'
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-white py-3">
            <div className="container">
                <Link className="navbar-brand" href="#">InfaStore</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="nav nav-underline mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to={'/'}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to={'/collection'}>Collection</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to={'/about'}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to={'/contact'}>Contact</Link>
                        </li>
                    </ul>
                    <div className="d-flex" role="search">
                        <button className="border-0 bg-transparent" type="submit"><img src={searchicon} width={40} alt="" /></button>
                        <div className="dropdown">
                            <button className="border-0 bg-transparent dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={user} width={40} alt="" />
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav >
    );
}

export default Navbar;
