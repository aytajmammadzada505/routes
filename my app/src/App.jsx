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