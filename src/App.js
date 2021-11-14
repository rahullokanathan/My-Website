import React from 'react';
import Header from "./components/header/Header";
import SkillContainer from "./components/skillcontainer/SkillContainer";
import TopContainer from "./components/TopContainer/TopContainer";
import ExperienceContainer from './components/ExperienceContainer/ExperienceContainer';
import Contact from './components/Contact/Contact';
import ProjectContainer from './components/ProjectContainer/ProjectContainer';


const App=()=>{ 
   return (
    <div>
<Header/>  
<TopContainer/>  
<SkillContainer/>
<ProjectContainer/>
<ExperienceContainer/>
<Contact/>

    </div>

  );
};

export default App;
