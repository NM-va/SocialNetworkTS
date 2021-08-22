import React from "react";
import {UsersPagePropsType} from "./UsersContainer";
import styles from './Users.module.css'

export const Users = (props: UsersPagePropsType) => {
  
  if (props.usersPage.users.length === 0 ) {
    props.setUsers([
    
      {
        id: "1",
        followed: false,
        fullName: "Dmitry K.",
        status: "I am a boss",
        location: {
          country: "Belarus",
          city: "Minsk",
        },
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo3qbWHSWAYms8owf4do5qdmppgfZWsZAmnQ&usqp=CAU"
      },
      {
        id: "2",
        followed: true,
        fullName: "Svetlana D.",
        status: "I am so pretty",
        location: {
          country: "Belarus",
          city: "Minsk",
        },
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo3qbWHSWAYms8owf4do5qdmppgfZWsZAmnQ&usqp=CAU"
      },
      {
        id: "3",
        followed: false,
        fullName: "Sergei S.",
        status: "I like football!!!",
        location: {
          country: "Ukrane",
          city: "Kiev",
        },
        avatar: "https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg"
      },
      {
        id: "4",
        followed: true,
        fullName: "Andrew T.",
        status: "I am free to help you to create good Video Production",
        location: {
          country: "United States",
          city: "Philadelphia",
        },
        avatar: "https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg"
      }
  
    ])
  }

  return (
    <div>
      {
        props.usersPage.users.map(user => (
          <div key={user.id}>
            <div>
              <div className={styles.userAvatar}><img src={user.avatar} alt=""/></div>
              <div>
                {
                  user.followed ? <button type="button" onClick={() => {
                      props.unfollow(user.id)
                    }}>Unfollow</button>
                    : <button type="button" onClick={() => {
                      props.follow(user.id)
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
                {user.location.country}
                <span>{user.location.city}</span>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
};