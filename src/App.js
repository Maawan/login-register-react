import logo from './logo.svg';
import './App.css';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import Home from './Components/Home';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
