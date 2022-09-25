import './Education.scss'

export interface EducationProps {
   
}

const Education = (props: EducationProps) => {
   return <section id='Education'>
        <h2>Passions</h2>
        <section className='one_education'>
            <h3 className='education_title'>Échange Ingénieur Informatique</h3>
            <h4 className='education_school'>Polytechnique Montréal</h4>
            <h4 className='education_date'>AOU 2022 - DEC 2023</h4>
        </section>

        <section className='one_education'>
            <h3 className='education_title'>Ingénieur Informatique, IA et Science des données</h3>
            <h4 className='education_school'>Université de Technologie de Compiègne</h4>
            <h4 className='education_date'>2020 - 2023</h4>
            <ul className='education_description'>
                <li>GPA : 5,00/5</li>
            </ul>
        </section>

        <section className='one_education'>
            <h3 className='education_title'>Tronc Commun</h3>
            <h4 className='education_school'>Université de Technologie de Compiègne</h4>
            <h4 className='education_date'>2018 - 2020</h4>
            <ul className='education_description'>
                <li>GPA : 4,63/5</li>
            </ul>
        </section>

        <section className='one_education'>
            <h3 className='education_title'>Terminale Scientifique</h3>
            <h4 className='education_school'>Lycée Branly de Boulogne-sur-Mer</h4>
            <h4 className='education_date'>2017 - 2018</h4>
            <ul className='education_description'>
                <li>Baccalauréat avec Mention Très Bien (19,21/20)</li>
            </ul>
        </section>
    </section>
}

export default Education
