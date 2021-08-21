import {ActionTypes} from "./store";

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE = "UPDATE-MESSAGE";

export type MessageType = {
    id: number
    message: string
}

export type DialogType = {
    id: number
    name: string
}

let initialState = {
    dialogs: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Victor"},
        {id: 6, name: "Valera"}
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your it-kamasutra?"},
        {id: 3, message: "Sveta"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"},
        {id: 6, message: "Yo"}
    ] as Array<MessageType>,
    newMessage: ""
};

export type InitialStateType = typeof initialState;

export const dialogsReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {

    switch (action.type) {
        case ADD_MESSAGE:
            const newMessageText = {
                id: new Date().getTime(),
                message: action.textMessage
            }
            return {
                ...state,
                messages: [...state.messages, newMessageText],
                newMessage: ""
            };
        case UPDATE_MESSAGE:
            return {
                ...state,
                newMessage: action.textMessage
            };
        default:
            return state
    }
}

export let addMessageAC = (text: string) => ({type: ADD_MESSAGE, textMessage: text} as const);
export let updateMessageAC = (text: string) => ({type: UPDATE_MESSAGE, textMessage: text} as const);