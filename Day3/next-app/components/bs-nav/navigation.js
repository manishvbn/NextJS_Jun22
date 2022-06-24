import React from 'react';
import Link from 'next/link';

import styles from './navigation.module.css';

const Navigation = () => {
    return (
        <nav className={`${styles.nav} navbar navbar-expand-sm bg-primary navbar-dark fixed-top`}>
            <div className="container-fluid">
                <Link href="/">
                    <a className="navbar-brand d-flex flex-column align-items-center">
                        <img src="/next-js.svg" alt="NextJS" width="70" height="28" className="d-inline-block align-text-top" />
                        Next JS
                    </a>
                </Link>

                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#myNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item px-3">
                            <Link href="/">
                                <a className="nav-link d-flex flex-column align-items-center">
                                    <i className="bi bi-house-fill"></i>
                                    <span>Home</span>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item px-3">
                            <Link href="/about">
                                <a className="nav-link d-flex flex-column align-items-center">
                                    <i className="bi bi-file-person-fill"></i>
                                    <span>About</span>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item px-3">
                            <Link href="/employees">
                                <a className="nav-link d-flex flex-column align-items-center">
                                    <i className="bi bi-box"></i>
                                    <span>Employees</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;