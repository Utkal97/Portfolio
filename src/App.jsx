import * as React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import data from './assets/data.json';

function App() {

  return (
    <>
      <Header />
      <About name={data.about.name} description={data.about.description} />
      <Experience experience={data.experience} />
      <Projects projects={data.projects} />
      <Hobbies hobbies={data.hobbies} />
      <Contact
        email={data.contact.email}
        phone={data.contact.phone}
        github={data.contact.GitHub}
        linkedin={data.contact.LinkedIn}
        devto={data.contact['Dev.to']}
        instagram={data.contact.Instagram}
      />
    </>
  )
}

export default App;
