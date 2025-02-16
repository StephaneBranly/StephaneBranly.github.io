import "./Education.scss";
import { Store, Term } from "n3";
import getNamedNode from "utils/getNamedNode";
import getTriple from "utils/getTriple";
import moment from "moment";
import { useContext, useEffect } from "react";
import { useOntoContext } from "ontology/OntoContext";
import OrganisationTitle from "components/OrganisationTitle/OrganisationTitle";

export interface EducationProps {}

const Education = (props: EducationProps) => {
  const onto = useOntoContext();

  useEffect(() => {
    onto.addOntologyFile("./ontology/education.ttl");
    onto.addOntologyFile("./ontology/organisations.ttl");
  }, []);

  const render_education = (store: Store, education: Term) => {
    const school = getTriple(store, education, getNamedNode("school"));
    const startDate = getTriple(store, education, getNamedNode("startDate"));
    const startDateStr = moment(startDate?.value).format("MMM YYYY");
    const endDate = getTriple(store, education, getNamedNode("endDate"));
    const endDateStr = moment(endDate?.value).format("MMM YYYY");

    return (
      <section className="education_item" key={education.value}>
        <div className="education_header">
          <div className="education_title">
            {getTriple(store, education, getNamedNode("title"))?.value}
          </div>
          <div className="education_date">{`${startDateStr} - ${endDateStr}`}</div>
        </div>
        <div className="education_school">
          <OrganisationTitle organisation={school as Term} />
        </div>
      </section>
    );
  };

  const educations = onto.store.getQuads(
    null,
    getNamedNode("education"),
    null,
    null
  );
  return (
    <section className="resume_section" id="Education">
      <h2>Éducation</h2>
      <section className="education_content">
        {educations.map((education, index) =>
          render_education(onto.store, education.object)
        )}
      </section>
    </section>
  );
};

export default Education;
