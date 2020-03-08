import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const projectTabs = (projects) => {
    return projects.forEach(p => {
        return (
            <li>
                <a>
                    <span className="icon is-small"><i class="fas fa-image" aria-hidden="true"></i></span>
                    <span>{p.name}</span>
                </a>
            </li>
        )
    })
}

const ProjectsPage = () => (
    <StaticQuery
        query={graphql`
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
        `}
        render={data => (
            <Layout>
                <SEO title="Home" keywords={['gatsby', 'application', 'react', 'projects']} />
                <div className='container is-centered'>
                    <div className='tabs'>
                        <ul>
                            {projectTabs(data.dataJson.projects)}
                        </ul>
                    </div>
                </div>
            </Layout>
        )}
    />

)

export default ProjectsPage