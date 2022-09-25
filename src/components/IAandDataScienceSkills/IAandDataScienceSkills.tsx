import './IAandDataScienceSkills.scss'

export interface IAandDataScienceSkillsProps {
   
}

const IAandDataScienceSkills = (props: IAandDataScienceSkillsProps) => {
   return <section  className='resume_section' id='IAandDataScienceSkills'>
        <h2>Compétences IA et Science des Données</h2>
        <section className='IAandDataScienceSkills_content'>
        <ul>
            <li>Systèmes experts</li>
            <li>Programmation logique</li>
            <li>Analyse exploratoire</li>
            <li>Apprentissage non supervisé</li>
            <li>Apprentissage supervisé</li>
            <li>Feature Sélection</li>
            <li>Traitement des Données Spatiales</li>
            <li>Traitement Automatique des Langues</li>
            <li>MySQL</li>
            <li>PostgreSQL</li>
        </ul>
        </section>
    </section>
}

export default IAandDataScienceSkills
