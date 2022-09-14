import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/header/header";
import About from "../pages/about/about";
import Footer from "../components/footer/footer";
import Home from "../pages/home/home";
import Recipe from "../pages/recipe/recipe";
import Todos from "../pages/todos/todos";
import RecipeDetail from "../pages/recipe/recipeDetail";

function Routing(props) {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path={"/about"} element={<About />} />
          <Route exact path={"/home"} element={<Home />} />
          <Route exact path={"/recipe"} element={<Recipe />} />
          <Route exact path={"/todos"} element={<Todos />} />
          <Route exact path={"/recipes/:id"} element={<RecipeDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default Routing;
