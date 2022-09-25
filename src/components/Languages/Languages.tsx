import './Languages.scss'

export interface LanguagesProps {
   
}

const Languages = (props: LanguagesProps) => {
   return <section id='Languages'>
        <h2>Compétences informatiques</h2>
        <ul>
            <li>Français : Langue Maternelle</li>
            <li>Anglais : Courant</li>
            <li>Espagnol : Intermédiaire</li>
        </ul>
    </section>
}

export default Languages
