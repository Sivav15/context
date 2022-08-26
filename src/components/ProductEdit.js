import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductEdit = () => {
  const navigate = useNavigate();
  const params = useParams();
  const formik = useFormik({
    initialValues: {
      productName: "",
      material: "",
      color: "",
      price: "",
      department: "",
      productAdjective: "",
    },
    validate: (values) => {
      const errors = {};

      if (values.productName.length === 0) {
        errors.productName = "Required";
      }
      if (values.material.length === 0) {
        errors.material = "Required";
      }
      if (values.color.length === 0) {
        errors.color = "Required";
      }
      if (values.price.length === 0) {
        errors.price = "Required";
      }
      if (values.department.length === 0) {
        errors.department = "Required";
      }

      if (values.productAdjective.length === 0) {
        errors.productAdjective = "Required";
      }

      return errors;
    },

    onSubmit: async (values) => {
      // console.log(values);
     try {
      let product = await axios.put(
        `https://62a9fa733b314385543fa2da.mockapi.io/products/${params.id}`,
        values
      );
    
      if (product.status === 200) {
        toast.success("product update successfully");
        setTimeout(()=>{
          navigate("/portal/products");
        },3000)
      } else {
        toast.warn("product update falied");
      }
     } catch (error) {
      console.log(error);
     }
    },

  });

  useEffect(()=>{
    loading();
  },[])


 const loading = async ()=>{
try {
  let product = await axios.get( `https://62a9fa733b314385543fa2da.mockapi.io/products/${params.id}`)
formik.setValues({
  productName: product.data.productName,
  material: product.data.material,
  color: product.data.color,
  price: product.data.price,
  department: product.data.department,
  productAdjective: product.data.productAdjective,
})
} catch (error) {
  console.log(error);
}

 }

  return (
    <div className="container">
      <form
        onSubmit={(values) => {
          formik.handleSubmit(values);
        }}
      >
        <div className="row">
          <div className="col-lg-6">
            <label htmlFor="">ProductName</label>
            <input
              type="text"
              className={`form-control  ${formik.errors.productName ? "is-invalid" : "is-valid"
                } `}
              value={formik.values.productName}
              onChange={formik.handleChange}
              name="productName"
            />
            <span style={{ color: "red" }}> {formik.errors.productName}</span>
          </div>

          <div className="col-lg-6">
            <label htmlFor="">Material</label>
            <input
              type={"text"}
              className={`form-control  ${formik.errors.material ? "is-invalid" : "is-valid"
                } `}
              value={formik.values.material}
              onChange={formik.handleChange}
              name="material"
            />
            <span style={{ color: "red" }}> {formik.errors.material}</span>
          </div>

          <div className="col-lg-6">
            <label htmlFor="">Color</label>
            <input
              type={"text"}
              className={`form-control  ${formik.errors.color ? "is-invalid" : "is-valid"
                } `}
              value={formik.values.color}
              onChange={formik.handleChange}
              name="color"
            />
            <span style={{ color: "red" }}> {formik.errors.color}</span>
          </div>

          <div className="col-lg-6">
            <label htmlFor="">Price</label>
            <input
              type={"text"}
              className={`form-control  ${formik.errors.price ? "is-invalid" : "is-valid"
                } `}
              value={formik.values.price}
              onChange={formik.handleChange}
              name="price"
            />
            <span style={{ color: "red" }}> {formik.errors.price}</span>
          </div>

          <div className="col-lg-6">
            <label htmlFor="">Department</label>
            <input
              type={"text"}
              className={`form-control  ${formik.errors.department ? "is-invalid" : "is-valid"
                } `}
              value={formik.values.department}
              onChange={formik.handleChange}
              name="department"
            />
            <span style={{ color: "red" }}> {formik.errors.department}</span>
          </div>

          <div className="col-lg-6">
            <label htmlFor="">Adjective</label>
            <input
              type={"text"}
              className={`form-control  ${formik.errors.productAdjective ? "is-invalid" : "is-valid"
                } `}
              value={formik.values.productAdjective}
              onChange={formik.handleChange}
              name="productAdjective"
            />
            <span style={{ color: "red" }}> {formik.errors.productAdjective}</span>
          </div>

          <div className="col-lg-6">
            <input
              type={"submit"}
              className="btn btn-primary mt-2"
              value={"Submit"}
              disabled={!formik.isValid}
            />
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ProductEdit;

