// import logo from './logo.svg';
import { BrowserRouter } from 'react-router-dom';
//import './App.css';
import Header from './Components/Header';
import Routers from './Components/Routers';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      
      <Header/>
      <Routers/>
      <Footer/>
     
    </div>
  );
}

export default App;
