import './App.css';
import Header from './components/header/Header'
import Splash from './components/splash/Splash'
import Repairs from './components/repairs/Repairs';
import Pricing from './components/pricing/Pricing';
import Invoicing from './components/invoicing/Invoicing';
import Pickup from './components/pickup/Pickup';
import Warranty from './components/warranty/Warranty';
import About from './components/about/About';
import Fab from './components/fab/Fab';

function App() {
  return (
    <div className="App">
      <Fab />
      <Header />
      <Splash />
      <Repairs />
      <Pricing />
      <Invoicing />
      <Pickup />
      <Warranty />
      <About />
    </div>
  );
}

export default App