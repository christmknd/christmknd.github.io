import './App.css';
import {Route,Routes} from 'react-router'
import Nav from "./components/Nav"
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Readme from "./components/Readme";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
          <Route path="/" element= {<Home/>}/>
          <Route path="About" element= {<About/>}/>
          <Route path="Portfolio" element= {<Portfolio/>}/>
          <Route path="Readme" element= {<Readme/>}/>
      </Routes>
        <Footer/>
    </div>
  );
}

export default App;
