import axios from "axios";

export function getAllCategories() {
  return new Promise((resolve, reject) => {
    axios(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then((res) => {
        resolve(res?.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function getMealsByCategories(category) {
  return new Promise((resolve, reject) => {
    axios(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then((res) => {
        resolve(res?.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
