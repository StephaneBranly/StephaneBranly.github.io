import OntoDisplay from "components/OntoDisplay/OntoDisplay";
import * as N3 from "n3";

import "./Header.scss";
import getTriple from "utils/getTriple";
import getNamedNode from "utils/getNamedNode";
import { useOntoContext } from "ontology/OntoContext";
import { useEffect } from "react";

export interface HeaderProps {}

const Header = (props: HeaderProps) => {
  const onto = useOntoContext();

  useEffect(() => {
    onto.addOntologyFile("./ontology/header.ttl");
  }, []);

  const log = async () => {
    const str = await onto.serializeStore();
    console.log(str);
  };

  return (
    <header>
      <button onClick={log}>Log store</button>
      <h1>
        {getTriple(onto.store, null, getNamedNode("givenName"))?.value}{" "}
        {getTriple(
          onto.store,
          null,
          getNamedNode("surname")
        )?.value.toUpperCase()}
      </h1>
      <h2>{getTriple(onto.store, null, getNamedNode("title"))?.value}</h2>

      <div>{getTriple(onto.store, null, getNamedNode("situation"))?.value}</div>
    </header>
  );
};

export default Header;
