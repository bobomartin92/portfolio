import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<h1>Projects</h1>} />
          <Route path='/about' element={<h1>About</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
