import React from 'react';
import Header from './componentes/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from './componentes/SearchPage';
import Home from './componentes/Home';
import Footer from './componentes/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/search'>
          <SearchPage />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
