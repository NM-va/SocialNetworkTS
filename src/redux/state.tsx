import {addPostActionCreator, profileReducer, updateNewPostActionCreator} from "./profile-reducer"
import {addMessageActionCreator, dialogsReducer, updateMessageActionCreator} from "./dialogs-reducer";
import { sidebarReducer } from "./sidebar-reducer";

export type MessageType = {
  id: number
  message: string
}

export type DialogType = {
  id: number
  name: string
}

export type PostType = {
  id: number
  message: string
  likesCount: number
}

export type ProfilePageType = {
  messageNewPost: string
  posts: Array<PostType>
}

export type DialogPageType = {
  dialogs: Array<DialogType>
  messages: Array<MessageType>
  newMessage: string
}

export type FriendItemType = {
  id: number
  name: string
  avatar: string
}

export type SidebarType = {
  friends: Array<FriendItemType>
}

export type RootStateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogPageType
  sidebar: SidebarType
}
//
// export type StateType = {
//     state: RootStateType
// }

export type StoreType = {
  _state: RootStateType
  _callSubscriber: () => void
  subscribe: (observer: () => void) => void
  getState: () => RootStateType
  dispatch: (action: ActionTypes) => void
}

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE = "UPDATE-MESSAGE";

// type AddPostActionType = {
//     type: ADD_POST
//     postMessage: string
// }

type AddPostActionType = ReturnType<typeof addPostActionCreator>
type UpdateNewPostActionType = ReturnType<typeof updateNewPostActionCreator>
type AddMessageActionType = ReturnType<typeof addMessageActionCreator>
type UpdateMessageActionType = ReturnType<typeof updateMessageActionCreator>

export type ActionTypes = AddPostActionType | UpdateNewPostActionType | AddMessageActionType | UpdateMessageActionType




const store: StoreType = {
  _state: {
    profilePage: {
      messageNewPost: "it",
      posts: [
        {id: 1, message: "How, how are you?", likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 11},
        {id: 3, message: "Blabla", likesCount: 12},
        {id: 4, message: "Dada", likesCount: 12}
      ]
    },
    dialogsPage: {
      dialogs: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Victor"},
        {id: 6, name: "Valera"}
      ],
      messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your it-kamasutra?"},
        {id: 3, message: "Sveta"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"},
        {id: 6, message: "Yo"}
      ],
      newMessage: ""
    },
    sidebar: {
      friends: [
        {
          id: 1,
          name: "Andrey",
          avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo3qbWHSWAYms8owf4do5qdmppgfZWsZAmnQ&usqp=CAU"
        },
        {
          id: 2,
          name: "Sasha",
          avatar: "https://lh3.googleusercontent.com/proxy/b4L8ZCPxTRf54szpyY5BYBdquYJ_2uUi6WcpZpG6ecxzhe2uod7JiZCUvcUTG_yxygse0VzFy6j0g46uJa82bMmpScWwQjh5G_Qg-65QlOpxbOGQLPPbhVY"
        },
        {
          id: 3,
          name: "Sveta",
          avatar: "https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg"
        }
      ]
    }
  },
  _callSubscriber() {
    console.log("state changed");
  },
  getState() {
    return this._state
  },
  subscribe(observer: () => void) {
    this._callSubscriber = observer;
  },
  dispatch(action:ActionTypes) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
  
    this._callSubscriber();
  }
}


export default store;
