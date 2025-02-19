import "./Navigation.scss";
import { NavLink } from "react-router";

const Navigation = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/" end>
              📄 Classic format
            </NavLink>
          </li>
          <li>
            <NavLink to="/turtle" end>
              💻 Turtle format
            </NavLink>
          </li>
          <li>
            <NavLink to="/explorer" end>
              🌌 Ontology explorer
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
