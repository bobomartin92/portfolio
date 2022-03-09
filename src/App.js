import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import NavBar from './components/NavBar';
import SocialIcons from './components/SocialIcons'
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <>
      <Router>
        <div className='relative bg-green-100'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <SocialIcons />
        </div>
      </Router>
    </>
  );
}

export default App;
