import { API } from "../../config";
import axios from "axios";

export const signup = (user) => {
  return axios({
    url: `${API}/auth/register`,
    data: user,
    method: "POST",
  });
  // return axios.post(`${API}/auth/register`, {
  //   //first argument is URL we defined in back end and the second argument is the object you get(method, headers and so on)
  //   method: "POST",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(user),
  // }).then((response) => {
  //   return response.json();
  // });
};

export const signin = (user) => {
  return fetch(`${API}/auth/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }).then((response) => {
    return response.json();
  });
};
