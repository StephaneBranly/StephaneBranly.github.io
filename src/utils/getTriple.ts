import * as N3 from "n3";

const getTriple = (
  store: N3.Store,
  subject: N3.Term | null,
  predicate?: N3.Term | null,
  language?: string
) => {
  const triples = store.match(subject || null, predicate || null, null);
  while (triples.size !== 0) {
    const triple = triples.read();
    if (!triple) {
      break;
    }
    if (!language) {
      return triple.object;
    }
    if (
      triple.object.termType === "Literal" &&
      triple.object.language === language
    ) {
      return triple.object;
    }
  }
};

export default getTriple;
