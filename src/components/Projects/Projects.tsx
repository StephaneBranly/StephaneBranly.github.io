import { useState, useEffect, JSXElementConstructor, ReactElement, ReactFragment, ReactPortal } from 'react'
import fetchGithubRepositories from 'utils/fetchGithubRepositories'
import './Projects.scss'

export interface ProjectsProps {
   
}

const Projects = (props: ProjectsProps) => {
    const [allProjects, setAllProjects] = useState([])

    useEffect(() => {
        fetchGithubRepositories('StephaneBranly').then(
            (projects) => {
                setAllProjects(projects)
            })
    }, [])

    const renderProject = (project: { html_url: string | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) => {
        return (<section className='one_project'>
             <a href={project.html_url} target='_blank' rel='noreferrer'><h3 className='project_title'>{project.name}</h3></a>
           </section> )   
    }
   return <section id='Projects'>
        <h2>Projets</h2>
        {allProjects.map((project) => renderProject(project))}
    </section>
}

export default Projects
