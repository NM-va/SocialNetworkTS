import {ActionTypes, DialogPageType} from "./store";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE = "UPDATE-MESSAGE";

let initialState = {
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
};

export const dialogsReducer = (state: DialogPageType = initialState, action: ActionTypes) => {
  
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