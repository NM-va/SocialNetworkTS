import React from "react";
import {useFormik} from "formik"
import {connect} from "react-redux";
import {FormikErrorType, LoginParamsType} from "../../api/api";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {StoreType} from "../../redux/redux-store";

type PropsType = {
    login: (data: LoginParamsType) => void
    captcha?: string | null
}

export const LoginForm = ({login, captcha}:PropsType) => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
            captcha: ''
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
            <div className="mb-3">
                <input className="form-control" type="email" placeholder={"email"}
                    {...formik.getFieldProps("email")}
                />
                {formik.touched.email
                && formik.errors.email
                && <div style={{color:'red'}}>{formik.errors.email}</div>}
            </div>
            <div className="mb-3">
                <input className="form-control" type="password" placeholder={"password"}
                    {...formik.getFieldProps("password")}
                />
                {formik.touched.password
                && formik.errors.password
                && <div style={{color:'red'}}>{formik.errors.password}</div>}
            </div>
            <div className="mb-3">
                <input type="checkbox" className="form-check-input" id="rememberMe" {...formik.getFieldProps("rememberMe")} />
                <label htmlFor="rememberMe" className="customCheckbox ms-2">remember me</label>
            </div>
            {captcha && <img src={captcha}/>}
            {captcha &&  <input type="text" placeholder={"symbols from image"}
                                   {...formik.getFieldProps("captcha")}
            />}
            <div className="mb-3">
                <button className="btn btnCustom" type="submit">Login</button>
            </div>
        </form>
    )
};

type MapStateToProps = {
    isAuth: boolean
    captchaUrl?: string | null
}
type MapDispatchPropsType = {
    login: (data: LoginParamsType) => void
}

export type MyPostsPropsType = MapStateToProps & MapDispatchPropsType;

const Login:React.FC<MyPostsPropsType> = ({isAuth, login, captchaUrl} ) => {
    if (isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div className={"card cardItem"}>
            <h3>Login</h3>
            <LoginForm login={login} captcha={captchaUrl}/>
        </div>

    )
};
const mapStateToProps = (state: StoreType) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
});

export const LoginContainer = connect(mapStateToProps, {login})(Login);