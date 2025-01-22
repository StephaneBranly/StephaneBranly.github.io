import "./Header.scss";

export interface HeaderProps {}

const Header = (props: HeaderProps) => {
  return (
    <header>
      <h1>Stéphane BRANLY</h1>
      <h2>
        Ingénieur informatique de l'Université de Technologie de Compiègne,
        spécialisé en Intelligence Artificielle et Science des Données
      </h2>

      <div>
        Data Scientist chez l'EPSF (Établissement Public de Sécurité
        Ferroviaire)
      </div>
    </header>
  );
};

export default Header;
