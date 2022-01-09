import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {StoreType} from "../../redux/redux-store";
import {getUserProfile, getUserStatus, ProfileType, savePhoto, updateStatus} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router";
import {compose} from "redux";


type MapStateToPropsType = {
    profile: ProfileType | null
    status: string
    authorizedUserId: string | null
    isAuth: boolean
    isOwner: boolean
}

type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
    getUserStatus: (userId: string) => void
    updateStatus: (status: string) => void
    savePhoto: (file: any) => void
}

type userProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

//this.props.match.params type
type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & userProfilePropsType

class ProfileContainer extends React.Component<PropsType, StoreType> {

    refreshProfile() {
        let userId = this.props.match.params.userId;

        if(!userId) {
            if (this.props.authorizedUserId) {
                userId = this.props.authorizedUserId;
            } else {
                this.props.history.push("/login");
            }
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<StoreType>, snapshot?: any): void {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        
        return (
            <Profile {...this.props} profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     savePhoto={this.props.savePhoto} />
        )
    }
}

let mapStateToProps = (state: StoreType, ownProps: RouteComponentProps<PathParamsType>): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
    isOwner: !ownProps.match.params.userId
});

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateStatus, savePhoto}),
    withRouter,
)(ProfileContainer);