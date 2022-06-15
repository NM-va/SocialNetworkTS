import React from "react";
import {connect} from "react-redux";
import {StoreType} from "../../redux/redux-store";

import {withRouter} from "react-router";
import {compose} from "redux";
import {News} from "./News";
import {FriendItemMainType} from "../../redux/sidebar-reducer";

type MapStateToPropsType = {
    users: FriendItemMainType[]
}


export type UsersNewsTypeProps = MapStateToPropsType;

class NewsContainer extends React.Component<UsersNewsTypeProps, StoreType> {

    render() {

        return (
            <News users={this.props.users} />
        )
    }
}

let mapStateToProps = (state: StoreType): MapStateToPropsType => ({
    users: state.sidebar.friends,
});

export default compose<React.ComponentType>(
    connect(mapStateToProps, {}),
    withRouter,
)(NewsContainer);