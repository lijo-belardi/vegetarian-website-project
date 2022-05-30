import { PopularVegetarianProvider } from "./context/popularVegetariancontext";
import Home from "./pages/Home";

function App() {
  return (
    <PopularVegetarianProvider>
      <div className="App">
        <Home />
      </div>
    </PopularVegetarianProvider>
  );
}

export default App;
