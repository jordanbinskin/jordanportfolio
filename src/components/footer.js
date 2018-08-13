import React from 'react'
import Link from 'gatsby-link'
import Contact from '../components/contact'

const Footer = ({ siteTitle }) => (
  <div
    style={{
      background: '#0E0B16',
      display: 'flex',
      alignItems: 'center',
      opacity: 0.9,
      position: 'fixed',
      width: '100%',
      height: 80,
      zIndex: 1,
      bottom:0,
    }}
  >
    <div
      /* style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }} */
    >
    <Contact/>
    </div>
  </div>
)

export default Footer
