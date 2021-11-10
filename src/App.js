import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './components/Login/Login'
import Registro from './components/Registro/Registro'
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/registro">
            <Registro />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
