import React from "react";
import "./style.css";
import RecipeCategories from "../../components/recipe/recipeCategories";

function Recipe(props) {
  const [selectedCategory, setSelectedCategory] = React.useState("");
  return (
    <div className={"recipe-wrapper"}>
      <RecipeCategories
        selectedCategory={selectedCategory}
        handleCategorySelection={(category) => {
          setSelectedCategory(category);
        }}
      />
    </div>
  );
}

export default Recipe;
