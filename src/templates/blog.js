import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import blogTemplateStyles from './blog.module.scss'

export const postQuery = graphql`
    query( $slug: String! ) {
        markdownRemark ( fields: { slug: { eq: $slug } } ) {
        frontmatter {
            title
            date
        }
        html
    }
}
`

const Blog = ( props ) => {
    return (
        <Layout>
            <h1 className={blogTemplateStyles.postTitle}>
                { props.data.markdownRemark.frontmatter.title}
            </h1>
            
            <p className={blogTemplateStyles.postDate}>
                {props.data.markdownRemark.frontmatter.date}
            </p>

            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}} className={blogTemplateStyles.postBody}>
            </div>
        </Layout>
    )
}

export default Blog