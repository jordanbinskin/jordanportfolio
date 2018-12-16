import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#0E0B16',
      display: 'flex',
      alignItems: 'center',
      opacity: 0.9,
      width: '100%',
      height: 80,
      zIndex: 1,
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: '#E7DFDD',
            textDecoration: 'none',
          }}
        >
          <span style={{color:'#4717F6'}}>J</span>ORDAN <span style={{color:'#4717F6'}}>B</span>INSKIN
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
