// import React from "react";
// import { useState } from "react";
// import { FaLock, FaUser, FaEnvelope } from "react-icons/fa";
// import Navbar from "./Navbar";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import loginSchema from "../validators/login";

// const LoginComp =()=> {
//   const [action, setAction] = useState("Login");
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(loginSchema),
//   })
//   const onSubmit = (data) => console.log(data)
//   return (
//       <div className="login2">
//          <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="container1">
//           <div className="container2">
//             <div className="header1">
//               <h1>{action}</h1>
//             </div>
//             <div className="underline"></div>
//             <div className="inputs">
//               {action === "Login" ? (
//                 <div></div>
//               ) : (
//                 <div className="input">
//                   <FaUser />
//                   <input type="text" placeholder="Name" />
//                 </div>
//               )}

//               <div className="input">
//                 <FaEnvelope />
//                 <input type="text" placeholder="Email"  {...register("email")}/>
//                 {errors.email && <p>{errors.email?.message}</p>}
//               </div>
//               <div className="input">
//                 <FaLock />
//                 <input type="password" placeholder="Password"  {...register("password")}/>
//                 {errors.password && <p>{errors.password?.message}</p>}
//               </div>
//             </div>
//             {action === "Sign Up" ? (
//               <div></div>
//             ) : (
//               <div className="forgot-password">
//                 <p>
//                   Lost password? <label>Click here</label>
//                 </p>
//               </div>
//             )}
//             <div className="sign-login">
//               <button
//                 className={action === "Sign Up" ? "submitt" : "gray"}
//                 onClick={() => {
//                   setAction("Sign Up");
//                 }}
//               >
//                 Sign Up
//               </button>
//               <div
//                 className={action === "Login" ? "submitt" : "gray"}
//                 onClick={() => {
//                   setAction("Login");
//                 }}
//               >
//                 Login
//               </div>
//             </div>
//           </div>
//         </div>
//         </form>
//       </div>
//   );
// }
// export default LoginComp;
