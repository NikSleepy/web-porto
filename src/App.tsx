import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import './App.css';
import { Layout } from './pages/layout';


function App() {

    

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
