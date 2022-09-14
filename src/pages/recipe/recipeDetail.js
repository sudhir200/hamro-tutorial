import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMealById, getMealsByCategory } from "../../api/recipes/recipes";
import RecipeCategories from "../../components/recipe/recipeCategories";
import "./style.css";
function RecipeDetail(props) {
  const { id } = useParams();
  const [recipesByCategories, setRecipes] = React.useState([]);
  const [selectedCategory, setSelectedCategory] = React.useState(id);
  useEffect(() => {
    getMealsByCategory(selectedCategory).then((res) => {
      setRecipes(res?.meals);
    });
  }, [selectedCategory]);

  return (
    <div className={"recipe-detail-wrapper"}>
      <RecipeCategories
        selectedCategory={selectedCategory}
        handleCategorySelection={(category) => {
          setSelectedCategory(category);
        }}
      />
    </div>
  );
}

export default RecipeDetail;
