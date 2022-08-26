import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductView = () => {
  const params = useParams();
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    loading();
  }, []);

  const loading = async () => {
  try {
    let user = await axios.get(
      `https://62a9fa733b314385543fa2da.mockapi.io/products/${params.id}`
    );

    setProductData(user.data);
  } catch (error) {
    console.log(error);
  }
  };

  return (
    <div class="card-body">
      <div class="table-responsive">
        <table
          class="table table-bordered"
          id="dataTable"
          width="100%"
          cellspacing="0"
        >
          <thead>
            <tr>
            
            <th>Material</th>
            <th>Color</th>
            <th>ProductName</th>
            <th>Price</th>
            <th>Department</th>
            <th>Adjective</th>
          
                                        
            </tr>
          </thead>
          <tbody>
            <tr>
            
            <td>{productData.productName}</td>
            <td>{productData.material}</td>
            <td>{productData.color}</td>
            <td>{productData.price}</td>
            <td>{productData.department}</td>
            <td>{productData.productAdjective}</td>
            </tr>
          </tbody>
        </table>
        <h4>Discription : </h4> <span>{productData.discription}</span>
      </div>
    </div>
  );
};

export default ProductView;
