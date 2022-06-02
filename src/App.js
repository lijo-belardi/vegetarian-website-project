import { PopularVegetarianProvider } from "./context/popularVegetariancontext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import Searched from "./pages/Searched";
import { Search } from "@mui/icons-material";

function App() {
  return (
    <PopularVegetarianProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe/:name" element={<Recipe />} />
            <Route path="/searched/:search" element={<Searched />} />
          </Routes>

        </div>
      </Router>
    </PopularVegetarianProvider>
  );
}

export default App;
