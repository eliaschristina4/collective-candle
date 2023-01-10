// import "./App.css";

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import Shop from './components/Shop';
import Contact from './components/Contact';

function App() {

    let Component;

    // if the pathname = any of these options, let the Component variable  = relevant component
    switch ( window.location.pathname ) {
        case '/':
          Component = Home
          break;
        case '/shop':
          Component = Shop
          break;
        case '/contact': 
          Component = Contact
          break;
        default: console.log('something\'s up with the switch case')
    }

    return (
      <div className='App'>

        <NavBar />

        <div className='main-container'>
          {/* where we render the component that matches the pathname */}
          <Component />
        </div>

        <Footer />
        
      </div>
  );
}

export default App;