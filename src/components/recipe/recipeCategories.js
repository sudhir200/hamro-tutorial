import React from "react";
import { useEffect } from "react";
import { getAllMealCategories } from "../../api/recipes/recipes";
import { useNavigate } from "react-router-dom";
import "./style.css";
function RecipeCategories(props) {
  const navigate = useNavigate();
  const [categories, setCategories] = React.useState([]);
  useEffect(() => {
    getAllMealCategories()
      .then((res) => {
        setCategories(res?.categories);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div className={"categories-wrapper"}>
        {categories.map((item) => (
          <button
            key={item?.idCategory}
            onClick={() => {
              props.handleCategorySelection(item?.strCategory);
              navigate(`/recipes/${item?.strCategory}`);
            }}
            className={
              item?.strCategory === props?.selectedCategory
                ? "recipe-category selected"
                : "recipe-category"
            }
          >
            {item.strCategory}
          </button>
        ))}
      </div>
    </div>
  );
}

export default RecipeCategories;
