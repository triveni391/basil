import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import Header from './components/home/header';
import Home from './pages/home';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Recepie from './pages/recepie';

function App() {
  const [active, setActive] = useState(0)
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/:id">
            <Recepie />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
