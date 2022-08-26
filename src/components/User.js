import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import {  Link} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import UserContext from './userContext';


const User = () => {
    // let context = useContext(UserContext);

    const [users,setUsers] = useState([]);
    const [isloading,setLoading] = useState(false)
    

    useEffect(()=>{
        loading();
    },[]);


    const loading = async ()=>{
           
        try {
            setLoading(true)
            let user = await axios.get("https://62a9fa733b314385543fa2da.mockapi.io/users");
        setUsers(user.data);
        setLoading(false)
        } catch (error) {
            console.log(error);
        }
        
    }

    const handleDelete = async(e)=>{
     
         try {
            
            let user = await axios.delete(`https://62a9fa733b314385543fa2da.mockapi.io/users/${e.id}`);

           
            if (user.status === 200) {

                let x = users.findIndex((item)=> item.id === e.id )
                users.splice(x,1)
                 setUsers([...users]);
                 
                toast.success("User deleted successfully");

                
              } else {
                toast.warn("User deleted falied");
              }
         } catch (error) {
            console.log(error);
        
         }
    }
  return (
    <div className="container-fluid m-0">
   <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">User</h1>
                        <Link  to= "/portal/create-user" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                className="fas fa-download fa-sm text-white-50"></i> Create User</Link>
                    </div>
                   

                    {/* <!-- DataTales Example --> */}
                    
                        {
                            isloading ? <div className='d-flex justify-content-center align-items-center '><div class="spinner-grow text-primary" role="status">
                            <span class="sr-only">Loading...</span>
                          </div>
                          <div class="spinner-grow text-secondary" role="status">
                            <span class="sr-only">Loading...</span>
                          </div>
                          <div class="spinner-grow text-success" role="status">
                            <span class="sr-only">Loading...</span>
                          </div>
                          <div class="spinner-grow text-danger" role="status">
                            <span class="sr-only">Loading...</span>
                          </div>
                         
                          </div> : 
                          <div className="card shadow mb-4">
                          <div className="card-header py-3">
                              <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                          </div>
                          <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                    <thead>
                                        <tr>
                                        <th>Sno</th>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Start date</th>
                                            <th>Salary</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>Sno</th>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Start date</th>
                                            <th>Salary</th>
                                            <th>Action</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                       {
                                        users.map((user,i)=>{
                                            return  <tr key={i}>
                                            <td>{i+1}</td>
                                            <td>{user.name}</td>
                                            <td>{user.position}</td>
                                            <td>{user.office}</td>
                                            <td>{user.age}</td>
                                            <td>{user.startDate}</td>
                                            <td>${user.salary}</td>
                                            <td>
                                                <Link to={`/portal/user/view/${user.id}`}><button className='btn btn-sm btn-warning mr-1 mb-2'>View</button></Link>
                                                <Link to={`/portal/user/edit/${user.id}`}> <button className='btn btn-sm btn-primary mr-1 mb-2'>Edit</button></Link>
                                                 <button className='btn btn-sm btn-danger mr-3 mb-2' onClick={()=>{
                                                    handleDelete(user)
                                                 }}>Delete</button>
                                            </td>

                                        </tr>
                                        })
                            
                                       
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        </div>
                        }
                    
                    <ToastContainer />
                </div>
  )
}

export default User