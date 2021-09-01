import axios from "axios";

const DEV_URL = "http://localhost:8000";
const PROD_URL = "https://campaign-tool-restapi.herokuapp.com/";
const api = axios.create({
  baseURL: DEV_URL,
});

const config = {
  headers: {
    Authorization: localStorage.getItem("token"),
  },
};
console.log("token", config.headers);
export function loginUser(data) {
  return api.post(`/auth/login`, { ...data });
}

export function CreateCampaign(data) {
  return api.post(`/campaign/add`, { ...data }, config);
}

export function addAction(data) {
  return api.post(`/campagin/create-action`, { ...data }, config);
}

export function CreateUser(data) {
  return api.post(`/auth/register`, { ...data });
}

export function UserDetails() {
  return api.get(`/campaign/get-all-users`, config);
}

export function getuserCompany() {
  return api.get(`/campaign/get-user-company`, config);
}
export function allCompany() {
  return api.get(`/company/all`, config);
}

export function UpdateCompany(data) {
  return api.post(`/company/update/${data.id}`, { ...data }, config, {
    data: {
      id: data.id,
    },
  });
}
export function downloadExcel(data) {
  console.log("download data", data);
  return api.post(`campaign/get-excel`, { ...data }, config);
}

export function getInProgressCampaign(data) {
  console.log("company data", data);
  return api.post(`/campaign/get-all-inprogress-campaigns/${data}`, {}, config);
}
export function getCompletedCampaign(data) {
  console.log("company data", data);
  return api.post(`/campaign/get-all-completed-campaigns/${data}`, {}, config);
}
export function getCampaignByid(data) {
  // console.log("data",data);
  return api.get(`/campagin/detail/${data.id}`, config);
}

export function Getid(data) {
  // console.log("data",data);
  return api.get(`/user/${data.id}`, config);
}

export function marketingPlan(data) {
  // console.log("data",data);
  return api.post(`/campaign/get-by-year`, { ...data }, config);
}

export function UpdateUser(data) {
  return api.put(`/user/update/${data.id}`, { ...data }, config, {
    data: {
      id: data.id,
    },
  });
}

export function DeleteUser(data) {
  return api.delete(`/user/delete/${data.id}`, config, {
    data: {
      id: data.id,
    },
  });
}
export function deleteCampaign(data) {
  console.log("data", data);
  return api.delete(`/campaign/delete/${data}`, config);
}
export function CreateCompany(data) {
  console.log("data", data);
  return api.post(`/campaign/add-user-company`, { ...data }, config);
}
// export function getSingleCampaign(data) {
//   console.log("data", data);
//   return api.post(`/campagin/get-single/`, { ...data }, config);
// }
export function UpdateCampaign(data) {
  return api.patch(`/campaign/update/${data.id}`, { ...data.campaign }, config);
}
export function getUserCompany() {
  return api.get(`/campaign/get-user-company`, config);
}
export function getSingleCompaign(data) {
  return api.get(`/campaign/get-campaign/${data}`, config);
}
