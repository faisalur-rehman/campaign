import React,{useEffect} from "react";
// import { useHistory } from "react-router-dom";
import useApi from "../hooks/useApi";
import * as api from "../api/api";
import { useParams } from "react-router-dom"
import DetailForm from "./allCompaniesScreen";
const initialValues = {
name: "",
};

const CompanyDetail = () => {
  // const history = useHistory();
    const  request  = useApi(api.allCompany);
    // const request = useApi(api.UserDetails)
    // const deleteUser=useApi(api.DeleteUser)
    useEffect(() => {
        async function fetchData() {
        try {
        
            const { data } = await request.request();
        // data = request.data.users
            // console.log("company",data)
          } catch (error) {} 
        
    }
    fetchData()
    }, [])
    console.log("company",request.data)

    // async function handleDelete(id){
    //     // alert (id);
    //     console.log(id)
       
    //     try {
    //         const {data}= await deleteUser.request({id});
    //      //   localStorage.setItem("token", data.token);
    //         window.location.reload()
    //          //  message=data.message;
    //      //   history.push("/");
    //      } catch (error) {console.log(error.response)}
    //   }

  return (
    <div>
      
          <DetailForm
          data={request.data && request.data}
        // handleSubmit={handleSubmit}
        initialValues={initialValues}
        // error={error}
      />
    </div>
  );
};

export default CompanyDetail;
