import react,{useEffect} from "react"
import "./user.css"
import axios from "axios";
import { useHistory } from "react-router";
import Layout from "../components/Layout/Layout";
import useApi from "../hooks/useApi";
import * as api from "../api/api"
import userEvent from "@testing-library/user-event";
import UserScreen from "./userScreen";
const UserList = () => {
    const history = useHistory();
    const request = useApi(api.UserDetails)
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
// console.log(data.users)
// console.log(request.data.users)
    return (  
    <UserScreen
    data={request.data && request.data.users}
/>);
}
 
export default UserList;