import axios from "axios";

export function getRandomMeal() {
  return new Promise((resolve, reject) => {
    axios("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => {
        resolve(res?.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
export function getAllMealCategories() {
  return new Promise((resolve, reject) => {
    axios("https://www.themealdb.com/api/json/v1/1/categories.php", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        resolve(res?.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
export function getMealByName(name) {
  return new Promise((resolve, reject) => {
    axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
      .then((r) => {
        resolve(r);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
export function getMealById(id) {
  return new Promise((resolve, reject) => {
    axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((r) => {
        resolve(r);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function getMealsByCategory(cat) {
  return new Promise((resolve, reject) => {
    axios(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`)
      .then((res) => {
        resolve(res?.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
