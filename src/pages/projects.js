import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GoLogoGithub } from 'react-icons/go'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ProjectsPage = () => {
    const data = useStaticQuery(graphql`
        query ProjectsQuery {
            dataJson {
                projects {
                    name
                    description
                    stack
                    github
                }
            }
        }
    `)

    const handleHover = (e) => {
        if (e.type === 'mouseleave') {
            document.body.classList.remove(e.currentTarget.id)
        } else if (e.type === 'mouseenter') {
            document.body.classList.add(e.currentTarget.id)
        }
    }

    const renderProjects = () => {
        return data.dataJson.projects.map((p, i) => {
            return (
                <section key={i} className='hero has-text-centered' id={`project-sec-${i + 1}`} onMouseEnter={handleHover} onMouseLeave={handleHover}>
                    <div className='hero-body'>
                        <div className='container'>
                            <h3 className='title is-3'>{p.name}</h3>
                            <h6 className='title is-6'>{p.stack.join(', ')}</h6>
                            <div className='container'>
                                <p>
                                    {p.description}
                                </p>
                                <br />
                                <a href={p.github}>
                                    <span className='icon is-medium'>
                                        <GoLogoGithub color='#393232' size='2.5em' />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            )
        })
    }

    return (
        <Layout>
            <SEO title="Home" keywords={['gatsby', 'application', 'react', 'projects']} />
            <div className='section has-text-centered'>
                <h3 className='title is-3'>
                    My Projects
                </h3>
            </div>
            {renderProjects()}
        </Layout>
    )
}

export default ProjectsPage