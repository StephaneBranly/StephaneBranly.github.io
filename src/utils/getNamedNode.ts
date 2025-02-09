import * as N3 from "n3";
import baseURI from "./baseURI";

const getNamedNode = (uri: string) => {
  return new N3.NamedNode(baseURI + uri);
};

export default getNamedNode;
