import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.scss';
import {Header} from './components/Header'
import {Home} from './components/Home'
import {Poll} from './components/Poll'
function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <main>
          <div className="ads"></div>
            <div className="home">
            <Switch>
                <Route path="/" exact><Home/></Route>
                <Route path="/polls/:pollId" exact><Poll/></Route>
                <Route>404 Not Found</Route>
            </Switch>
            </div>
          <div className="ads"></div>
        </main>
      </Router>
      
    </div>
    
  );
}

export default App;