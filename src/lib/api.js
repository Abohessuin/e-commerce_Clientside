import axios from "axios";
import getConfig from "next/config";
// const { publicRuntimeConfig } = getConfig();
// let API_URL = process.env.NEXT_PUBLIC_API || publicRuntimeConfig.API;

export const getproductsSearchEndPoint = () => {
  return "https://stormy-scrubland-34211.herokuapp.com/api/products/search";
};
