import './Details.scss'

export interface DetailsProps {
   
}

const Details = (props: DetailsProps) => {
   return <section id='details'>
        <h2>Détails</h2>
        <ul>
            <li>stephanebranly[a]gmail.com</li>
            <li>22 ans</li>
            <li><a href='https://www.linkedin.com/in/stephanebranly/'>/stephanebranly</a></li>
            <li><a href='https://github.com/StephaneBranly'>/stephanebranly</a></li>
        </ul>
    </section>
}

export default Details
