import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {StoreType} from "../../redux/redux-store";
import {logout} from "../../redux/auth-reducer";


type MapStateToPropsType = {
    isAuth:boolean
    login:string | null
}

type MapDispatchToProps = {
    logout: () => void
}

export type AuthPropsType = MapStateToPropsType & MapDispatchToProps

class HeaderContainer extends React.Component<AuthPropsType, StoreType> {
    render() {
        return (
            <Header {...this.props} />
        )
    }
}

const MapStateToProps = (state: StoreType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(MapStateToProps, {logout})(HeaderContainer)