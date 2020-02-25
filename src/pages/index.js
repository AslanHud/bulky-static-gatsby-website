import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'

import indexStyles from './index.module.scss'

  const IndexPage = () => {

    const data = useStaticQuery(graphql`
    query
    {
      file(relativePath: {eq: "images/website-creation-bg.png"})
      {
        childImageSharp
        {
          fixed (width: 350, height: 350)
          {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }    
    `)

  return (
    <Layout>
      <div className={indexStyles.container}>
        <div className={indexStyles.heroBanner}>
          <div className={indexStyles.bannerText}>
            <h1>
              En modern webbyrå i Uppsala
            </h1>
            <p>
              Behöver ditt bolag en ny hemsida eller behöver eran nuvarande hemsida kanske fräschas upp? 
              Då kan vi på bulky media hjälpa dig! 
            </p>
            <button>Kontakta oss</button>
          </div>
          <Img fixed={ data.file.childImageSharp.fixed} />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage;