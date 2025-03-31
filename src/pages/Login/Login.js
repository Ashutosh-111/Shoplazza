import React from 'react'
import './Login.css';
import { Button, Divider, TextField } from '@mui/material';
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    const renderPasswordError = () => {
        return (
            <div>
                <div>Contains at least 8 characters and at most 20 characters.</div>
                <div>Contains at least one digit.</div>
                <div>Contains at least one uppercase letter.</div>
                <div>Contains at least one lowercase letter.</div>
                <div>Contains at least one special character.</div>
            </div>
        );
    };


    return (



        <div className='sign-in'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Sign In</h2>
                <div className='email-input'>
                    <label className='email-label'>Email</label>
                    <TextField className='email'placeholder="Enter email..."{...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Please enter a valid email"
                        }
                    })} />

                    {errors.email && <span className='error'>{errors.email.message}</span>}

                </div>
                <div className='password-input'>
                    <label className='password-label'>Passowrd</label>
                    <TextField className='password' placeholder='Enter password...'{...register("password", {
                        required: "Password is required",
                        pattern: {
                            value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,20}$/,
                            message: "Password doesn't meet the criteria" // General message
                        }
                    })} />
                    {errors.password && <span className='error'>{renderPasswordError()}</span>}
                </div>
                <Button type='submit' className='submit' variant="contained">Sign In</Button>
                <Button variant="text">Forgot your password?</Button>
                <Button variant="text">Don't have an account? Sign Up</Button>

                    
            </form>
        </div>
    )
}

export default Login