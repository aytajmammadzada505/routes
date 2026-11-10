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


//task 3
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Movies from './Movies';
import MovieDetail from './MovieDetail';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/movies" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;

//task 4 
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Checkout from './Checkout';
import Success from './success';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

