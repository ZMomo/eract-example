import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { Home } from './components/Home';  
import { Counter } from './components/Counter';
import { APIContextProvider } from "./contexts/APIContext";

import './App.css';

function App() {
  return (
    <APIContextProvider>
      <Router>
          <Routes>
            <Route path='/' element={
              <Home />
            }/>
            
            <Route path='/counter' element={
              <Counter />
            }/>
          </Routes>
      </Router>
    </APIContextProvider>
  );
}

export default App;
