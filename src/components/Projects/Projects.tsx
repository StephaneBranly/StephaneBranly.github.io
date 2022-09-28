import { useState, useEffect } from 'react'
import fetchGithubRepositories from 'utils/fetchGithubRepositories'

import { ImSpinner9 } from 'react-icons/im'
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'
import './Projects.scss'
import { isMobile } from 'react-device-detect'

export interface ProjectsProps {
   
}

const Projects = (props: ProjectsProps) => {
    const [allProjects, setAllProjects] = useState([])
    const [page, setPage] = useState(1)

    const projectsByPage = isMobile ? 3 : 9
    
    useEffect(() => {
        fetchGithubRepositories('StephaneBranly').then(
            (projects) => {
                setAllProjects(projects.filter((project: any) => project.archived === false))
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

    const renderProjects = () => {
        const projects = allProjects.slice((page-1)*projectsByPage, page * projectsByPage)
        return projects.map(renderProject)
    }
   return <section  className='resume_section' id='Projects'>
        <h2>Projets</h2>
        <section className='projects_pagination'>
            <button className='pagination_button' onClick={() => setPage(page - 1)} disabled={page === 1}><AiOutlineLeft /></button>
            {!isMobile ? Array.from(Array(Math.ceil(allProjects.length / projectsByPage)).keys()).map((index) => {
                return <button key={index} className={`pagination_button ${index + 1 === page ? 'active' : ''}`} onClick={() => setPage(index + 1)}>{index + 1}</button>
            }) : <button className={`pagination_button active`}>{page}/{Math.ceil(allProjects.length / projectsByPage)}</button>}
            <button className='pagination_button' onClick={() => setPage(page + 1)} disabled={page === Math.ceil(allProjects.length / projectsByPage)}><AiOutlineRight /></button>
        </section>
        <section className='projects_content'>
        {allProjects.length === 0 && <ImSpinner9 className='loading_icon' />}
        {renderProjects()}
        </section>
       
    </section>
}

export default Projects
