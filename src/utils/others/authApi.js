import { API } from "../../config";
import axios from "axios";

export const signup = (user) => {
  return axios({
    url: `${API}/auth/register`,
    data: user,
    method: "POST",
  });
};

export const signin = (user) => {
  return axios({
    url: `${API}/auth/login`,
    data: user,
    method: "POST",
  });
};
