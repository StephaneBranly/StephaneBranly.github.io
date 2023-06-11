import './Experience.scss'

export interface ExperienceProps {
   
}

const Experience = (props: ExperienceProps) => {
   return <section  className='resume_section' id='Experience'>
        <h2>Expérience professionnelle</h2>

        <section className='experience_content'>
        <section className='experience_item'>
            <div className='experience_header'>
                <div className='experience_title'>Data Scientist</div>
                <div className='experience_date'>Fev 2023 - Présent</div>
            </div>
            <a href='https://securite-ferroviaire.fr/' target={'_blank'} rel={'noreferrer'}><div className='experience_company'>Établissement Public de Sécurité Ferroviaire</div></a>
            <ul className='experience_description'>
                <li>Application du Traitement Automatique des Langues (TAL/NLP) aux notifications des événements de sécurité ferroviaire</li>
                <li>Développement d'un dashboard de suivi de la sécurité</li>
            </ul>
        </section>

        <section className='experience_item'>
            <div className='experience_header'>
                <div className='experience_title'>Assistant Ingénieur Informatique</div>
                <div className='experience_date'>Aou 2021 - Fev 2022</div>
            </div>
            <a href='https://www.sysnav.fr' target={'_blank'} rel={'noreferrer'}><div className='experience_company'>Sysnav</div></a>
            <ul className='experience_description'>
                <li>Recherche et Développement d’un serveur de tuiles personnalisables</li>
                <li>Preuve de concept utilisée pour les technologies de géolocalisation des piétons. Géolocalisation faite à partir de la technologie brevetée Sysnav fonctionnant avec une centrale magnéto-inertielle.</li>
            </ul>
        </section>

        <section className='experience_item'>
            <div className='experience_header'>
                <div className='experience_title'>Ambassadeur</div>
                <div className='experience_date'>2018 - 2023</div>
            </div>
            <a href='https://www.utc.fr' target={'_blank'} rel={'noreferrer'}><div className='experience_company'>Université de Technologie de Compiègne</div></a>
            <ul className='experience_description'>
                <li>Présentation de l'UTC pendant les lives, salons étudiants, portes ouvertes</li>
                <li>Ambassadeur Parcoursup de l'UTC</li>
            </ul>
        </section>

        <section className='experience_item'>
            <div className='experience_header'>
                <div className='experience_title'>Développeur</div>
                <div className='experience_date'>Sep 2019 - Oct 2019</div>
            </div>
            <a href='https://walacom.fr/' target={'_blank'} rel={'noreferrer'}><div className='experience_company'>Walacom</div></a>
            <ul className='experience_description'>
                <li>Développement d'un outill de prospection</li>
            </ul>
        </section>

        <section className='experience_item'>
            <div className='experience_header'>
                <div className='experience_title'>Stage technicien</div>
                <div className='experience_date'>Jan 2019 - Fev 2019</div>
            </div>
            <a href='https://www.nausicaa.fr/' target={'_blank'} rel={'noreferrer'}><div className='experience_company'>Nausicáa</div></a>
            <ul className='experience_description'>
                <li>Maintenance audiovisuel de la partie Musée de Nausicaà (12V et 220V)</li>
                <li>Installation de nouvelles expositions</li>
            </ul>
        </section>
        </section>
    </section>
}

export default Experience
