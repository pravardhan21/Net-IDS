import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={ <Login />} />
          <Route path="/home" element={<Home />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
