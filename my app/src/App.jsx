//task 1
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Welcome from './welcome.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/welcome/:name" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


//task 2
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
