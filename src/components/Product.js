import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {  Link} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Product = () => {

    const [products,setProducts] = useState([]);

    const [isloading,setLoading] = useState(false)
    
    

    useEffect(()=>{
        loading();
    },[]);


    const loading = async ()=>{
           
        try {
            setLoading(true)
            let product = await axios.get("https://62a9fa733b314385543fa2da.mockapi.io/products");
        setProducts(product.data);
        setLoading(false)
        } catch (error) {
            console.log(error);
        }
        
    }

    const handleDelete = async(e)=>{
 
         try {
            let x = products.findIndex((item)=> item.id === e.id )
            products.splice(x,1)
            setProducts([...products]);
            let product = await axios.delete(`https://62a9fa733b314385543fa2da.mockapi.io/products/${e.id}`);
            
            
            if (product.status === 200) {
                toast.success("Product deleted successfully");
                
                
              } else {
                toast.warn("Product deleted falied");
              }
         } catch (error) {
            console.log(error);
         }
    }
  return (
    <div className="container-fluid m-0">
   <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Product</h1>
                        <Link  to= "/portal/create-product" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                className="fas fa-download fa-sm text-white-50"></i> Create Product</Link>
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
        </div> :  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                <thead>
                                    <tr>
                                    <th>Sno</th>
                                        <th>ProductName</th>
                                        <th>Material</th>
                                        <th>Color</th>
                                        <th>Price</th>
                                        <th>Department</th>
                                        <th>Adjective</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                    <th>Sno</th>
                                        <th>ProductName</th>
                                        <th>Material</th>
                                        <th>Color</th>
                                        <th>Price</th>
                                        <th>Department</th>
                                        <th>Adjective</th>
                                        <th>Action</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                   {
                                    products.map((product,i)=>{
                                        return  <tr key={i}>
                                        <td>{i+1}</td>
                                        <td>{product.productName}</td>
                                        <td>{product.material}</td>
                                        <td>{product.color}</td>
                                        <td>{product.price}</td>
                                        <td>{product.department}</td>
                                        <td>{product.productAdjective}</td>
                                        <td>
                                            <Link to={`/portal/product/view/${product.id}`}><button className='btn btn-sm btn-warning mr-1 mb-2'>View</button></Link>
                                            <Link to={`/portal/product/edit/${product.id}`}> <button className='btn btn-sm btn-primary mr-1 mb-2'>Edit</button></Link>
                                             <button className='btn btn-sm btn-danger mr-3 mb-2' onClick={()=>{
                                                handleDelete(product)
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

export default Product