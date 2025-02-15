import { Parser, Store, Writer } from "n3";
import { useMemo, useState } from "react";
import { ReactNode } from "react";
import OntoContext from "./OntoContext";
import readFile from "utils/readFile";

export const OntoProvider = ({ children }: { children: ReactNode }) => {
  const store = useMemo(() => new Store(), []);
  const [loadedFiles, setLoadedFiles] = useState<string[]>([]);

  const addOntologyFile = async (filename: string) => {
    if (loadedFiles.includes(filename)) return;
    console.log("Adding ontology file", filename);
    setLoadedFiles([...loadedFiles, filename]);
    const fileContent = await readFile(filename);
    if (!fileContent) return;

    const parser = new Parser();

    parser.parse(fileContent, (error, triple, prefixes) => {
      if (error) {
        console.error(error);
      }
      if (triple) {
        store.addQuad(triple);
      }
    });
  };

  const serializeStore = () => {
    const promise = new Promise<string>((resolve, reject) => {
      if (!store) return;
      const writer = new Writer();
      store.getQuads(null, null, null, null).forEach((quad) => {
        writer.addQuad(quad);
      });
      return writer.end((error, result) => resolve(result));
    });
    return promise;
  };

  return (
    <OntoContext.Provider value={{ store, addOntologyFile, serializeStore }}>
      {children}
    </OntoContext.Provider>
  );
};

export default OntoProvider;
