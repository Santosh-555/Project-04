import axios from "axios";
import { Base_URL } from "./Constants";

const config = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

export const CallAPI = async (resource) => {
  const { data } = await axios.get(`${Base_URL}/${resource}`, config);
  return data;
};
