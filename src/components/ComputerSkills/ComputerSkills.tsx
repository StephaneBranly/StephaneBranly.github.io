import './ComputerSkills.scss'

export interface ComputerSkillsProps {
   
}

const ComputerSkills = (props: ComputerSkillsProps) => {
   return <section className='resume_section' id='ComputerSkills'>
        <h2>Compétences informatiques</h2>
        <section className='ComputerSkills_content'>
        <ul>
            <li>Algorithmique</li>
            <li>Débogage logiciel</li>
            <li>Python</li>
            <li>C</li>
            <li>C++</li>
            <li>Common Lisp</li>
            <li>React</li>
            <li>React Native</li>
            <li>Typescript</li>
            <li>Git</li>
            <li>Docker</li>
            <li>Méthode Scrum</li>         
        </ul>
        </section>
    </section>
}

export default ComputerSkills
