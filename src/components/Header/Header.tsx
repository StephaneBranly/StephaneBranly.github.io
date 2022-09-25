import './Header.scss'

export interface HeaderProps {
   
}

const Header = (props: HeaderProps) => {
   return <header>
        <h1>Stéphane BRANLY</h1>
        <h2>Étudiant à l'Université de Technologie de Compiègne</h2>

        <div>
            Recherche un projet de fin d'études en IA.
            En Intelligence Artificielle et Science des Données, de frévrier à juillet 2023
        </div>
    </header>
}

export default Header
