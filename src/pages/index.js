import React from 'react'
import Typist from 'react-typist';

import Layout from '../components/layout'
import SEO from '../components/seo'
import Toggle from '../components/toggle-mode'
import ThemeContext from '../components/theme-context'

const IndexPage = () => (
    <ThemeContext.Consumer>
        {theme => (
            <Layout>
                <SEO title="Home" keywords={['gatsby', 'portfolio', 'react', 'resume']} />
                <div className={`has-text-centered`}>
                    <Typist>
                        <h1 className={`title ${theme.darkMode ? 'has-background-dark has-text-primary' : 'has-background-primary has-text-dark'}`}>
                            Hey! Welcome to my site.
                        </h1>
                        <h3 className='subtitle'>
                            This was made with React + GatsbyJS and Bulma.
                        </h3>
                    </Typist>
                    <Toggle />
                </div>
            </Layout>
        )}
    </ThemeContext.Consumer>
)

export default IndexPage