import About from "./componets/About";
import Home from "./componets/Home";
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
        </Routes>

       </main>

      </Router>
     
      
    </div>
  );
}

export default App;
