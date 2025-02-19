import "./Details.scss";
import {
  AiOutlineMail,
  AiOutlineCalendar,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import getTriple from "utils/getTriple";
import getNamedNode from "utils/getNamedNode";
import { useOntoContext } from "ontology/OntoContext";
import { useEffect } from "react";

export interface DetailsProps {}

const Details = (props: DetailsProps) => {
  const onto = useOntoContext();

  useEffect(() => {
    onto.addOntologyFile("./ontology/details.ttl");
  }, []);

  const birthDateValue = getTriple(
    onto.store,
    null,
    getNamedNode("birthDate")
  )?.value;
  const birthday = birthDateValue ? new Date(birthDateValue) : new Date();
  const today = new Date();
  const age = today.getFullYear() - birthday.getFullYear();
  return (
    <section className="resume_section" id="details">
      <h2>Détails</h2>
      <section className="details_content">
        <ul>
          <li>
            <a
              href={`mailto:${
                getTriple(onto.store, null, getNamedNode("email"))?.value
              }`}
              target={"_blank"}
              rel={"noreferrer"}
            >
              <div className="detail_content">
                <AiOutlineMail className="detail_icon" />
                <span className="detail_text">
                  {getTriple(onto.store, null, getNamedNode("email"))?.value}
                </span>
              </div>
            </a>
          </li>
          <li>
            <div className="detail_content">
              <AiOutlineCalendar className="detail_icon" />
              <span className="detail_text">{age} ans</span>
            </div>
          </li>
          <li>
            <a
              href={
                getTriple(onto.store, null, getNamedNode("linkedin"))?.value
              }
              target={"_blank"}
              rel={"noreferrer"}
            >
              <div className="detail_content">
                <AiOutlineLinkedin className="detail_icon" />
                <span className="detail_text">/stephanebranly</span>
              </div>
            </a>
          </li>
          <li>
            <a
              href={getTriple(onto.store, null, getNamedNode("github"))?.value}
              target={"_blank"}
              rel={"noreferrer"}
            >
              <div className="detail_content">
                <AiOutlineGithub className="detail_icon" />
                <span className="detail_text">/stephanebranly</span>
              </div>
            </a>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default Details;
