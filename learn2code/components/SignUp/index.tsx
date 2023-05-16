// components/SignupPage.js
import { useForm } from "react-hook-form";
import InputComponent from './subComponents/inputComponent';
import SelectComponent from './subComponents/selectComponent';
import PasswordComponent from './subComponents./passwordComponent';

export default function SignupPage() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const onSubmit = (data: any) => console.log(data);

  const password = watch("password");
  const email = watch("email");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" autoComplete="off">
      <InputComponent label="First Name" id="firstName" {...register("firstName", { required: true })} />
      {errors.firstName && <p className="text-red-500 text-xs pt-2">First name is required</p>}

      <InputComponent label="Last Name" id="lastName" {...register("lastName", { required: true })} />
      {errors.lastName && <p className="text-red-500 text-xs pt-2">Last name is required</p>}

      <InputComponent label="Date of Birth" id="dob" type="date" {...register("dob", { required: true })} />
      {errors.dob && <p className="text-red-500 text-xs pt-2">Date of birth is required</p>}

      <InputComponent label="Email" id="email" type="email" {...register("email", { required: true })} />
      {errors.email && <p className="text-red-500 text-xs pt-2">Email is required</p>}

      <InputComponent label="Confirm Email" id="confirmEmail" type="email" {...register("confirmEmail", { 
        required: "Please confirm your email", 
        validate: value => value === email || "The emails do not match" 
      })} />
      {errors.confirmEmail && <p className="text-red-500 text-xs pt-2">{errors.confirmEmail.message}</p>}

      <SelectComponent label="Gender" id="gender" options={[{value: 'male', label: 'Male'}, {value: 'female', label: 'Female'}, {value: 'other', label: 'Prefer not to answer'}]} {...register("gender", { required: true })} />
      {errors.gender && <p className="text-red-500 text-xs pt-2">Gender is required</p>}

      <PasswordComponent label="Password" id="password" {...register("password", { required: true })} />
      {errors.password && <p className="text-red-500 text-xs pt-2">Password is required</p>}

      <PasswordComponent label="Confirm Password" id="confirmPassword" {...register("confirmPassword", { 
        required: "Please confirm password", 
        validate: value => value === password || "The passwords do not match" 
      })} />
      {errors.confirmPassword && <p className="text-red-500 text-xs pt-2">{errors.confirmPassword.message}</p>}

      <div>
        <input type="checkbox" {...register("terms", { required: true })} />
        <label htmlFor="terms" className="ml-2">I agree to the terms and conditions</label>
        {errors.terms && <p className="text-red-500 text-xs pt-2">You must accept the terms and conditions</p>}
      </div>
      <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
    Sign Up
  </button>
</form>
);
}

