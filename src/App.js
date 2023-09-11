import React from 'react';
import Feedbackform from './components/Feedbackform';
import RegisterPage from './components/Register';
import Session from './components/Session';
import Nextpage from './components/Nextpage';
import Task from './components/Task'
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";

function App() {
  return (
    // <Router>
    //   <Switch>
    //     <Route path="/session" exact component={Session} />
    //     <Route path="/feedback" exact component={Feedbackform} />
    //     <Route path="/nextpage" exact component={Nextpage}/>
    //     <Route path="/task" exact component={Task} />
    //   </Switch>
    // </Router>
     <Session /> 
  );
}

export default App;



