import axios from "axios";
let base_url = "https://reqrest.in";
export function createUser(data) {
  return new Promise((resolve, reject) => {
    axios({
      url: `${base_url}/api/users`,
      method: "post",
      data: data,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
export function getUsers(page) {
  return new Promise((resolve, reject) => {
    axios({
      url: `${base_url}/api/users?page=${page}`,
      method: "get",
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
export function getSingleUser(id) {
  return new Promise((resolve, reject) => {
    axios({
      url: `${base_url}/api/users/${id}`,
      method: "get",
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
