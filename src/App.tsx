import React from 'react';
import './App.scss';
import { ComputerSkills, Education, Experience, Header, IAandDataScienceSkills, Languages, Details, Hobbies, Projects, Scene } from 'components'

function App() {
  return (
    <div className="App">
      <Scene />
      <section id='overlay'>
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
      </section>
    </div>
  );
}

export default App;
