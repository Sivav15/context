import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserEdit = () => {
  const navigate = useNavigate();
  const params = useParams();
  const formik = useFormik({
    initialValues: {
      name: "",
      position: "",
      office: "",
      age: "",
      startDate: "",
      salary: "",
    },
    validate: (values) => {
      const errors = {};

      if (values.name.length === 0) {
        errors.name = "Required";
      }
      if (values.position.length === 0) {
        errors.position = "Required";
      }
      if (values.office.length === 0) {
        errors.office = "Required";
      }
      if (values.age.length === 0) {
        errors.age = "Required";
      }
      if (values.startDate.length === 0) {
        errors.startDate = "Required";
      }

      if (values.salary.length === 0) {
        errors.salary = "Required";
      }

      return errors;
    },

    onSubmit: async (values) => {
      // console.log(values);
     try {
      let user = await axios.put(
        `https://62a9fa733b314385543fa2da.mockapi.io/users/${params.id}`,
        values
      );
      console.log(user);
      if (user.status === 200) {
        toast.success("User update successfully");
        setTimeout(()=>{
          navigate("/portal/users");
        },2000)
      } else {
        toast.warn("User update falied");
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
  let user = await axios.get( `https://62a9fa733b314385543fa2da.mockapi.io/users/${params.id}`)
formik.setValues({
  name:user.data.name,
  position:user.data.position,
  office:user.data.office,
  age:user.data.age,
  startDate:user.data.startDate,
  salary:user.data.salary,
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
            <label htmlFor="">Name</label>
            <input
              type="text"
              className={`form-control  ${formik.errors.name ? "is-invalid" : "is-valid"
                } `}
              value={formik.values.name}
              onChange={formik.handleChange}
              name="name"
            />
            <span style={{ color: "red" }}> {formik.errors.name}</span>
          </div>

          <div className="col-lg-6">
            <label htmlFor="">Position</label>
            <input
              type={"text"}
              className={`form-control  ${formik.errors.position ? "is-invalid" : "is-valid"
                } `}
              value={formik.values.position}
              onChange={formik.handleChange}
              name="position"
            />
            <span style={{ color: "red" }}> {formik.errors.position}</span>
          </div>

          <div className="col-lg-6">
            <label htmlFor="">Office</label>
            <input
              type={"text"}
              className={`form-control  ${formik.errors.office ? "is-invalid" : "is-valid"
                } `}
              value={formik.values.office}
              onChange={formik.handleChange}
              name="office"
            />
            <span style={{ color: "red" }}> {formik.errors.office}</span>
          </div>

          <div className="col-lg-6">
            <label htmlFor="">Age</label>
            <input
              type={"text"}
              className={`form-control  ${formik.errors.age ? "is-invalid" : "is-valid"
                } `}
              value={formik.values.age}
              onChange={formik.handleChange}
              name="age"
            />
            <span style={{ color: "red" }}> {formik.errors.age}</span>
          </div>

          <div className="col-lg-6">
            <label htmlFor="">Start Date</label>
            <input
              type={"text"}
              className={`form-control  ${formik.errors.startDate ? "is-invalid" : "is-valid"
                } `}
              value={formik.values.startDate}
              onChange={formik.handleChange}
              name="startDate"
            />
            <span style={{ color: "red" }}> {formik.errors.startDate}</span>
          </div>

          <div className="col-lg-6">
            <label htmlFor="">Salary</label>
            <input
              type={"text"}
              className={`form-control  ${formik.errors.salary ? "is-invalid" : "is-valid"
                } `}
              value={formik.values.salary}
              onChange={formik.handleChange}
              name="salary"
            />
            <span style={{ color: "red" }}> {formik.errors.salary}</span>
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

export default UserEdit;
