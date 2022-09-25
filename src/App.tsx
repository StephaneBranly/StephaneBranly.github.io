import React from 'react';
import './App.scss';
import { ComputerSkills, Education, Experience, Header, IAandDataScienceSkills, Languages, Details, Hobbies, Projects } from 'components'

function App() {
  return (
    <div className="App">

      <section id='content'>
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
    </div>
  );
}

export default App;
