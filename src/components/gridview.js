import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import gridViewStyles from './gridview.module.scss'

const GridView = (props) => {

    const gridData = useStaticQuery(graphql`
        query {
            allFile {
                edges {
                    node {
                        relativeDirectory
                        childImageSharp {
                            fixed (width: 200, height: 200, quality: 100) {
                                ...GatsbyImageSharpFixed_tracedSVG
                            }
                        }
                    }
                }
            }
        }`)


    const gridList = gridData.allFile.edges.map((gridItem, i) => {
        if(gridItem.node.relativeDirectory === props.imagesSrc)
        {
           return <Img fixed={ gridItem.node.childImageSharp.fixed } />
        }
    })
    

    return(

        <div className={gridViewStyles.gridContainer}>

            { gridList }

        </div>

    )
}

export default GridView;