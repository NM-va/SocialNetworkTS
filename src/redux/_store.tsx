import {addPostAC, profileReducer, updateNewPostAC} from "./profile-reducer"
import {addMessageAC, dialogsReducer, updateMessageAC} from "./dialogs-reducer";
import { sidebarReducer } from "./sidebar-reducer";
// import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "./users-reducer";

// type MessageType = {
//   id: number
//   message: string
// }
// type DialogType = {
//   id: number
//   name: string
// }
// type PostType = {
//   id: number
//   message: string
//   likesCount: number
// }
// type ProfilePageType = {
//   messageNewPost: string
//   posts: Array<PostType>
// }
// type DialogPageType = {
//   dialogs: Array<DialogType>
//   messages: Array<MessageType>
//   newMessage: string
// }
// type FriendItemType = {
//   id: number
//   name: string
//   avatar: string
// }
// type SidebarType = {
//   friends: Array<FriendItemType>
// }
// type RootStateType = {
//   profilePage: ProfilePageType
//   dialogsPage: DialogPageType
//   sidebar: SidebarType
// }
//
// export type StateType = {
//     state: RootStateType
// }
// type StoreType = {
//   _state: RootStateType
//   _callSubscriber: () => void
//   subscribe: (observer: () => void) => void
//   getState: () => RootStateType
//   dispatch: (action: ActionTypes) => void
// }
//
// const ADD_POST = "ADD-POST";
// const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
// const ADD_MESSAGE = "ADD-MESSAGE";
// const UPDATE_MESSAGE = "UPDATE-MESSAGE";

// type AddPostActionType = {
//     type: ADD_POST
//     postMessage: string
// }

// export type AddPostActionType = ReturnType<typeof addPostAC>
// export type UpdateNewPostActionType = ReturnType<typeof updateNewPostAC>
// export type AddMessageActionType = ReturnType<typeof addMessageAC>
// export type UpdateMessageActionType = ReturnType<typeof updateMessageAC>
// export type FollowActionType = ReturnType <typeof followAC>
// export type UnFollowActionType = ReturnType <typeof unfollowAC>
// export type SetUsersType = ReturnType <typeof setUsersAC>
// export type SetCurrentPageType = ReturnType <typeof setCurrentPageAC>
// export type SetTotalUsersCount = ReturnType <typeof setTotalUsersCountAC>

// export type ActionTypes =
//     AddPostActionType
//   | UpdateNewPostActionType
//   | AddMessageActionType
//   | UpdateMessageActionType
  // | FollowActionType
  // | UnFollowActionType
  // | SetUsersType
  // | SetCurrentPageType
  // | SetTotalUsersCount




// const _store: StoreType = {
//   _state: {
//     profilePage: {
//       messageNewPost: "it",
//       posts: [
//         {id: 1, message: "How, how are you?", likesCount: 12},
//         {id: 2, message: "It's my first post", likesCount: 11},
//         {id: 3, message: "Blabla", likesCount: 12},
//         {id: 4, message: "Dada", likesCount: 12}
//       ]
//     },
//     dialogsPage: {
//       dialogs: [
//         {id: 1, name: "Dimych"},
//         {id: 2, name: "Andrey"},
//         {id: 3, name: "Sveta"},
//         {id: 4, name: "Sasha"},
//         {id: 5, name: "Victor"},
//         {id: 6, name: "Valera"}
//       ],
//       messages: [
//         {id: 1, message: "Hi"},
//         {id: 2, message: "How is your it-kamasutra?"},
//         {id: 3, message: "Sveta"},
//         {id: 4, message: "Yo"},
//         {id: 5, message: "Yo"},
//         {id: 6, message: "Yo"}
//       ],
//       newMessage: ""
//     },
//     sidebar: {
//       friends: [
//         {
//           id: 1,
//           name: "Andrey",
//           avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo3qbWHSWAYms8owf4do5qdmppgfZWsZAmnQ&usqp=CAU"
//         },
//         {
//           id: 2,
//           name: "Sasha",
//           avatar: "https://lh3.googleusercontent.com/proxy/b4L8ZCPxTRf54szpyY5BYBdquYJ_2uUi6WcpZpG6ecxzhe2uod7JiZCUvcUTG_yxygse0VzFy6j0g46uJa82bMmpScWwQjh5G_Qg-65QlOpxbOGQLPPbhVY"
//         },
//         {
//           id: 3,
//           name: "Sveta",
//           avatar: "https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg"
//         }
//       ]
//     }
//   },
//   _callSubscriber() {
//     console.log("state changed");
//   },
//   getState() {
//     return this._state
//   },
//   subscribe(observer: () => void) {
//     this._callSubscriber = observer;
//   },
//   dispatch(action:ActionTypes) {
//     this._state.profilePage = profileReducer(this._state.profilePage, action);
//     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//     this._state.sidebar = sidebarReducer(this._state.sidebar, action);
//
//     this._callSubscriber();
//   }
// }
//
//
// export default _store;
