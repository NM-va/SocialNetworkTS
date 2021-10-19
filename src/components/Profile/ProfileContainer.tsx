import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {StoreType} from "../../redux/redux-store";
import {getUserProfile, ProfileType} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


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

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer);