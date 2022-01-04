import React from "react";
import {useFormik} from "formik"
import {connect} from "react-redux";
import {FormikErrorType, LoginParamsType} from "../../api/api";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {StoreType} from "../../redux/redux-store";

type PropsType = {
    login: (data: LoginParamsType) => void
}

export const LoginForm = ({login}:PropsType) => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: Partial<FormikErrorType> = {};
    
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
    
            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 3) {
                errors.password = 'Must be more 3 characters';
            }
    
            return errors;
        },
        onSubmit: values => {
            login(values);
        }
    });
    
    return (
        <form onSubmit={(e) => {
            formik.handleSubmit(e);
            // formik.resetForm();
        }}>
            <div>
                <input type="email" placeholder={"email"}
                    {...formik.getFieldProps("email")}
                />
                {formik.touched.email
                && formik.errors.email
                && <div style={{color:'red'}}>{formik.errors.email}</div>}
            </div>
            <div>
                <input type="password" placeholder={"password"}
                    {...formik.getFieldProps("password")}
                />
                {formik.touched.password
                && formik.errors.password
                && <div style={{color:'red'}}>{formik.errors.password}</div>}
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

type MapStateToProps = {
    isAuth: boolean
}
type MapDispatchPropsType = {
    login: (data: LoginParamsType) => void
}

export type MyPostsPropsType = MapStateToProps & MapDispatchPropsType;

const Login:React.FC<MyPostsPropsType> = (props ) => {
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginForm login={props.login}/>
        </div>

    )
}
const mapStateToProps = (state: StoreType) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const LoginContainer = connect(mapStateToProps, {login})(Login);