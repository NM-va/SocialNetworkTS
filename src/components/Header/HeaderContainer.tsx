import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {StoreType} from "../../redux/redux-store";
import {logout} from "../../redux/auth-reducer";
import {ProfileType} from "../../redux/profile-reducer";


type MapStateToPropsType = {
    isAuth:boolean
    login:string | null
    email:string | null
    profile: ProfileType | null
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
    email: state.auth.email,
    login: state.auth.login,
    profile: state.profilePage.profile
});

export default connect(MapStateToProps, {logout})(HeaderContainer)