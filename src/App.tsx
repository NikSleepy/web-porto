import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { AllProject } from './pages/project';
import './App.css';
import { Layout } from './pages/layout';
import { Contact } from './pages/contact';
import { DetailProject } from './pages/component/detail_project';
import { Coba } from './coba';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="project" element={<AllProject />} />
          <Route path="project/:id" element={<DetailProject />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path='/coba' element={<Coba/>} />
      </Routes>
    </>
  );
}

export default App;
