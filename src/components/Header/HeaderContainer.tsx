import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {StoreType} from "../../redux/redux-store";
import {InitialStateType} from "../../redux/auth-reducer";


type MapStateTopropsType = {
    data: InitialStateType
}

type MapDispatchToProps = {
    setAuthUserData: (id: string, login: string, email:string) => void
}

type AuthPropsType = MapStateTopropsType & MapDispatchToProps

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

const MapStateToProps = (props: StoreType) => {
    isAuth: props.auth.isAuth,
    login: props.auth.login,
};

export default connect(MapStateToProps, {setAuthUserData})(HeaderContainer)