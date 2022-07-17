import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import IndexPage from './pages';
import Contact from './pages/contact';
import Projects from './pages/projects';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<IndexPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
