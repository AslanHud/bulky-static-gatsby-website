import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

import indexStyles from './index.module.scss'

const IndexPage = () => {
  return (
    <Layout>
      <div className={indexStyles.container}>
        <div className={indexStyles.heroBanner}>
          <div className={indexStyles.bannerText}>
            <h2>
              En modern webbyrå i Uppsala
            </h2>
            <p>
              Behöver ditt bolag en ny hemsida eller behöver eran nuvarande hemsida kanske fräschas upp? 
              Då kan vi på bulky media hjälpa dig! 
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage;