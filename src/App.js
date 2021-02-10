import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import ToDoPage from './Pages/ToDoPage';
import ShowPage from './Pages/showPage';

//Styles
import './App.css';
import './styles/index.css';
import './styles/form.css';
import './styles/card.css';
import './styles/delete.css';
import './styles/showPage.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <ToDoPage />
          </Route>

          <Route path='/:id'>
            <ShowPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
