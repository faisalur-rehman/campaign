import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/",
});

const config = {
  headers: {
    Authorization: localStorage.getItem("token"),
    
  },
  
};
console.log("token",config.headers)
export function loginUser(data) {
  return api.post(`/auth/login`, { ...data });
}

export function CreateCampaign(data) {
    return api.post(`/campagin/create-campagin`, { ...data }, config);
  }

  export function addAction(data) {
    // console.log("create",data)
    return api.post(`/campagin/create-action`, { ...data },config);
  }

  export function CreateUser(data) {
    return api.post(`/auth/register`, { ...data });
  }

  export function UserDetails() {
    // console.log("object",data)
    return api.get(`/user/all`, config);
  }
  
  export function allCompany() {
    // console.log("object",data)
    return api.get(`/company/all`, config);
  }
   export function GetCampaign(data) {
     console.log('get ',data);
    return api.post(`campagin/get-campagin `, {company:data }, config);
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
    return api.post(`/campagin/marketing-plan`, {...data}, config);
  }
  
  export function UpdateUser(data) {
    return api.put(`/user/update/${data.id}`, { ...data }, config,{
     
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
    });;
  }
   
  export function CreateCompany(data) {
    console.log("data",data)
    return api.post(`/company/create/`, { ...data },config);
  }