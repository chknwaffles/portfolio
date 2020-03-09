import React from 'react'
import Typist from 'react-typist'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
    <Layout>
        <SEO title="Home" keywords={['gatsby', 'portfolio', 'react', 'resume']} />
        <section className={`hero is-large`}>
            <div className="hero-body is-mobile">
                <div className='container has-text-centered'>
                    <Typist cursor={{ show: false }}>
                        <div className='title'>
                            Hey! Welcome to my site.
                        </div>
                        <div className='subtitle'>
                            This was made with React + GatsbyJS and Bulma.
                        </div>
                    </Typist>
                </div>
            </div>
        </section>
    </Layout>
)

export default IndexPage