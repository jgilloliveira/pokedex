import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import PokemonDetails from "./pages/PokemonDetails.tsx";
import { ROUTES } from "./utils/constants.ts";
import { Provider } from "react-redux";
import { store } from "./storage/pokemon-storage.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {/* <Route path={"/pokemon/:id"} element={<PokemonDetails />} /> */}
          <Route path={"/pokemon/:id"} element={<PokemonDetails />} />
          <Route path={ROUTES.HOME} element={<App />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
