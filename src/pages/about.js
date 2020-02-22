import React from 'react'
import { Link } from 'gatsby'

const AboutPage = () => {
    return (
        <div>
            <h1>About</h1>
            <h2>We are bulky media and we are a modern web design beaureu based out of Uppsala, Sweden.</h2>
            <p>Does your business need a website? <Link to="/contact">Contact us.</Link></p>
        </div>
    )
}

export default AboutPage;