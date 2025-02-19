import { Store } from "n3";
import { createContext, useContext } from "react";

export interface OntoContextType {
  store: Store;
  addOntologyFile: (filename: string) => Promise<void>;
  serializeStore: () => Promise<string>;
  loadDefaultOntologies: () => Promise<void>;
}

const OntoContext = createContext<OntoContextType>({} as OntoContextType);

export const useOntoContext = () => {
  const context = useContext(OntoContext);
  if (context === undefined) {
    throw new Error("useOntoContext must be used within a OntoProvider");
  }
  return context;
};

export default OntoContext;
