import axios from "axios";

const BASE_URL = "https://5fc9346b2af77700165ae514.mockapi.io";

export const getAction = async (url = "/products") => {
  return await axios.get(BASE_URL + url);
};
