import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
  <Layout>
      <h1>Index page</h1>
      <h2>This is the main page of the website.</h2>
      <Link to="/about">Would you like to know more about bulky media?</Link>
    </Layout>
  )
}

export default IndexPage;