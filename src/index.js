import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { store } from "./helpers/redux-store";
import App from './main/app/App';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
