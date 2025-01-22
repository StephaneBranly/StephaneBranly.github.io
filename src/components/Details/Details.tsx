import "./Details.scss";
import {
  AiOutlineMail,
  AiOutlineCalendar,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";

export interface DetailsProps {}

const Details = (props: DetailsProps) => {
  const birthday = new Date("2000-01-27");
  const today = new Date();
  const age = today.getFullYear() - birthday.getFullYear();

  return (
    <section className="resume_section" id="details">
      <h2>Détails</h2>
      <section className="details_content">
        <ul>
          <li>
            <a
              href="mailto:stephanebranly.pro+webresume@gmail.com"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <div className="detail_content">
                <AiOutlineMail className="detail_icon" />
                <span className="detail_text">
                  stephanebranly.pro@gmail.com
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
              href="https://www.linkedin.com/in/stephanebranly/"
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
              href="https://github.com/StephaneBranly"
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
