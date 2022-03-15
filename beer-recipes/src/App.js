import Home from "./Components/Home";
import Header from "./Components/Header";
import RecipeCards from "./Components/RecipeCards";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="font-fredoka bg-white">
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} /> 
        <Route path='recipe-card' element={<RecipeCards />} />
      </Routes>
     
    </div>
  );
}

export default App;
