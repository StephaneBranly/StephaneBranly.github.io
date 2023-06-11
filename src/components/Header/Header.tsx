import './Header.scss'

export interface HeaderProps {
   
}

const Header = (props: HeaderProps) => {
   return <header>
        <h1>Stéphane BRANLY</h1>
        <h2>Ingénieur informatique de l'Université de Technologie de Compiègne, spécialisé en Intelligence Artificielle et Science des Données</h2>

        <div>
            Actuellement en projet de fin d'études chez l'EPSF (Établissement Public de Sécurité Ferroviaire)
        </div>
        <div>
            À l'écoute d'opportunités de CDI à partir d'août 2023 en tant que Data Scientist
        </div>
    </header>
}

export default Header
