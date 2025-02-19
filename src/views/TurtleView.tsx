import TurtleViewer from "components/TurtleViewer/TurtleViewer";
import { useOntoContext } from "ontology/OntoContext";
import { useEffect } from "react";

const TurtleView = () => {
  const onto = useOntoContext();
  useEffect(() => {
    onto.loadDefaultOntologies();
  }, []);

  return (
    <div style={{ width: "70vw" }}>
      <TurtleViewer />
    </div>
  );
};

export default TurtleView;
