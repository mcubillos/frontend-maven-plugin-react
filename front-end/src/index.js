import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './pages/home';
import Login from './pages/login';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={App}/>
            <Route exact path="/ffg-diagnose" component={Home}/>
            <Route exact path="/login" component={Login}/>
        </div>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
