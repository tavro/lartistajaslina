import logo from './logo.svg';
import './App.css';

import Header from './components/header.js';
import Footer from './components/footer.js';

import Home from './pages/home.js';
import Contact from './pages/contact.js';
import Portfolio from './pages/portfolio.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>

        <Home/>
        <Portfolio/>
        <Contact/>
        
        <Footer/>
      </header>
    </div>
  );
}

export default App;
