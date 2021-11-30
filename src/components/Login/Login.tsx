import React from "react";
import {useFormik} from "formik"
import {connect} from "react-redux";
import {LoginParamsType} from "../../api/api";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {StoreType} from "../../redux/redux-store";

type PropsType = {
    login: (data: LoginParamsType) => void
}

export const LoginForm = (props: PropsType) => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
        
        },
        onSubmit: values => {
            props.login(values);
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
            </div>
            <div>
                <input type="password" placeholder={"password"}
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