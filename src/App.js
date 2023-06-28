import React from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router, Routes, Route,
  NavLink,
} from 'react-router-dom';
import { fetchGreeting } from './redux/greetings';
import Greeting from './components/greeting';

function App() {
  const dispatch = useDispatch();
  const greet = () => {
    dispatch(fetchGreeting());
  };
  return (
    <>
      <header>
        <nav>
          <NavLink to="/Greeting" onClick={greet}>Greetings</NavLink>
        </nav>
      </header>

      <Router>
        <Routes>
          <Route path="/Greeting" component={Greeting} />
        </Routes>
      </Router>

      {/* <Router>
        <Routes>
          <Route path="/Greeting" exact component={<Greeting />} />
        </Routes>
      </Router> */}

    </>
  );
}

export default App;
