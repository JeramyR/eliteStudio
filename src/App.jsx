import { Router, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Services from './views/services/Services';
import Contact from './views/contact/Contact';
import Legal from './views/legal/Legal';
import Home from './views/home/Home';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
      </main>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
