import React from 'react'
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

// Custom Hooks
import { useSignup } from '../../hooks/useSignup';

// Styles
import '../../styles/global.css';
import './SignupForm.css';

export const SignupForm = () => {
    const navigate = useNavigate();
    const { signup, isPending, error } = useSignup();

    const formik = useFormik({
        initialValues: {
            userName: '',
            password: '',
            email: ''
        },
        onSubmit: async (values) => {
          const doc = { ...values };
          try {
            await signup(doc.userName, doc.email, doc.password)
            if (!error) {
                navigate('/');
            }
          } catch (err) {
            console.log('Login failed with error:', err);
          }
        },
        validationSchema: Yup.object({
          userName: Yup.string().required("Username is required"),
          password: Yup.string()
            .required("Password is required")
            .min(8, "Password must be at least 8 characters"),
          email: Yup.string()
            .required("Email is required")
            .email("Invalid email format")
        }),
      });

    const  LoginHandler = () => {
        navigate("/Login");
    }

    return (
        <div className="SignupContainer">
            <div className='SignupForm'>
                <div className='SignupFormTitle'>
                    <h2>Register</h2>
                </div>
                <div className='SignupFormInputes'>
                    <form onSubmit={formik.handleSubmit} noValidate>
                        {/* User Name */}
                        <div className='SignupDivs'>
                            <label htmlFor="user-name">Username:</label>
                            <input 
                            data-testid="user-name"  
                            className={( formik.touched.userName && formik.errors.userName) ? "ErrorSignupInput" : "SignupInput" }
                            type="text" 
                            id="user-name" 
                            {...formik.getFieldProps("userName")} 
                            />
                            {formik.touched.userName && formik.errors.userName && <p className="ErrorDiv">{formik.errors.userName}</p>}
                        </div>

                        {/* Password */}
                        <div className='SignupDivs' >
                            <label htmlFor="password">Password:</label>
                            <input 
                            data-testid="password"  
                            className={(formik.touched.password &&  formik.errors.password) ? "ErrorSignupInput" : "SignupInput" }
                            type="password" 
                            id="password" 
                            {...formik.getFieldProps("password")} 
                            />
                            {formik.touched.password && formik.errors.password && <p className="ErrorDiv">{formik.errors.password}</p>}
                        </div>

                        {/* Email */}
                        <div className='SignupDivs'>
                            <label htmlFor="email">Email:</label>
                            <input 
                            data-testid="email"  
                            className={( formik.touched.email && formik.errors.email) ? "ErrorSignupInput" : "SignupInput" }
                            type="email" 
                            id="email" 
                            {...formik.getFieldProps("email")} 
                            />
                            {formik.touched.email && formik.errors.email && <p className="ErrorDiv">{formik.errors.email}</p>}
                        </div>

                        {/* Submit Button */}
                        {isPending ?
                            <input aria-label="On Click" disabled className='CustomButton' type="submit" value="loading"/>
                            :
                            <input aria-label="On Click" disabled={formik.errors.userName || formik.errors.password || formik.errors.email} className='CustomButton' type="submit" value="Sign Up"/>
                        }
                        { error && <p className="ErrorDiv">Something went wrong! {error}</p>}
                    </form>
                </div>
                <div className='LoginFormSignup'>
                    <p>Already registered?</p>
                    <input aria-label="On Click" onClick={LoginHandler} className='CustomButton'  type="submit" value="Login"/>
                </div>

          </div>
      </div>
    );
};
