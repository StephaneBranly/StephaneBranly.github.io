import './ComputerSkills.scss'

export interface ComputerSkillsProps {
   
}

const ComputerSkills = (props: ComputerSkillsProps) => {
   return <section id='ComputerSkills'>
        <h2>Compétences informatiques</h2>
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
}

export default ComputerSkills
