"use client";
import { useForm } from "react-hook-form";
import InputComponent from "./subComponents/inputComponent";
import SelectComponent from "./subComponents/selectComponent";
import PasswordComponent from "./subComponents/passwordComponent";

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  const password = watch("password");
  const email = watch("email");

  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gradient-to-r from-green-400 to-blue-500">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-1 text-center text-3xl font-extrabold text-white">
          Create your account
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form
            className="space-y-6"
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
          >
            <InputComponent
              label="Full Name"
              id="fullName"
              {...register("fullName", { required: true })}
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs pt-2">
                Full Name is required
              </p>
            )}

            <InputComponent
              label="Date of Birth"
              id="dob"
              type="date"
              {...register("dob", { required: true })}
            />
            {errors.dob && (
              <p className="text-red-500 text-xs pt-2">
                Date of birth is required
              </p>
            )}

            <InputComponent
              label="Email"
              id="email"
              type="email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-red-500 text-xs pt-2">Email is required</p>
            )}

            <InputComponent
              label="Confirm Email"
              id="confirmEmail"
              type="email"
              {...register("confirmEmail", {
                required: "Please confirm your email",
                validate: (value) =>
                  value === email || "The emails do not match",
              })}
            />
            {errors.confirmEmail &&
              typeof errors.confirmEmail.message === "string" && (
                <p className="text-red-500 text-xs pt-2">
                  {errors.confirmEmail.message}
                </p>
              )}

            <PasswordComponent
              label="Password"
              id="password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="text-red-500 text-xs pt-2">
                Password is required
              </p>
            )}

            <PasswordComponent
              label="Confirm Password"
              id="confirmPassword"
              {...register("confirmPassword", {
                required: "Please confirm password",
                validate: (value) =>
                  value === password || "The passwords do not match",
              })}
            />
            {errors.confirmPassword &&
              typeof errors.confirmPassword.message === "string" && (
                <p className="text-red-500 text-xs pt-2">
                  {errors.confirmPassword.message}
                </p>
              )}

            <div>
              <input
                type="checkbox"
                {...register("terms", { required: true })}
              />
              <label htmlFor="terms" className="ml-2">
                I agree to the terms and conditions
              </label>
              {errors.terms && (
                <p className="text-red-500 text-xs pt-2">
                  You must accept the terms and conditions
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}