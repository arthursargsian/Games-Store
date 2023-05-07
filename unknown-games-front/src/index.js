import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./assets/style/style.scss";
import "./assets/style/media.scss";
import "./assets/style/dashboard.scss";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import reducers from "./redux/reducers/index";
import Modal from "react-modal";

const store = configureStore({
    reducer: reducers,
    devTools: true,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
Modal.setAppElement(document.body);

root.render(
    <>
        <Provider store={store}>
            <App/>
        </Provider>
    </>
);

reportWebVitals();
