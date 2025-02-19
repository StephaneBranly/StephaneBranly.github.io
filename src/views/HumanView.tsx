import {
  Header,
  Details,
  Experience,
  Education,
  IAandDataScienceSkills,
  ComputerSkills,
  Projects,
  Languages,
  Hobbies,
} from "components";

const HumanView = () => {
  return (
    <section id="content">
      <Header />
      <Details />
      <Experience />
      <Education />
      <IAandDataScienceSkills />
      <ComputerSkills />
      <Projects />
      <Languages />
      <Hobbies />
    </section>
  );
};

export default HumanView;
