import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {StoreType} from "../../redux/redux-store";
import {getAuthUserData} from "../../redux/auth-reducer";


type MapStateToPropsType = {
    isAuth:boolean
    login:string | null
}

type MapDispatchToProps = {
    getAuthUserData: () => void
}

export type AuthPropsType = MapStateToPropsType & MapDispatchToProps

class HeaderContainer extends React.Component<AuthPropsType, StoreType> {
    componentDidMount() {
        this.props.getAuthUserData();
    }

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

export default connect(MapStateToProps, {getAuthUserData})(HeaderContainer)