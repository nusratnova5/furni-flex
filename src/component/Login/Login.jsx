import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
  const { login } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Simulate login logic (you can send `data` to your backend here)
    login(data); // Call the login function with the form data
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          type="text"
          placeholder="Username"
          {...register('username', { required: true })}
        />
        {errors.username && <p>Username is required</p>}
      </div>
      
      <div>
        <input
          type="password"
          placeholder="Password"
          {...register('password', { required: true, minLength: 6 })}
        />
        {errors.password && errors.password.type === 'required' && (
          <p>Password is required</p>
        )}
        {errors.password && errors.password.type === 'minLength' && (
          <p>Password must be at least 6 characters long</p>
        )}
      </div>

      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
