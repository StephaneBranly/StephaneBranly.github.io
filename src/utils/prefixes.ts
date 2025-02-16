const prefixes = {
  "": "https://stephanebranly.github.io#",
  rdf: "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
  rdfs: "http://www.w3.org/2000/01/rdf-schema#",
  xsd: "http://www.w3.org/2001/XMLSchema#",
};

const replacePrefixes = (turtle: string) => {
  Object.entries(prefixes).forEach(([prefix, uri]) => {
    turtle = turtle.replace(new RegExp(uri, "g"), `${prefix}:`);
  });
  return turtle;
};

export default prefixes;
export { replacePrefixes };
