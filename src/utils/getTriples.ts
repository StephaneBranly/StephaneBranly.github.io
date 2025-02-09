import * as N3 from "n3";

const getTriples = (
  store: N3.Store,
  subject: N3.Term | null,
  predicate?: N3.Term | null
) => {
  const triples = store.match(subject || null, predicate || null, null);
  return triples;
};

export default getTriples;
