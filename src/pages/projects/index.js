import React from 'react'
import Layout from '../../components/Layout'
import '../../styles/global.css'
import {Link , graphql} from 'gatsby'

export default function Projects({data}) {

    const projects = data.allMarkdownRemark.nodes

    return (
        <Layout>
        <div className='portfolio'>
            <h2>Portifolio</h2>
            <h3>Projects & Websites creted by me</h3>
            <div className='projects'>
                {projects.map(project => (
                    <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
                    <div>
                        <img src={project.frontmatter.thumb} style={{width:'100%'}}></img>
                        <h3>{ project.frontmatter.title }</h3>
                        <p>{ project.frontmatter.stack }</p>
                    </div>
                    </Link>
                ))}
            </div>
        </div>
        </Layout>
    )
}

export const query = graphql`
  query ProjectsPage {
    allMarkdownRemark {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb
        }
        id
      }
    }
  }
`