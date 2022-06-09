//import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min";

import App from "./App";
import Firebase from "./utils/Firebase"
import FirebaseContext from "./utils/FirebaseContext"

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FirebaseContext.Provider>
);
