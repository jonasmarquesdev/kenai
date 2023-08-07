import './App.css';

import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Populares from './components/Populares';
import Footer from './components/Footer';

function App() {
  return (
    <div className="background">
      <Nav />
      <Banner />
      <Populares />
      <Footer />
    </div>
  );
}

export default App;
