import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

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

    const renderProjects = () => {
        return data.dataJson.projects.map(p => {
            return (
                <div className='card'>
                    <div className='card-content'>
                        <div className='media'>
                            <div className='media-content'>
                                <p className="title is-4">{p.name}</p>
                                <p className="subtitle is-6">{p.stack.join(', ')}</p>
                            </div>
                        </div>
                        <div class="content">
                            {p.description}
                        </div>
                    </div>

                    <footer class="card-footer">
                        <a href={p.github} class="card-footer-item">Github Source</a>
                    </footer>
                </div>
            )
        })
    }

    return (
        <Layout>
            <SEO title="Home" keywords={['gatsby', 'application', 'react', 'projects']} />
            <section className='section has-text-centered'>
                <div className='container is-centered'>
                    <div className='container'>
                        {renderProjects()}

                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default ProjectsPage