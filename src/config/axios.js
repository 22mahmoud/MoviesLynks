import axios from "axios";

import { MOVIE_DB_API } from "./contants";

const { KEY, BASE_URL } = MOVIE_DB_API;

axios.defaults.baseURL = BASE_URL;

axios.defaults.params = {};
axios.defaults.params["api_key"] = KEY;

export default axios;
