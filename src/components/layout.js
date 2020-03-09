import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import './layout.scss'

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
        <div>
            <Header />
                {children}
            <Footer />
        </div>
        )}
    />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout