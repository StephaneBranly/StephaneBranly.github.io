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
          {replacePrefixes(term.value)}
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

      <div className="turtle-viewer">
        <nav>
          <button onClick={() => onto.serializeStore().then(console.log)}>
            Exporter
          </button>
        </nav>
        <pre className="turtle-file">
          {subjects.map((subject, index) => {
            const triples = onto.store.getQuads(subject, null, null, null);
            return (
              <>
                <pre
                  className="row"
                  id={subject.value.replace(prefixes[""], "")}
                >
                  <span className="subject">
                    {replacePrefixes(subject.value)}
                  </span>
                </pre>
                {triples.map((triple, index) => {
                  return (
                    <pre key={index} className="row tab">
                      <span className="tab" />
                      {displayTerm(triple.predicate)}{" "}
                      {displayTerm(triple.object)}
                      {index === triples.length - 1 ? "." : ";"}
                    </pre>
                  );
                })}
                <pre className="row"></pre>
              </>
            );
          })}
        </pre>
      </div>
    </section>
  );
};

export default TurtleViewer;
