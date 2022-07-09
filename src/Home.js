import React from "react";
import Navbar from './Navbar';

import { Link } from "react-router-dom";
const Home = () => {
    if(localStorage.getItem("username")){
        var data = localStorage.getItem("username")

    }
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="container pl-5 main_container mt-5 py-5">
                    <div className="row">
                        <div className="col-12 text-center">
                           <h1>To get started you can now login or signup</h1>  <br></br>
                            
                        </div>
                        <div className="col-6 text-center">
                                <Link className="btn btn-primary btn-large" to="/signup">SignUp</Link>
                            </div>
                                <div className="col-6 text-center">
                                    <Link className="btn btn-secondary btn-large" to="/login">Login</Link>
                                </div>
                         
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
