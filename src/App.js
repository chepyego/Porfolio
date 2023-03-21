import Contacts from "./componets/Contacts"
import About from "./componets/About";
import Home from "./componets/Home";
import TechStack from "./componets/TechStack"
import Project from "./componets/Project"
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import './App.css';
import Header from './componets/Header';

function App() {
  return (
    <div className="App">
      <Router>
       <Header/>
       <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/tech_stack' element={<TechStack/>}/>
          <Route path='/project' element={<Project/>}/>
          <Route path='/contacts' element={<Contacts/>}/>



        </Routes>

       </main>

      </Router>
     
      
    </div>
  );
}

export default App;
