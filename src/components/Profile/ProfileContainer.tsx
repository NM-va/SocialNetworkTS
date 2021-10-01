import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {StoreType} from "../../redux/redux-store";
import {ProfileType, setUserProfile} from '../../redux/profile-reducer';
import {RouteComponentProps, withRouter} from "react-router";


type MapStateToPropsType = {
    profile: ProfileType | null
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
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
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
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

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);