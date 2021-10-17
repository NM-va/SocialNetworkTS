import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {StoreType} from "../../redux/redux-store";
import {getUserProfile, ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router";
import {usersAPI} from "../../api/api";
import {Redirect} from "react-router-dom";


type MapStateToPropsType = {
    profile: ProfileType | null
    isAuth: boolean
}

type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
}

type userProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

//this.props.match.params type
type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & userProfilePropsType

class ProfileContainer extends React.Component<PropsType, StoreType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = '2';
        }
        this.props.getUserProfile(userId);
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={"/login"} />
        
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state: StoreType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);