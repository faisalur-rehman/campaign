import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/",
});

const config = {
  headers: {
    Authorization: localStorage.getItem("token"),
  },
};

export function loginUser(data) {
  return api.post(`/auth/login`, { ...data });
}

export function CreateCampaign(data) {
    return api.post(`/campagin/create-campagin`, { ...data });
  }

  export function CreateUser(data) {
    return api.post(`/auth/register`, { ...data });
  }

  export function UserDetails(data) {
    return api.get(`/user/all`, { ...data });
  }
  
   export function GetCampaign(data) {
    return api.get(`campagin/get-campagin `, { ...data });
  }
  
  
  export function Getid(data) {
    // console.log("data",data);
    return api.get(`/user/${data.id} `, { ...data });
  }
  
  export function UpdateUser(data) {
    return api.put(`/user/update/${data.id}`, { ...data });
  }
   
  export function DeleteUser(data) {
    return api.delete(`/user/delete/${data.id}`, {
     
      data: {
        id: data.id,
      },
    });;
  }
   
  export function CreateCompany(data) {
    console.log("data",data)
    return api.post(`/company/create/`, { ...data });
  }