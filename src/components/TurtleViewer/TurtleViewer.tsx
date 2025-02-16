import "./TurtleViewer.scss";
import { Term } from "n3";
import { useOntoContext } from "ontology/OntoContext";
import prefixes, { replacePrefixes } from "utils/prefixes";

const TurtleViewer = () => {
  const onto = useOntoContext();

  const subjects = onto.store.getSubjects(null, null, null);

  const displayTerm = (term: Term) => {
    if (term.termType === "NamedNode") {
      const link = term.value.replace(prefixes[""], "#");
      return (
        <a href={link} className="namednode">
          {term.value}
        </a>
      );
    } else if (term.termType === "Literal") {
      const language = term.language ? `@${term.language}` : undefined;
      const datatype = term.datatypeString
        ? replacePrefixes(term.datatypeString)
        : undefined;
      return (
        <span className="literal">
          "{term.value}"
          {datatype && !["xsd:string", "rdf:langString"].includes(datatype) && (
            <span className="type">^^{datatype}</span>
          )}
          <span className="language">{language}</span>
        </span>
      );
    }
  };

  return (
    <section>
      <h2>Turtle format</h2>
      <button onClick={() => onto.serializeStore().then(console.log)}>
        {" "}
        Serialize{" "}
      </button>
      <pre className="turtle">
        {subjects.map((subject, index) => {
          const triples = onto.store.getQuads(subject, null, null, null);
          return (
            <div
              key={index}
              id={subject.value.replace(prefixes[""], "")}
              className="subject-div"
            >
              <span className="subject">{subject.value}</span>
              <ul className="triples">
                {triples.map((triple, index) => {
                  return (
                    <li key={index} className="triple">
                      {displayTerm(triple.predicate)}{" "}
                      {displayTerm(triple.object)}
                      {index === triples.length - 1 ? "." : ";"}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </pre>
    </section>
  );
};

export default TurtleViewer;
