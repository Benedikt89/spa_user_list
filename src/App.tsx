import React from 'react';
import './App.css';
import {HashRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store";
import Main from "./Main";

require('./index.less');

const App: React.FC = () => {
  return (
    <Router>
      <Provider store={store}>
        <Main/>
      </Provider>
    </Router>
  );
};


export default App;
