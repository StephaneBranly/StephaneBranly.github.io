import OntoDisplay from "components/OntoDisplay/OntoDisplay";
import * as N3 from "n3";

import "./Header.scss";
import getTriple from "utils/getTriple";
import getNamedNode from "utils/getNamedNode";

export interface HeaderProps {}

const Header = (props: HeaderProps) => {
  const render = (store: N3.Store) => {
    return (
      <header>
        <h1>
          {getTriple(store, null, getNamedNode("givenName"))?.value}{" "}
          {getTriple(store, null, getNamedNode("surname"))?.value.toUpperCase()}
        </h1>
        <h2>{getTriple(store, null, getNamedNode("title"))?.value}</h2>

        <div>{getTriple(store, null, getNamedNode("situation"))?.value}</div>
      </header>
    );
  };

  return <OntoDisplay turtleFile="./ontology/header.ttl" render={render} />;
};

export default Header;
