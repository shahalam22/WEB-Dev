import React from "react";
import {Link} from "react-router-dom";
import classes from './Layout31.module.css';

const Layout31 = (props) => {

    const path = window.location.pathname;
    
    return(
        <div className={classes.app}>
            <nav className={classes.nav}>
                <div className={classes.brand}>
                    <h3>Brand Name</h3>
                </div>
                <div className={classes.menu}>
                    <ul>
                        <li>
                            <Link to='/' className={path==='/' ? classes.navItemActive : classes.navItem}>Home</Link>
                        </li>
                        <li>
                            <Link to='/about' className={path==='/about' ? classes.navItemActive : classes.navItem}>About</Link>
                        </li>
                        <li>
                            <Link to='/help' className={path==='/help' ? classes.navItemActive : classes.navItem}>Help</Link>
                        </li>
                        <li>
                            <Link to='/clock' className={path==='/clock' ? classes.navItemActive : classes.navItem}>Clock</Link>
                        </li>
                        <li>
                            <Link to='/task' className={path==='/task' ? classes.navItemActive : classes.navItem}>Task</Link>
                        </li>
                    </ul>
                </div>
            </nav>


            <main className={classes.main}>
                {props.children}
            </main>


            <footer className={classes.footer}>
                <h3>Footer</h3>
                <ul>
                    <li>Footer Link one</li>
                    <li>Footer Link two</li>
                    <li>Footer Link three</li>
                </ul>
            </footer>
        </div>
    )
}

export default Layout31;