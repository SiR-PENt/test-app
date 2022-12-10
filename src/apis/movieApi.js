import axios from 'axios';

const req =  axios.create({
  baseURL: "https://www.omdbapi.com",
  timeout: 3000,
}
);

export default req;
export const APIKey = "4b4fa65d";