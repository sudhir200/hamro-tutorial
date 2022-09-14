import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMealById, getMealsByCategory } from "../../api/recipes/recipes";
import RecipeCategories from "../../components/recipe/recipeCategories";
import "./style.css";
function RecipeDetail(props) {
  const { name } = useParams();
  const [recipesByCategories, setRecipes] = React.useState([]);
  const [selectedCategory, setSelectedCategory] = React.useState(name);
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
      <div
        style={{
          gridTemplateColumns: "repeat(4,1fr)",
          margin: "10px 0px",
          display: "grid",
          gap: 10,
        }}
      >
        {recipesByCategories.map((item) => (
          <div
            style={{
              border: "1px solid #ccc",
              display: "grid",
              gap: 2,
              borderTop: 10,
            }}
          >
            <img
              alt={""}
              width={"100%"}
              height={"auto"}
              style={{ borderTop: 10 }}
              src={item?.strMealThumb}
            />
            <div style={{ display: "grid", padding: 10 }}>
              <span>{item.strMeal}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeDetail;
