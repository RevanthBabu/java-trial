import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateEmployee from './CreateEmployee';
import DisplayEmployees from './DisplayEmployees';
import AppMenu from './AppMenu';

function Home() {
  return (
    <div>
      <header className="App-header">
        <h1>Company Portal</h1>
        <AppMenu />
      </header>
      <section className="corporate-gallery">
        <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80" alt="Corporate Building 1" />
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" alt="Corporate Building 2" />
        <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80" alt="Corporate Building 3" />
      </section>
    </div>
  );
}

function AboutCompany() {
  return (
    <div className="about-company">
      <AppMenu />
      <h2>About Acme Corp</h2>
      <p>Acme Corp is a leading technology company specializing in cloud solutions and artificial intelligence.</p>
      <p>Founded in 2010, we have grown to serve clients worldwide with innovative digital products.</p>
      <p>Our mission is to empower businesses through cutting-edge technology and exceptional service.</p>
      <p>We value integrity, collaboration, and continuous learning in everything we do.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/about" element={<AboutCompany />} />
          <Route path="/create-employee" element={<><AppMenu /><CreateEmployee /></>} />
          <Route path="/display-employees" element={<><AppMenu /><DisplayEmployees /></>} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
