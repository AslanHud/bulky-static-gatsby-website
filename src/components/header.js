import React from 'react'
import { Link } from 'gatsby'
import headerStyles from './header.module.scss'

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <h1 >
                <Link className={headerStyles.title} to="/">
                    bulky media.
                </Link>
            </h1>
            <nav className={headerStyles.navMenu}>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="/about">ABOUT</Link>
                    </li>
                    <li>
                        <Link to="/blog">BLOG</Link>
                    </li>
                    <li>
                        <Link to="/contact">CONTACT US</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header