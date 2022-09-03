import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
let API_URL = process.env.NEXT_PUBLIC_API || publicRuntimeConfig.API;
console.log(API_URL);
export const FilterMaterplanPropertyTypeEndPoint_URL = `${API_URL}/masterplan2dfilterpropertytype/`;
export const MasterPlan2dEndPoint_URL = `${API_URL}/masterplan2d/owest`;
export const FilterPropertiesAndPhases = `${API_URL}/filter/2dmodeling`;
