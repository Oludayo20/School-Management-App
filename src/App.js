import './App.css';
import LandingPage from './pages/LandingPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/studentLogin">
          <SignIn />
        </Route>
        <Route path="/teacherLogin">
          <SignIn />
        </Route>
        <Route path="/adminLogin">
          <SignIn />
        </Route>
        <Route path="/studentRegister">
          <Register />
        </Route>
        <Route path="/teacherRegister">
          <Register />
        </Route>
        <Route path="/adminRegister">
          <Register />
        </Route>
        <Route path="+">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
