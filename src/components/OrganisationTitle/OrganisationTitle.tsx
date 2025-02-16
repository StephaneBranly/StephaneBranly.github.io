import "./OrganisationTitle.scss";
import { Term } from "n3";
import { useOntoContext } from "ontology/OntoContext";
import getNamedNode from "utils/getNamedNode";
import getTriple from "utils/getTriple";

export interface OrganisationTitleProps {
  organisation: Term;
}

const OrganisationTitle = ({ organisation }: OrganisationTitleProps) => {
  const onto = useOntoContext();

  const organisationWebsite = getTriple(
    onto.store,
    organisation,
    getNamedNode("website")
  );

  return (
    <a href={organisationWebsite?.value} target={"_blank"} rel={"noreferrer"}>
      <div className="organisation_title">
        {
          getTriple(
            onto.store,
            organisation,
            getNamedNode("label", "rdfs"),
            "fr"
          )?.value
        }
      </div>
    </a>
  );
};
export default OrganisationTitle;
