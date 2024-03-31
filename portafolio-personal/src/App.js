
import './App.css';
import './components/about me';
import AboutMe from './components/about me';
import ContacInfo from './components/contactInfo';
import Experience from './components/experience';
import Hero from './components/hero';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Projects from './components/projects';
import Testimonios from './components/testimonios';
import Articles from './components/articles';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Hero/>
    <AboutMe/>
    <Experience/>
    <Projects/>
    <Articles/>
    <Testimonios/>
    <ContacInfo/>
    <Footer/>
    </div>
  );
}

export default App;
