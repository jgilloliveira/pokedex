import "./App.css";
import MainLayout from "./components/layouts/MainLayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <MainLayout>
      <Home />
      {/* <PokemonDetails /> */}
      {/* <NotFound /> */}
    </MainLayout>
  );
}

export default App;
