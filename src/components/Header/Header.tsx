import './Header.scss'

export interface HeaderProps {
   
}

const Header = (props: HeaderProps) => {
   return <header>
        <h1>Stéphane BRANLY</h1>
        <h2>Étudiant à l'Université de Technologie de Compiègne, spécialisé en Intelligence Artificielle et Science des Données</h2>

        <div>
            Recherche un Projet de Fin d'Étude.
        </div>
        <div>
            En Intelligence Artificielle et Science des Données, de février à juillet 2023
        </div>
    </header>
}

export default Header
