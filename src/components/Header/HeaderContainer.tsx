import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {StoreType} from "../../redux/redux-store";
import {InitialStateType, setAuthUserData} from "../../redux/auth-reducer";


type MapStateToPropsType = {
    isAuth:boolean
    login:string | null
}

type MapDispatchToProps = {
    setAuthUserData: (id: string, login: string, email:string) => void
}

export type AuthPropsType = MapStateToPropsType & MapDispatchToProps

class HeaderContainer extends React.Component<AuthPropsType, StoreType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if(response.data.resultCode ===0) {
                    let {id, login, email} = response.data.data;
                    this.props.setAuthUserData(id, login, email);
                }
            });
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

export default connect(MapStateToProps, {setAuthUserData})(HeaderContainer)