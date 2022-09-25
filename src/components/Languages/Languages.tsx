import './Languages.scss'

export interface LanguagesProps {
   
}

const Languages = (props: LanguagesProps) => {
   return <section  className='resume_section' id='Languages'>
        <h2>Langues</h2>
        <section className='resume_section_content'>
        <ul>
            <li>Français : Langue Maternelle</li>
            <li>Anglais : Courant</li>
            <li>Espagnol : Intermédiaire</li>
        </ul>
        </section>
    </section>
}

export default Languages
