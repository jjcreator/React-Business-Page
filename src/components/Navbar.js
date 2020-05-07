import React from 'react'
import { Link } from "react-router-dom"
import styles from "../modules/navbarStyle.module.css"

function Navbar() {
    return (
        <nav className={`${styles.myNavbar} ${styles.flexColumn}`}>
            <div className={styles.flexColumn} id={styles.logo}>
                <div className={styles.flexColumn} id={styles.imageContainer}>
                    <img id={styles.logoImg} alt="logo" src="./scale.png"/>
                </div>
                <p>United Law Counselors</p>
            </div>
            <div id={styles.wave}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#011936" fillOpacity="1" d="M0,192L80,165.3C160,139,320,85,480,85.3C640,85,800,139,960,138.7C1120,139,1280,85,1360,58.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            </div>
            <div className={styles.flexColumn} id={styles.links} >
                <Link className={styles.link} to="/">Home</Link>    
                <Link className={styles.link} to="/about">About</Link>
                <Link className={styles.link} to="/contact">Contact</Link>
            </div>
        </nav>  
    )
}

export default Navbar