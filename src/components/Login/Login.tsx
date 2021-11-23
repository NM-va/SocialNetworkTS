import React from 'react';
import {useFormik} from 'formik'
import {useDispatch} from "react-redux";
import {login} from "../../redux/auth-reducer";


export const LoginForm = () => {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
        
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values));
            dispatch(login(values))
        }
    });
    
    return (
        <form onSubmit={(e) => {
            formik.handleSubmit(e);
            formik.resetForm();
        }}>
            <div>
                <input type="text" placeholder={"email"}
                    {...formik.getFieldProps("email")}
                />
            </div>
            <div>
                <input type="password" placeholder={"Password"}
                    {...formik.getFieldProps("password")}
                />
            </div>
            <div>
                <input type="checkbox" {...formik.getFieldProps("rememberMe")}/>
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    )
}

export const Login = () => {
    
    return (
        <div>
            <h1>Login</h1>
            <LoginForm/>
        </div>

    )
}