import React from 'react'
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

// Custom Hooks
import { useLogin } from '../../hooks/useLogin';

// Styles
import '../../styles/global.css';
import './LoginForm.css';

export const LoginForm = () => {
    const navigate = useNavigate();
    const {error, isPending, login} = useLogin();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: async (values) => {
          const doc = { ...values };
          try {
            await login(doc.email, doc.password);
            if (!error) {
                navigate('/');
            }
        } catch (err) {
            console.log('Login failed with error:', err);
        }
        },
        validationSchema: Yup.object({
            email: Yup.string()
            .required("Email is required")
            .email("Invalid email format"),
          password: Yup.string().required("Password is required")
        }),
      });

    const  SignUpHandler = () => {
        navigate("/Signup");
    }
    return (
        <div className="LoginContainer">
            <div className='LoginForm'>
                <div className='LoginFormTitle'>
                    <h2>Welcome Back</h2>
                </div>
                <div className='LoginFormInputes'>
                    <form onSubmit={formik.handleSubmit} noValidate>
                        {/* Email */}
                        {/* isInvalid={formik.errors.email} */}
                        <div className='LogingDivs'> 
                            <label htmlFor="email">Email:</label>
                            <input 
                            data-testid="email"  
                            className={(formik.touched.email && formik.errors.email) ? "ErrorLoginInput" : "LoginInput" }
                            type="text" 
                            id="user-name" 
                            {...formik.getFieldProps("email")} 
                            />
                            {formik.touched.email && formik.errors.email && <p className="ErrorDiv">{formik.errors.email}</p>}
                        </div>

                        {/* Password */}
                        <div className='LogingDivs' >
                            <label htmlFor="password">Password:</label>
                            <input 
                            data-testid="password"  
                            className={( formik.touched.password && formik.errors.password) ? "ErrorLoginInput" : "LoginInput" }
                            type="password" 
                            id="password" 
                            {...formik.getFieldProps("password")} 
                            />
                            {formik.touched.password && formik.errors.password && <p className="ErrorDiv">{formik.errors.password}</p>}
                        </div>

                        {/* Submit Button */}
                        {isPending ?
                            <input aria-label="On Click" disabled className='CustomButton' type="submit" value="loading"/>
                            :
                            <input aria-label="On Click" disabled={formik.errors.email || formik.errors.password} className='CustomButton' type="submit" value="Login"/>
                        }
                        { error && <p className="ErrorDiv">Incorrect email or password. </p>}
                    </form>
                </div>
                <div className='LoginFormSignup'>
                    <p>Don't you have an account? </p>
                    <input aria-label="On Click" onClick={SignUpHandler} className='CustomButton'  type="submit" value="Sign up"/>
                </div>
          </div>
      </div>
    );
};
