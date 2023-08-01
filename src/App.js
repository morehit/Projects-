
import './App.css';
import NavBar from './components/navbar';
import Banner from './components/banner';
import Skills from './components/skills';
import Project from './components/Project';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
         <NavBar />
         <Banner />
         <Skills />
         <Project />
         <Contact />
    </div>
  );
}

export default App;
