import { Routes, Route } from 'react-router-dom';
import { Homepage } from './components/Homepage';
import { Aboutpage } from './components/Aboutpage';
import { Blogpage } from './components/Blogpage';
import { Notfoundpage } from './components/Notfoundpage';
import { Layout } from './components/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/posts" element={<Blogpage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
