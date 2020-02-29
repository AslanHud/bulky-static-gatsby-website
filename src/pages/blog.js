import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import blogStyles from './blog.module.scss'

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
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    const postsList = postsData.allMarkdownRemark.edges.map((post, i) =>
        <li className={blogStyles.blogPost}>
            
            <h2>
                <Link to={`/blog/${post.node.fields.slug}`}>
                    {post.node.frontmatter.title}
                </Link>
            </h2>

            <p>{post.node.frontmatter.date}</p>

        </li>
    )

    return (
        <Layout>
            <ol className={blogStyles.blogPostList}>
                {postsList}
            </ol>
        </Layout>
    )
}

export default BlogPage;