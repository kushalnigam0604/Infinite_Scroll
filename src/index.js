import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { combineReducers, createStore , applyMiddleware ,compose} from "redux";
import createSagaMiddleware from 'redux-saga';
import myFirstReducer from './redux/reducer'
import mySaga from './redux/sagas';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

    const sagaMiddleware = createSagaMiddleware();

    const enhancer = composeEnhancers(
      applyMiddleware(sagaMiddleware),
    );

const rootReducer = combineReducers({myFirstReducer});
const store = createStore(rootReducer , enhancer);
store.subscribe(()=>{ store.getState()})

sagaMiddleware.run(mySaga);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store}>
      <App />   
    </Provider>
  </>
);
reportWebVitals();
