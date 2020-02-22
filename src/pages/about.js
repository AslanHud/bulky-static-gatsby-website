import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout>
            <h1>About</h1>
            <h2>This is the about page.</h2>
            <p>Need a developer? <Link to="/contact">Contact us!</Link></p>
        </Layout>

    )
}

export default AboutPage;