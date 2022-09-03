// let domain = process.env.NEXT_PUBLI_IMAGE_DOMAIN
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

let CONSOLELOG_ID =
  process.env.NEXT_PUBLIC_CONSOLELOG_ID || publicRuntimeConfig.CONSOLELOG_ID;

export const commifyNumber = (x) => {
  if (!x) {
    return "";
  }
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const unCommifyNumber = (x) => {
  return x.replace(/\,/g, "");
};

export const capitalizeInitial = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
