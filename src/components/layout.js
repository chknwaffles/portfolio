import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import './layout.scss'
import ThemeContext from './theme-context'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeContext.Consumer>
        {theme => (
          <section className={`hero is-large ${theme.darkMode ? 'has-background-primary has-text-dark' : 'has-background-dark has-text-dark'}`}>
            <Header />
              <div className="hero-body is-mobile">
                {children}
              </div>
            <Footer />
          </section>
        )}
      </ThemeContext.Consumer>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
