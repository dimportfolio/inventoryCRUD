import axios from "axios";
//exporting new instance of axios, configured baseURL to be the following
export default axios.create({
  baseURL: "http://localhost:8080/api"
});