import { API } from "../../config";

export const getAllParcels = () => {
  return fetch(`${API}/parcels`, {
    method: "GET",
  }).then((response) => {
    return response.json();
  });
};

export const createParcel = (code) => {
  return fetch(`${API}/parcels`, {
    //first argument is URL we defined in back end and the second argument is the object you get(method, headers and so on)
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(code),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
