import './Experience.scss'

export interface ExperienceProps {
   
}

const Experience = (props: ExperienceProps) => {
   return <section id='Experience'>
        <h2>Passions</h2>
        <section className='one_experience'>
            <h3 className='experience_title'>Assistant Ingénieur Informatique</h3>
            <h4 className='experience_company'>Sysnav</h4>
            <h4 className='experience_date'>Sep 2021 - Fev 2022</h4>
            <ul className='experience_description'>
                <li>Recherche et Développement d’un serveur de tuiles personnalisables</li>
                <li>Preuve de concept utilisée pour les technologies de géolocalisation des piétons. Géolocalisation faite à partir de la technologie brevetée Sysnav fonctionnant avec une centrale magnéto-inertielle.</li>
            </ul>
        </section>

        <section className='one_experience'>
            <h3 className='experience_title'>Ambassadeur</h3>
            <h4 className='experience_company'>Université de Technologie de Compiègne</h4>
            <h4 className='experience_date'>2018 - Présent</h4>
            <ul className='experience_description'>
                <li>Présentation de l'UTC pendant les lives, salons étudiants, portes ouvertes</li>
                <li>Ambassadeur Parcoursup de l'UTC</li>
            </ul>
        </section>

        <section className='one_experience'>
            <h3 className='experience_title'>Développeur</h3>
            <h4 className='experience_company'>Walacom</h4>
            <h4 className='experience_date'>Sep 2019 - Oct 2019</h4>
            <ul className='experience_description'>
                <li>Développement d'un outill de prospection</li>
            </ul>
        </section>

        <section className='one_experience'>
            <h3 className='experience_title'>Stage technicien</h3>
            <h4 className='experience_company'>Nausicáa</h4>
            <h4 className='experience_date'>Jan 2019 - Fev 2019</h4>
            <ul className='experience_description'>
                <li>Maintenance audiovisuel de la partie Musée de Nausicaà (12V et 220V)</li>
                <li>Installation de nouvelles expositions</li>
            </ul>
        </section>
    </section>
}

export default Experience
