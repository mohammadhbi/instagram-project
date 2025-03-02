import React from "react";
import Logo from "../../assets/Logo.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { client } from "../../lib/axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();

  const schema = yup.object({
    username: yup.string().required(),
    password: yup.string().required().min(8).max(16),
  });

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
      const response = await client.post("/api/user/login", user);
      console.log("called", response.data.data.username);
      localStorage.setItem("token", response.data.accessToken);
      // localStorage.setItem("token", response.data.data.username);
      console.log(response);

      toast.success("user logged in successfully", {
        type: "success",
      });
      navigate("/home");
    } catch (error) {
      toast.error(error.message, {
        type: "error",
      });
    }
  }
  return (
    <div className="grid justify-center mt-36">
      <div>
        <img className="mb-9" src={Logo} alt="" />
      </div>
      <form
        onSubmit={handleSubmit(submitForm)}
        className="grid grid-cols-1"
        action=""
      >
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
            type="password"
            className="grow"
            placeholder="Password"
          />
          <span className="badge badge-xs text-[#8A8888]">Show</span>
        </label>
        {errors?.password ? <span>{errors.password.message}</span> : null}

        <button
          type="submit"
          className="bg-[#44B8FA] rounded-2xl border-none outline-0 w-96 h-10 text-white mt-6"
        >
          Log in
        </button>

        <div className="flex font-light mt-3">
          <p className="mr-2">Don’t have an account?</p>

          <Link to="/" className="text-blue-500 text-sm font-semibold">
            signup
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
