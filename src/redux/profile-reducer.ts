import {ActionTypes} from "./store";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export type PostType = {
  id: number
  message: string
  likesCount: number
}

export type InitialStateType = {
  messageNewPost: string
  posts: Array<PostType>
}

let initialState: InitialStateType = {
  messageNewPost: "it",
  posts: [
    {id: 1, message: "How, how are you?", likesCount: 12},
    {id: 2, message: "It's my first post", likesCount: 11},
    {id: 3, message: "Blabla", likesCount: 12},
    {id: 4, message: "Dada", likesCount: 12}
  ]
};

export const profileReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
  switch (action.type) {
    case ADD_POST: {
      const newPost: PostType = {
        id: new Date().getTime(),
        message: action.postMessage != null ? action.postMessage : "---",
        likesCount: 0
      }
      let stateCopy = {...state};
      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(newPost);
      stateCopy.messageNewPost = "";
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = {...state};
      stateCopy.messageNewPost = action.newText;
      return stateCopy;
    }
    default:
      return state;
  }
}

export let addPostAC = (text: string) => ({type: ADD_POST, postMessage: text} as const);
export let updateNewPostAC = (value: string) => ({type: UPDATE_NEW_POST_TEXT, newText: value} as const);