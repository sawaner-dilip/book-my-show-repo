//import logo from './logo.svg';
import './App.css';
import DefaultHOC from './HOC/Deafult.HOC';
//import comp from './layouts/Default.layout';
import Nav from './components/Navbar/Navbar.components'
import {Route} from "react-router-dom";
function App() {
  return (
    <>
    <DefaultHOC path="/" exact component={Nav}/>
    
    </>
    
  );
}

export default App;
