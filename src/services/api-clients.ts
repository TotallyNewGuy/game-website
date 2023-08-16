import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "fda2d886853a4d878515c81a84579afe",
  },
});
