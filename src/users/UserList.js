import react,{useEffect} from "react"
import "./user.css"
import axios from "axios";
import { useHistory } from "react-router";
import Layout from "../components/Layout/Layout";
import useApi from "../hooks/useApi";
import * as api from "../api/api"
import userEvent from "@testing-library/user-event";
import UserScreen from "./userScreen";
// import { useParams } from "react-router";
const UserList = () => {
    // const { id } = useParams();
    const history = useHistory();
    const request = useApi(api.UserDetails)
    const deleteUser=useApi(api.DeleteUser)
    useEffect(() => {
        async function fetchData() {
        try {
            const { data } = await request.request();
        //    data = request.data.users
            // console.log(data.users)
          } catch (error) {}
         
         
        
    }
    fetchData()
    }, [])


    async function handleDelete(id){
        // alert (id);
        console.log(id)
       
        try {
            const {data}= await deleteUser.request({id});
         //   localStorage.setItem("token", data.token);
            window.location.reload()
             //  message=data.message;
         //   history.push("/");
         } catch (error) {console.log(error.response)}
      }

// console.log(data.users)
// console.log(request.data.users)
    return (  
    <UserScreen
    data={request.data && request.data.users}
    deleteUser={handleDelete}
/>);
}
 
export default UserList;