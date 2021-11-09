import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
// import Routes from './Components/Routes/RoutesComponent';
import RoutesComponent from './Components/Routes/RoutesComponent';

function App() {
  return (
    <div>
      <Header/>
      {/* Main Content */}
      <RoutesComponent/>
      
    </div>
  );
}

export default App;
