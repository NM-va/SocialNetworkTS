import {ActionTypes, PostType, ProfilePageType} from "./state";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const profileReducer = (state: ProfilePageType, action: ActionTypes) => {

  switch (action.type) {
    case ADD_POST:
      const newPost: PostType = {
        id: new Date().getTime(),
        message: action.postMessage != null ? action.postMessage : "---",
        likesCount: 0
      }
      state.posts.push(newPost);
      state.messageNewPost = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.messageNewPost = action.newText;
      return state;
    default:
      return state;
  }
  
  // if (action.type === ADD_POST) {
  //   const newPost: PostType = {
  //     id: new Date().getTime(),
  //     message: action.postMessage != null ? action.postMessage : "---",
  //     likesCount: 0
  //   }
  //
  //   state.posts.push(newPost);
  //   state.messageNewPost = "";
  // } else if (action.type === UPDATE_NEW_POST_TEXT) {
  //   state.messageNewPost = action.newText;
  // }
  // return state
}

export let addPostActionCreator = (text: string) => ({type: ADD_POST, postMessage: text} as const);
export let updateNewPostActionCreator = (value: string) => ({type: UPDATE_NEW_POST_TEXT, newText: value} as const);