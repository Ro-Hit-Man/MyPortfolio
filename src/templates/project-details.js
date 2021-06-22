import React from "react"
import Layout from "../components/Layout"
import '../styles/global.css'
import { graphql } from 'gatsby'

const ProjectDetails = ({ data }) => {
  const { html } = data.markdownRemark;
  const { title, stack, featuredImg , relink } = data.markdownRemark.frontmatter;

  function redirect(l){
    window.location.href = l;
  }

  return (
    <Layout>
      <div className='details'>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className='featured' >
          <img src={featuredImg} style={{maxWidth:'100%'}}/>
        </div>
        <div className='html' dangerouslySetInnerHTML={{ __html: html }} />
        <button className='btn' onClick={()=>{redirect(relink)}}>VIEW ON GITHUB</button>
      </div>
    </Layout>
  )
}
 
export default ProjectDetails

export const query = graphql`
query ProjectDetails($slug: String) {
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    html
    frontmatter {
      stack
      title
      featuredImg
      relink
    }
  }
}
`