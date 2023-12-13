import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import Skills from './components/Skills/Skills';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <Home/>
      <Skills></Skills>
      <About></About>
      <Portfolio></Portfolio>
      <Testimonials></Testimonials>
    </>
  )
}

export default App
