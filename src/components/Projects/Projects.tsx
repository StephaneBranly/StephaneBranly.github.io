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

    const renderLabel = (label: string, classnames: string|undefined = undefined) => {
        return <span key={label} className={`project_label ${classnames}`}>{label}</span>
    }
    const renderProject = (project:any, index: number) => {
        return ( 
        <a href={project.html_url} target='_blank' rel='noreferrer' className='project_item' key={index}>
        <section>
            <h3 className='project_title'>{project.name}</h3>
            <div className='project_description'>{project.description}</div>
            <div className='project_labels'>
                {project.language && renderLabel(project.language, 'language')}
                {project.topics.map((label: string) => renderLabel(label))}
            </div>
         </section>
         </a>)   
    }
   return <section  className='resume_section' id='Projects'>
        <h2>Projets</h2>
        <section className='projects_content'>
        {allProjects.map((project, index) => renderProject(project, index))}
        </section>
    </section>
}

export default Projects
