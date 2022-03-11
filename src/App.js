import logo from './logo.svg';
import './App.css';

import Header from './components/header.js';
import Footer from './components/footer.js';

import Home from './pages/home.js';
import Services from './pages/services.js';
import Contact from './pages/contact.js';
import Portfolio from './pages/portfolio.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>

        <Home/>
        <Portfolio/>
        <Services/>
        <Contact/>
        
        <Footer/>
      </header>
    </div>
  );
}

export default App;
