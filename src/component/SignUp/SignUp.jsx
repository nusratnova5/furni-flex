import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../context/AuthContext';
import img from '../../assets/Images/img.png';
import appleicon from '../../assets/Images/apple.png';
import googleicon from '../../assets/Images/google.png';

const SignUp = () => {
  const { login } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    login(data); // Call login with the form data
    console.log(data)
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
    <div className="bg-white shadow-lg p-6 rounded-lg w-full max-w-md">
      <h1 className="text-center text-2xl font-semibold mb-4">Welcome To</h1>
      <h2 className="text-center text-4xl font-bold text-black">
        <span className="text-black">Furni</span><span className="text-blue-500">Flex</span>
      </h2>
      <p className="text-center text-gray-500">Signup for purch Fill x Hug desire products</p>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First name (optional)"
            {...register('firstName')}
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Last name (optional)"
            {...register('lastName')}
            className="p-2 border rounded"
          />
        </div>

        <div className="mt-4">
          <input
            type="email"
            placeholder="Email address"
            {...register('email', { required: 'Email is required' })}
            className="p-2 w-full border rounded"
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>

        <div className="mt-4 relative">
          <input
            type="password"
            placeholder="Password"
            {...register('password', { required: 'Password is required' })}
            className="p-2 w-full border rounded"
          />
          <button
            type="button"
            className="absolute right-3 top-2 text-gray-500"
            // Add show/hide password logic here
          >
            👁️
          </button>
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        </div>

        <div className="mt-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              {...register('terms', { required: 'You must agree to the terms' })}
              className="mr-2"
            />
            I agree to the <a href="#" className="text-blue-500">Terms & Policy</a>
          </label>
          {errors.terms && <p className="text-red-500">{errors.terms.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-2 mt-4 rounded"
        >
          Signup
        </button>

        <div className="text-center mt-4">
          <p>or</p>
          <div className="flex justify-between mt-4">
            <button className="bg-white border border-gray-300 text-gray-500 flex items-center justify-center py-2 px-4 w-1/2 mr-2 rounded">
              <img src="google-icon.svg" alt="Google" className="w-5 mr-2" />
              Sign in with Google
            </button>
            <button className="bg-white border border-gray-300 text-gray-500 flex items-center justify-center py-2 px-4 w-1/2 rounded">
              <img src="apple-icon.svg" alt="Apple" className="w-5 mr-2" />
              Sign in with Apple
            </button>
          </div>
        </div>

        <div className="text-center mt-4">
          <p>Have an account? <a href="#" className="text-blue-500">Sign In</a></p>
        </div>
      </form>
    </div>
  </div>
  );
};

export default SignUp;
