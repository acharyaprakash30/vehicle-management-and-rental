import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { store } from "../src/redux/store";
import { Provider } from "react-redux";
// import { getTotals } from "./redux/features/Cart/cartSlice";
import { ConfigProvider } from "antd";
import ne_NP from "antd/locale/fr_FR";

const root = ReactDOM.createRoot(document.getElementById("root"));
// store.dispatch(getTotals());
root.render(
  <Provider store={store}>
    <ConfigProvider locale={ne_NP}>
      <BrowserRouter>
        <App />
        <Toaster
          position='top-right'
          toastOptions={{
            duration: 4000,
            style: {
              borderRadius: "8px",
            },
          }}
        />
      </BrowserRouter>
    </ConfigProvider>
  </Provider>
);


