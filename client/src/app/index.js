import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from '../components/common/Footer';
import * as ROUTES from '../constants/routes';

function App() {
  return (
    <div className="App">
      <Footer />
      <h1>Welcome to Art Gallery websites</h1>
      <Router>
        <Switch>
          <Route exact path={ROUTES.HOME_PAGE} component={Footer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
