import React from 'react'
import {useHistory} from "react-router-dom"
import Layout from "../components/Layout/Layout";
import {Link} from "react-router-dom"

function UserScreen({data, deleteUser}) {
const history = useHistory();
// function handleClick (){
//   history.push("/Create-User")
// }
// console.log(data)
async function edit (){
  history.push("/User/:id")

}
    return (
        <div>
            <Layout><section class="purchase_product_history" id="all_product_listing"> 
    <div class="admin_container">
          <div class="purchase_product_history_table">
         
           <strong>User List:</strong>    
           <div class="table_wrapper_scroll_x my_custom_scrollbar">     
     <table>
      <tr>
                  
         <th>user name</th>
         <th>company</th>
         <th>Password</th>
         <th>edit</th>
         <th>Delete</th>
         
         
       </tr>
       {data && data.map(dt=>(
       <>
      <tr>

      
       <td>{dt.username}</td>
       <td>{dt.company}</td>
       <td>{dt.password}</td>
       <Link to={`/User/${dt._id}`}>Edit</Link>  
       <td>    
       <button onClick={()=>deleteUser(dt._id)} >Delete</button>
       </td>
      
         {/* <td><a><i class="fas fa-edit"></i></a></td>
         <td><a><i class="fas fa-trash-alt"></i></a></td> */}
       </tr>
       </>
      ))}  
     </table>
  </div>
     </div>
     </div>
  </section>
  </Layout>
        </div>
    )
}

export default UserScreen
