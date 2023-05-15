import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import NavBar from "./component/layout/NavBar";
import Home from "./component/pages/Home";
import PageNotFound from './component/pages/PageNotFound';
import Addusers from './component/users/Addusers';
import Editusers from './component/users/Editusers';
import User from './component/users/User';


function App() {
  return (

<Router>
  <div className="App">

  
  <NavBar></NavBar>

  <Switch>

  <Route exact path="/" component={Home}></Route>
  <Route exact path="/contact" component={Contact}></Route>
  <Route exact path="/about" component={About}></Route>
  <Route exact path="/add/user" component={Addusers}></Route>
  <Route exact path="/edit/user/:id" component={Editusers}></Route>
  <Route exact path="/user/:id" component={User}></Route>
  <Route exact path="*" component={PageNotFound}></Route>
  
  </Switch>

  </div>
 </Router>

  );
}

export default App;
