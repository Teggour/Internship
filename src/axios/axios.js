import axios from "axios";

const instance = axios.create({
  baseURL: "https://nodejs-test-api-blog.herokuapp.com/api/v1",
  timeout: 2000,
  headers: { "Content-type": "application/json" },
});

instance.interceptors.request.use((instance) => {
  const jwtToken = localStorage.getItem("jwtToken");
  if (jwtToken) {
    instance.headers["Authorization"] = `Bearer ${jwtToken}`;
  }
  return instance;
});

export default instance;
