import { API } from "../../config";

export const getAllParcels = () => {
  return fetch(`${API}/parcel`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
