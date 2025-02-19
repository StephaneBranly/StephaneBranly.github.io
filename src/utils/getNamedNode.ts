import * as N3 from "n3";
import prefixes from "./prefixes";

const getNamedNode = (uri: string, prefix: keyof typeof prefixes = "") => {
  return new N3.NamedNode(prefixes[prefix] + uri);
};

export default getNamedNode;
