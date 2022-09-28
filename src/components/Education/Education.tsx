import './Education.scss'

export interface EducationProps {
   
}

const Education = (props: EducationProps) => {
   return <section  className='resume_section' id='Education'>
        <h2>Éducation</h2>
        <section className='education_content'>
        <section className='education_item'>
            <div className='education_header'>
                <div className='education_title'>Échange Ingénieur Informatique</div>
                <div className='education_date'>Aou 2022 - Dec 2022</div>
            </div>
            <div className='education_school'>Polytechnique Montréal</div>
        </section>

        <section className='education_item'>
            <div className='education_header'>
                <div className='education_title'>Ingénieur Informatique, IA et Science des données</div>
                <div className='education_date'>2020 - 2023</div>
            </div>
            <div className='education_school'>Université de Technologie de Compiègne</div>
            <ul className='education_description'>
                <li>GPA : 5,00/5</li>
            </ul>
        </section>

        <section className='education_item'>
            <div className='education_header'>
                <div className='education_title'>Tronc Commun</div>
                <div className='education_date'>2018 - 2020</div>
            </div>
            <div className='education_school'>Université de Technologie de Compiègne</div>
            <ul className='education_description'>
                <li>GPA : 4,63/5</li>
            </ul>
        </section>

        <section className='education_item'>
            <div className='education_header'>
                <div className='education_title'>Terminale Scientifique</div>
                <div className='education_date'>2017 - 2018</div>
            </div>
            <div className='education_school'>Lycée Branly de Boulogne-sur-Mer</div>
            <ul className='education_description'>
                <li>Baccalauréat avec Mention Très Bien (19,21/20)</li>
            </ul>
        </section>
        </section>
    </section>
}

export default Education
