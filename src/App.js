import { Routes, Route, Link } from 'react-router-dom';
import { Homepage } from './components/Homepage';
import { Aboutpage } from './components/Aboutpage';
import { Blogpage } from './components/Blogpage';
import { Notfoundpage } from './components/Notfoundpage';

function App() {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/posts">Blog</Link>
        <Link to="/about">About</Link>
      </header>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="posts" element={<Blogpage />} />
        <Route path="about" element={<Aboutpage />} />
        <Route path="*" element={<Notfoundpage />} />
      </Routes>
    </>
  );
}

export default App;
