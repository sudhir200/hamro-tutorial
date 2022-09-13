import React, { useEffect } from "react";
import "./style.css";
function Recipe(props) {
  const [recipes, setRecipes] = React.useState([]);
  const [fetching, setFetching] = React.useState(true);
  useEffect(() => {
    if (recipes.length) {
      return;
    }
    fetchDrinks().then((res) => {
      setRecipes(res?.drinks);
      setFetching(false);
    });
  }, []);
  const fetchDrinks = async () => {
    let rawData = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    return rawData.json();
  };
  return (
    <div className={"recipe-wrapper"}>
      {fetching
        ? ""
        : recipes?.map((item, index) => (
            <div key={index} className="drinkWrapper">
              <fieldset>
                <legend>
                  <h1>{item.strDrink}</h1>
                </legend>
                <img alt={""} loading="lazy" src={item.strDrinkThumb} />
                <div className="drinkInstruction">{item?.strInstructions}</div>
                <h3 style={{ margin: 0 }}>Ingredients</h3>
                <div className={"ingrWrapper"}>
                  <div>{item?.strMeasure1 || ""}</div>
                  <div>{item?.strMeasure2 || ""}</div>
                  <div>{item?.strMeasure3 || ""}</div>
                  <div>{item?.strMeasure4 || ""}</div>
                  <div>{item?.strMeasure5 || ""}</div>
                  <div>{item?.strMeasure6 || ""}</div>
                </div>
              </fieldset>
            </div>
          ))}
    </div>
  );
}

export default Recipe;
