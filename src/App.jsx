import './App.css';

import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Populares from './components/Populares';

function App() {
  return (
    <div className="background">
      <Nav />
      <Banner />
      <Populares />
    </div>
  );
}

export default App;
