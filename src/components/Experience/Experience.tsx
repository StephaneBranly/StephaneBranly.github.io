import "./Experience.scss";
import { Store, Term } from "n3";
import getNamedNode from "utils/getNamedNode";
import getTriple from "utils/getTriple";
import moment from "moment";
import { useOntoContext } from "ontology/OntoContext";
import { useEffect } from "react";

export interface ExperienceProps {}

const Experience = (props: ExperienceProps) => {
  const onto = useOntoContext();

  useEffect(() => {
    onto.addOntologyFile("./ontology/experience.ttl");
    onto.addOntologyFile("./ontology/organisations.ttl");
  }, []);

  const render_experience = (store: Store, experience: Term) => {
    const company = getTriple(store, experience, getNamedNode("company"));
    const compagnyWebsite = getTriple(
      store,
      company as Term,
      getNamedNode("website")
    );

    const tasks = store.getQuads(experience, getNamedNode("task"), null, null);

    const startDate = getTriple(store, experience, getNamedNode("startDate"));
    const startDateStr = moment(startDate?.value).format("MMM YYYY");
    const endDate = getTriple(store, experience, getNamedNode("endDate"));
    const endDateStr = endDate
      ? moment(endDate.value).format("MMM YYYY")
      : "Présent";

    return (
      <section className="experience_item" key={experience.value}>
        <div className="experience_header">
          <div className="experience_title">
            {getTriple(store, experience, getNamedNode("jobTitle"))?.value}
          </div>
          <div className="experience_date">{`${startDateStr} - ${endDateStr}`}</div>
        </div>
        <a href={compagnyWebsite?.value} target={"_blank"} rel={"noreferrer"}>
          <div className="experience_company">
            {getTriple(store, company as Term, getNamedNode("name"))?.value}
          </div>
        </a>
        <ul className="experience_description">
          {tasks.map((task, index) => (
            <li key={index}>{task.object.value}</li>
          ))}
        </ul>
      </section>
    );
  };
  const experiences = onto.store.getQuads(
    null,
    getNamedNode("experience"),
    null,
    null
  );
  return (
    <section className="resume_section" id="Experience">
      <h2>Expérience professionnelle</h2>
      <section className="experience_content">
        {experiences.map((experience, index) => {
          return render_experience(onto.store, experience.object);
        })}
      </section>
    </section>
  );
};

export default Experience;
