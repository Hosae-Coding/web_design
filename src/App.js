import Home from './pages/home/Home';
import Topbar from './components/topbar/Topbar';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Settings from './pages/setting/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
   const user = false;
   return (
      <Router>
         <Topbar />
         <Switch>
            <Route exact="/" path="/">
               <Home />
            </Route>
            <Router path="/register">{user ? <Home /> : <Register />}</Router>
            <Router path="/login">{user ? <Home /> : <Login />}</Router>
            <Router path="/write">{user ? <Write /> : <Register />}</Router>
            <Router path="/settings">{user ? <Settings /> : <Login />}</Router>
            <Router path="/post:postId">
               <Single />
            </Router>
         </Switch>
      </Router>
   );
}

export default App;
