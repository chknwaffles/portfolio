import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = () => (
    <Layout>
        <SEO title="About" />
        <div className='container has-text-centered'>
            <div className='section'>
                <h3 className='title is-3'>
                    Hey I'm Won Kim. 
                </h3>
                <h5 className='subtitle is-5'>
                    I'm a full stack web developer and a US Navy Veteran.
                </h5>
            </div>
            <p style={{ padding: '15px' }}>

                I first fell in love with coding when I started playing a game called The Specialists back in 2004.
                <br />
                There were really cool third party mods made with AMX Mod X in it. 

                <br />
                I spent many months learning SMALL (the language used for AMX Mod X) and built a carmod which allowed players to drive around in cars. 
                
                <br />
                While that fun did not last into my military career, I have since then transitioned and honed my skills in web development.
                <br />
            </p>
        </div>
    </Layout>
)

export default AboutPage