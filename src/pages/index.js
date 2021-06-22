import { Link } from "gatsby";
import React from "react";
import Layout from '../components/Layout';
import '../styles/global.css'

export default function Home() {
  return (
    <div>
      <Layout>
        <section className='header'>
          <div>
              <h2>Design</h2>
              <h3>Develop & Deploy</h3>
              <p>Web Developer</p>
              <Link className='btn' to='/projects'>My Portifolio Projects</Link>
          </div>
          <img src='/images/banner.png' style={{ maxWidth: '100%' }}></img>
        </section>
      </Layout>
    </div>
  )
}

