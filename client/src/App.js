import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Layout from './components/Layout';
import Protected from './pages/Protected';
import RequireAuth from './components/RequireAuth';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route element ={<Layout />}>
        <Route path = "/" element = {<Home />} />
        <Route path = "/register" element = {<Register />} />
        <Route path = "/login" element = {<Login />} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/portfolio" element = {<Portfolio />} />
        <Route path = "/contact" element = {<Contact />} />
        <Route element = {<RequireAuth />}>
          <Route path = "/protected" element = {<Protected />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
