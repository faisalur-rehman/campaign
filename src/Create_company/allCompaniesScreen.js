import { Field } from "formik";
import React from "react";
import AppForm from "../components/AppForm/AppForm";
import Layout from "../components/Layout/Layout";

const DetailForm = ({ initialValues, handleSubmit, data}) => {
  return (
    <AppForm initialValues={initialValues} handleSubmit={handleSubmit} data={data}>
      <CompanyField data={data}/>
    </AppForm>
  );
};

export default DetailForm;

function CompanyField({data} ) {
    console.log("error", data)

  return (
    <div>
    <Layout><section className="purchase_product_history" id="all_product_listing"> 
<div className="admin_container">
  <div className="purchase_product_history_table">
 
   <strong>User List:</strong>    
   <div className="table_wrapper_scroll_x my_custom_scrollbar">     
<table>
<tr>
          
 <th>Company name</th>
 <th>edit</th>
 <th>Delete</th>
 
 
</tr>
{data && data.map((data,index)=>(

// ))}
<>
<tr>


<td>{data.company}</td>
{/* <td>  <Link className="button"to={`/user-company/:${dt._id}`}><button>+ </button></Link>__{dt.company}</td> */}
<td>{data.company}</td> 
{/* <td><Link to={`/User/${dt._id}`}><button className="button">Edit</button></Link></td>   */}
<td>    
<button className="button"  >Delete</button>
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
  );
}
