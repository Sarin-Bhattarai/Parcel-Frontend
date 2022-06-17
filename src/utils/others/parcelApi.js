import { API } from "../../config";

/* For getting all the parcels*/
export const getAllParcels = () => {
  return fetch(`${API}/parcels`, {
    method: "GET",
  }).then((response) => {
    return response.json();
  });
};

/* For creating new parcels*/
export const createParcel = (code) => {
  const data = { code };
  console.log(data);
  return fetch(`${API}/parcels`, {
    //first argument is URL we defined in back end and the second argument is the object you get(method, headers and so on)
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => {
    return response.json();
  });
};

/* For getting single parcel*/
export const getSingleParcel = (id) => {
  return fetch(`${API}/parcels/${id}`, {
    method: "GET",
  }).then((response) => {
    return response.json();
  });
};
