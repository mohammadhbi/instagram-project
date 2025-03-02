import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React, { useState } from "react";
import { client } from "../../lib/axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { useNavigate } from "react-router-dom";
function SignUp() {
  const navigate = useNavigate();
  const schema = yup.object({
    email: yup.string().required().email(),
    username: yup.string().required(),
    password: yup.string().required().min(8).max(16),
  });
  const [isShowPassword, setIsShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });
  async function submitForm(user) {
    try {
      console.log(user);
      const response = await client.post("/api/user/signup", user);
      toast.success("user added successfully", {
        type: "success",
      });
      console.log(response);
      navigate("/Login");
    } catch (error) {
      toast.error(error.message, {
        type: "error",
      });
    }
  }
  function toggleShowPassword() {
    setIsShowPassword(!isShowPassword);
  }
  return (
    <div className=" grid mx-auto py-10 justify-center mt-36 border border-gray-300 rounded-md w-140 ">
      <div>
        <img className="mb-9 mx-auto" src={Logo} alt="" />{" "}
      </div>
      <form className="grid grid-cols-1  " onSubmit={handleSubmit(submitForm)}>
        <label className="input mb-3 w-96">
          <input
            {...register("email")}
            type="email"
            className="grow "
            placeholder="Email"
          />
        </label>
        {errors?.email ? <span>{errors.email.message}</span> : null}
        <label className="input mb-3 w-96">
          <input
            {...register("username")}
            type="text"
            className="grow"
            placeholder="User Name"
          />
        </label>
        {errors?.username ? <span>{errors.username.message}</span> : null}
        <label className="input w-96">
          <input
            {...register("password")}
            type={isShowPassword ? "text" : "password"}
            className="grow"
            placeholder="Password"
          />
          <span
            onClick={toggleShowPassword}
            className="badge badge-xs text-[#8A8888]"
          >
            Show
          </span>
        </label>
        {errors?.password ? <span>{errors.password.message}</span> : null}

        <button
          type="submit"
          className="bg-[#44B8FA] rounded-2xl border-none outline-0 w-96 h-10 text-white mt-6"
        >
          Sign up
        </button>

        <div className="flex font-light mt-3">
          <p className="mr-2">Already have an account?</p>
<<<<<<< HEAD
           {/* <Link to="/login"> <span className='text-[#44B8FA]'>Login</span> </Link>  */}
=======
          <Link to="/login" className="text-blue-500 text-sm font-semibold">
            Login
          </Link>
>>>>>>> 9661d28b5114eef690ef4fde9a916869e84e4c05
        </div>
      </form>
    </div>
  );
}

export default SignUp;
