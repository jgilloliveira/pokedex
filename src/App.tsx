import "./App.css";
import Header from "./components/layouts/Header";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header onSearch={console.log} />
      <Home />
      {/* <PokemonDetails /> */}
    </>
  );
}

export default App;
