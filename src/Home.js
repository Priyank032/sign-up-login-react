import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import login_img from "./login_img.svg";
import { FaUserAlt } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
// import { LoginAll } from "../Service/api";
import { Link } from "react-router-dom";
const Home = () => {
    const history = useNavigate();
    const data = localStorage.getItem("username")

    return (
        <div className="container">
            <div className="container pl-5 main_container mt-5 py-5">
                <div className="row">
                    <div className="col-12 text-center">
                        {
                            data ? <h1>Hii, {data}.Hope you are good Thanks for logging. </h1> : <><h1>To get started you can now login or signup</h1>  <br></br></>
                        }
                    </div>
                    {
                        !data &&
                        <><div className="col-6 text-center">
                            <Link className="btn btn-primary btn-large" to="/signup">SignUp</Link>
                        </div>
                            <div className="col-6 text-center">
                                <Link className="btn btn-secondary btn-large" to="/login">Login</Link>
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;
