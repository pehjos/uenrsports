import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./stateprovider";
import { TranslatorProvider, useTranslate } from "react-translate"
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { QueryClient, QueryClientProvider } from "react-query";

import { reducers } from './reducers';
import 'bootstrap/dist/css/bootstrap.min.css';
const queryClient = new QueryClient();
const store = createStore(reducers, compose(applyMiddleware(thunk)));
let translations = {
  locale: "fr",
  Home: {
    "HELLO": "Helloworld!"
  }
};
 

ReactDOM.render(
  <React.StrictMode>

      <StateProvider initialState={initialState} reducer={reducer}>
      <QueryClientProvider client={queryClient}>
      <Provider store={store}>
      <TranslatorProvider translations={translations}>   
    <App />
    </TranslatorProvider>
    </Provider>
    </QueryClientProvider>
    </StateProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
