import './Hobbies.scss'

export interface HobbiesProps {
   
}

const Hobbies = (props: HobbiesProps) => {
   return <section  className='resume_section' id='Hobbies'>
        <h2>Passions</h2>
        <section className='hobbies_content'>
        <ul>
            <li>🚴 Vélo de route, bikepacking, trekking</li>
            <li>👨🏻‍💻 Programmation, Open Source</li>
            <li>🎹 Piano, synthétiseur, musique</li>
        </ul>
        </section>
    </section>
}

export default Hobbies
