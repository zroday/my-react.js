import logo from './logo.svg';
import './App.css';
import Layout from "./components/Layout";
import {Router, route, IndexRoute, hashHistory} from 'react-router';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>Hello World</h1>
        <Layout/>
      </header>
      
    </div>
    
    
  );
}



export default App;
