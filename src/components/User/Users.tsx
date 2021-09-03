import React from "react";
import {UsersPagePropsType} from "./UsersContainer";
import styles from "./Users.module.css"
import axios from "axios";
import userPhoto from "./../../assets/images/default_avatar.png"
import {StoreType} from "../../redux/redux-store";

export class Users extends React.Component<UsersPagePropsType, StoreType> {
  constructor(props: UsersPagePropsType) {
    super(props);

    axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {
          this.props.setUsers(response.data.items);
        });
  }
  
  render(){
    return (
        <div>
          {
            this.props.usersPage.users.map(user => (
                <div key={user.id}>
                  <div>
                    <div className={styles.userAvatar}>
                      <img src={user.photos.small != null ? user.photos.small : userPhoto} alt=""/>
                    </div>
                    <div>
                      {
                        user.followed ? <button type="button" onClick={() => {
                              this.props.unfollow(user.id)
                            }}>Unfollow</button>
                            : <button type="button" onClick={() => {
                              this.props.follow(user.id)
                            }}>Follow</button>
                      }
                    </div>
                  </div>
                  <div>
                    <div>
                      {user.fullName}
                      <span>{user.status}</span>
                    </div>
                    <div>
                      {"user.location.country"}
                      <span>{"user.location.city"}</span>
                    </div>
                  </div>
                </div>
            ))
          }
        </div>
    )
  }
}