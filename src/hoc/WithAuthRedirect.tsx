import React, { ComponentType } from "react";
import {Redirect} from "react-router-dom";
import {StoreType} from "../redux/redux-store";
import {connect} from "react-redux";

type MapStatePropsType = {
    isAuth: boolean
}

const mapStateToPropsForRedirect = (state: StoreType): MapStatePropsType => {
    return {isAuth: state.auth.isAuth}
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {
    
    const RedirectComponent = (props: MapStatePropsType) => {
        let {isAuth, ...restProps} = props;
        
        if (!isAuth) return <Redirect to={"/login"}/>
        return <Component {...restProps as T}/>
    }
    
    
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
    
    return ConnectedAuthRedirectComponent;
}