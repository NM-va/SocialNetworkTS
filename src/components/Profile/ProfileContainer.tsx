import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {StoreType} from "../../redux/redux-store";
import {getUserProfile, ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router";
import {usersAPI} from "../../api/api";


type MapStateToPropsType = {
    profile: ProfileType | null
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
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state: StoreType): MapStateToPropsType => ({
    profile: state.profilePage.profile
});

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);