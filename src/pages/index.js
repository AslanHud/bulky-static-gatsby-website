import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'

import indexStyles from './index.module.scss'
import bannerImg from './website-creation-bg.png'

  const IndexPage = () => {

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
          </div>
          <img src={bannerImg} alt=" " />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage;