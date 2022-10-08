import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { images } from "../../constants";
import "./admin.scss"


function Admin(){
    return (
        <div className="admin">
            <Sidebar />
            
            
            <div className="image">
                <img src={images.image2} alt=""></img>
            </div>
        </div>

    )
}
export default Admin;