import { Card } from "./Components/Card";
import { PokemonContextProvider } from "./contexts/PokemonContextProvider";
import "./Style/App.scss";

export const App = () => {
  return (
    <PokemonContextProvider>
      <div className="app">
        <Card />
      </div>
    </PokemonContextProvider>
  );
};
