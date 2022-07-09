import React,{useEffect} from "react";
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
const User_page = () => {
    const history = useNavigate();
    var data = localStorage.getItem("username");
    useEffect(() => {
    const data = localStorage.getItem("username");
  
    if (!data) {
        history("/");
        // alert("Please Login First")
      return
    } 
  }, [history]);
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="container pl-5 main_container mt-5 py-5">
                    <div className="row">
                        <div className="col-12 text-center">
                          
                                <h1>Hii, {data}.Hope you are good Thanks for logging. </h1> 
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default User_page;
