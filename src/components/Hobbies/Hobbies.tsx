import './Hobbies.scss'

export interface HobbiesProps {
   
}

const Hobbies = (props: HobbiesProps) => {
   return <section id='Hobbies'>
        <h2>Passions</h2>
        <ul>
            <li>Vélo de route, bikepacking, trekking</li>
            <li>Programmation, Open Source</li>
            <li>Piano, synthétiseur, musique</li>
        </ul>
    </section>
}

export default Hobbies
