/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

//When a new markdown node is created, create a slug (equal to the markdown filename) that can then be used to
//create unique URLs for each blog post. Then use that slug and make it into a field for each MarkdownRemark node.
module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions

    if(node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md')
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    //absolute path to blog post template
    const blogTemplate = path.resolve('./src/templates/blog.js')
    //graphql query for markdown edges with slugs
    const response = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    response.data.allMarkdownRemark.edges.forEach( edge => {
        createPage({
            path: `/blog/${edge.node.fields.slug}`,
            component: blogTemplate,
            context: 
            {
                slug: edge.node.fields.slug
            }
        })
    });
}