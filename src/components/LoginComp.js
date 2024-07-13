import React from "react";
import { FaLock, FaUser, FaEnvelope } from "react-icons/fa";
import Navbar from "./Navbar";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "../validators/login";

const LoginComp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const onSubmit = (data) => console.log(data);
  return (
    <div className="container1">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Login</h1>

          {/* <div className="inputs">
            <FaUser />
            <input type="text" placeholder="Name" />
          </div> */}

          <div className="inputEmail inputs">
            <FaEnvelope />
            <input type="text" placeholder="Email" {...register("email")} />
            {errors.email && <p>{errors.email?.message}</p>}
          </div>
          <div className="inputPassword inputs">
            <FaLock />
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            {errors.password && <p>{errors.password?.message}</p>}
          </div>
          <div>
            <div className="fg">

            <label>
              <input type="checkbox" />
              Don't remind me <a>Forgot Password</a>
            </label>
            </div>
   
          </div>
          <div className="loginbtn">
            <button>Login</button>
          </div>
        <div className="sg">
        <label>
            If you don't have an acount, you can <a href="/signUp"> Sign Up</a>{" "}
          </label>
        </div>
        </form>
    </div>
  );
};
export default LoginComp;
