import { Parser, Store, Writer } from "n3";
import { useMemo, useState } from "react";
import { ReactNode } from "react";
import OntoContext, { OntoContextType } from "./OntoContext";
import readFile from "utils/readFile";

export const OntoProvider = ({ children }: { children: ReactNode }) => {
  const store = useMemo(() => new Store(), []);
  const [loadedFiles, setLoadedFiles] = useState<string[]>([]);

  const updateLoadedFiles = (filename: string) => {
    setLoadedFiles((loadedFiles) => [...loadedFiles, filename]);
  };

  const addOntologyFile = async (filename: string) => {
    if (loadedFiles.includes(filename)) return;
    console.log("Adding ontology file", filename);
    updateLoadedFiles(filename);
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

    setValue({ store, addOntologyFile, serializeStore, loadDefaultOntologies });
  };

  const loadDefaultOntologies = async () => {
    await addOntologyFile("./ontology/details.ttl");
    await addOntologyFile("./ontology/education.ttl");
    await addOntologyFile("./ontology/experience.ttl");
    await addOntologyFile("./ontology/header.ttl");
    await addOntologyFile("./ontology/hobbies.ttl");
    await addOntologyFile("./ontology/languages.ttl");
    await addOntologyFile("./ontology/organisations.ttl");
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

  const [value, setValue] = useState<OntoContextType>({
    store,
    addOntologyFile,
    serializeStore,
    loadDefaultOntologies,
  });

  return <OntoContext.Provider value={value}>{children}</OntoContext.Provider>;
};

export default OntoProvider;
