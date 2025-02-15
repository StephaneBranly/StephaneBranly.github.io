import OntoDisplay from "components/OntoDisplay/OntoDisplay";
import "./Hobbies.scss";
import { Store } from "n3";
import getNamedNode from "utils/getNamedNode";
import getTriple from "utils/getTriple";
import { useOntoContext } from "ontology/OntoContext";
import { useEffect } from "react";

export interface HobbiesProps {}

const Hobbies = (props: HobbiesProps) => {
  const onto = useOntoContext();

  useEffect(() => {
    onto.addOntologyFile("./ontology/hobbies.ttl");
  }, []);

  const hobbies = onto.store.getQuads(null, getNamedNode("hobby"), null, null);
  return (
    <section className="resume_section" id="Hobbies">
      <h2>Passions</h2>
      <section className="hobbies_content">
        <ul>
          {hobbies.map((hobby, index) => {
            return (
              <li key={index}>
                {
                  getTriple(
                    onto.store,
                    hobby.object,
                    getNamedNode("label", "rdfs"),
                    "fr"
                  )?.value
                }
              </li>
            );
          })}
        </ul>
      </section>
    </section>
  );
};

export default Hobbies;
