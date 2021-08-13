import {ActionTypes, DialogPageType} from "./state";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE = "UPDATE-MESSAGE";

export const dialogsReducer = (state: DialogPageType, action: ActionTypes) => {
  
  switch(action.type) {
    case ADD_MESSAGE:
      const newMessageText = {
        id: new Date().getTime(),
        message: action.textMessage
      }
      state.messages.push(newMessageText);
      state.newMessage = "";
      return state;
    case UPDATE_MESSAGE:
      state.newMessage = action.textMessage;
      return state;
    default:
      return state
  }
  
  // if (action.type === ADD_MESSAGE) {
  //   const newMessageText = {
  //     id: new Date().getTime(),
  //     message: action.textMessage
  //   }
  //
  //   state.messages.push(newMessageText);
  //   state.newMessage = "";
  //
  // } else if (action.type === UPDATE_MESSAGE) {
  //   state.newMessage = action.textMessage;
  // }
  // return state
}

export let addMessageActionCreator = (text: string) => ({type: ADD_MESSAGE, textMessage: text} as const);
export let updateMessageActionCreator = (text: string) => ({type: UPDATE_MESSAGE, textMessage: text} as const);