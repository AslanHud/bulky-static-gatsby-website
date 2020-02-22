import React from 'react'
import Layout from '../components/layout'
import { graphql, useStaticQuery } from 'gatsby'

const BlogPage = () => {
    const postsData = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title,
                            date
                        }
                    }
                }
            }
        }
    `)

    const postsList = postsData.allMarkdownRemark.edges.map((post, i) =>
        <li>
            <h2>{post.node.frontmatter.title}</h2>
            <p>{post.node.frontmatter.date}</p>
        </li>
    );

    return (
        <Layout>
            <ol>
                {postsList}
            </ol>
        </Layout>
    )
}

export default BlogPage;