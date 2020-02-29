import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import headerStyles from './header.module.scss'

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata{
                    title
                }
            }
        }
    `)

    return (
        <header className={headerStyles.header}>
            <h1 >
                <Link className={headerStyles.title} to="/">
                    { data.site.siteMetadata.title }
                </Link>
            </h1>
            <nav className={headerStyles.navMenu}>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link to="/about">Arbete</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blogg</Link>
                    </li>
                    <li>
                        <Link to="/about">Om oss</Link>
                    </li>
                    <li>
                        <Link to="/contact">Kontakt</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header