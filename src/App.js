import { PopularVegetarianProvider } from "./context/popularVegetariancontext";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Recipe from "./pages/Recipe";

function App() {
  return (
    <PopularVegetarianProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe/:name" element={<Recipe />} />
          </Routes>

        </div>
      </Router>
    </PopularVegetarianProvider>
  );
}

export default App;
