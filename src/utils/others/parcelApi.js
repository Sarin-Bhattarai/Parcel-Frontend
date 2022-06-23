import { API } from "../../config";
import axios from "axios";

/* For getting all the parcels*/
export const getAllParcels = () => {
  return fetch(`${API}/parcels`, {
    method: "GET",
  }).then((response) => {
    return response.json();
  });
};

/* For creating new parcels*/
export const createParcel = (payload) => {
  console.log(payload);
  return axios({
    url: `${API}/parcels`,
    method: "POST",
    data: payload,
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

/*For updating parcel */
export const updateParcel = (id, parcel) => {
  return fetch(`${API}/parcels/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(parcel),
  }).then((response) => {
    return response.json();
  });
};

export const deleteParcel = (id) => {
  return fetch(`${API}/parcels/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response.json();
  });
};
