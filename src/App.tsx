// about me (contact info) / education / skills / works / contact
import { FunctionComponent, useState } from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Education from './components/education/education';
import Skills from './components/skills/skills';
import SocialMediaMenu from './components/socialmedia-menu/socialmedia-menu';
import NavigationBar from './components/navigation-bar/navigation-bar';
import Contact from './components/contact/contact';
import CustomMouse from './components/custom-mouse/custom-mouse';
import MouseHoverContext from './context/hover/hover';
import Works from './components/works/works';
const App: FunctionComponent = () => {
  const [isHover, setHover] = useState(false);

  return (
    <div className='App'>
      <MouseHoverContext.Provider value={{ isHover, setHover }}>
        <Header />
        <About />
        <Education />
        <Skills />
        <Works />
        <Contact />
        <SocialMediaMenu />
        {/* <NavigationBar /> */}
        <CustomMouse />
      </MouseHoverContext.Provider>
    </div>
  );
};

export default App;
