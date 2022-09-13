import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/header/header";
import About from "../pages/about/about";
import Footer from "../components/footer/footer";
import Home from "../pages/home/home";
import Recipe from "../pages/recipe/recipe";
import Todos from "../pages/todos/todos";

function Routing(props) {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/about"} element={<About />} />
          <Route path={"/home"} element={<Home />} />
          <Route path={"/recipe"} element={<Recipe />} />
          <Route path={"/todos"} element={<Todos />} />
          <Route path={"/users/:id"} element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default Routing;
