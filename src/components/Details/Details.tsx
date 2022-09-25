import './Details.scss'

export interface DetailsProps {
   
}

const Details = (props: DetailsProps) => {
   return <section  className='resume_section' id='details'>
        <h2>Détails</h2>
        <section className='resume_section_content'>
        <ul>
            <li>stephanebranly[a]gmail.com</li>
            <li>22 ans</li>
            <li><a href='https://www.linkedin.com/in/stephanebranly/'>/stephanebranly</a></li>
            <li><a href='https://github.com/StephaneBranly'>/stephanebranly</a></li>
        </ul>
        </section>
    </section>
}

export default Details
