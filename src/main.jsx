
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page from './page/Page';
import GratitudePage from './components/GratitudePage/GratitudePage'
import SavedReflections from './components/SavedReflections/SavedReflection';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Page />} />
      <Route path="/gratitude" element={<GratitudePage key='gratitude' />} />
      <Route path="/saved-reflections" element={<SavedReflections key='saved-reflections' />} />
    </Routes>
  </Router>
);
