import Home from "./Components/Home";
import Header from "./Components/Header";
import Buttons from "./Components/Buttons";
import RecipeCards from "./Components/RecipeCards";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="font-fredoka bg-slate-300">
      <Header />
      <Home />
      <RecipeCards />
      <Buttons />
    </div>
  );
}

export default App;
