import React from 'react'
import { Outlet} from "react-router-dom";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
const Portal = () => {
  return (
    <div id="wrapper">
        <SideBar></SideBar>

        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* <!-- Main Content --> */}
          <div id="content">

            <NavBar></NavBar>
            {/* <!-- Begin Page Content --> */}
                <div className="container-fluid">


< Outlet/>
                </div>
          </div>
          {/* <!-- End of Main Content --> */}
        </div>
        {/* <!-- End of Content Wrapper --> */}
      </div>
  )
}

export default Portal