import { useEffect, useMemo, useState } from "react";
import * as N3 from "n3";
import readFile from "utils/readFile";

export interface OntoDisplayProps {
  turtleFile: string;
  render?: (store: N3.Store) => JSX.Element;
}

const OntoDisplay = (props: OntoDisplayProps) => {
  const { turtleFile, render } = props;

  const [fileContent, setFileContent] = useState<string>();
  const [ontoStore, setOntoStore] = useState<N3.Store>();

  const readOntoFileContent = async () => {
    const content = await readFile(turtleFile);
    setFileContent(content);
  };

  useEffect(() => {
    readOntoFileContent();
  }, [turtleFile]);

  useEffect(() => {
    if (!fileContent) return;
    const parser = new N3.Parser();
    const store = new N3.Store();

    parser.parse(fileContent, (error, triple, prefixes) => {
      if (error) {
        console.error(error);
      }
      if (triple) {
        store.addQuad(triple);
        setOntoStore(store);
      }
    });
  }, [fileContent]);

  return useMemo(() => {
    if (!ontoStore) return null;
    if (render) return render(ontoStore);
    return null;
  }, [ontoStore, render]);
};

export default OntoDisplay;
