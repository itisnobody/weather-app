import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "normalize.css";

import './index.scss';
import store from "./store";
import { WeatherServiceContext } from "./components/services-context";
import { WeatherApi } from "../src/services";
import ErrorBoundary from "./components/error-boundary";
import App from './components/app';

const weatherApi = new WeatherApi();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <WeatherServiceContext.Provider value={weatherApi} >
          <Router>
            <App />
          </Router>
        </WeatherServiceContext.Provider>
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
