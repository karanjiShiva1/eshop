
import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'



function App() {
  return (
    <div className="App">
      
        <Router>
        <Header/>
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home/>
          </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
