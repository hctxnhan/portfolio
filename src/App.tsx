// about me (contact info) / education / skills / works / contact
import { FunctionComponent } from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Education from './components/education/education';
import Skills from './components/skills/skills';
import SocialMediaMenu from './components/socialmedia-menu/socialmedia-menu';
import NavigationBar from './components/navigation-bar/navigation-bar';
import Contact from './components/contact/contact';
const App: FunctionComponent = () => {
  return (
    <div className='App'>
      <Header />
      <About />
      <Education />
      <Skills />
      <Contact />
      <SocialMediaMenu />
      <NavigationBar />
    </div>
  );
};

export default App;
