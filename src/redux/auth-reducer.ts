import {ActionTypes} from "./redux-store";

const SET_USER_DATA = "SET_USER_DATA";



let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

export type InitialStateType = typeof initialState;

export const authReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        default:
            return state;
    }

};

export const setAuthUserData = (userId: string, email: string, login: string) =>({type: SET_USER_DATA,
    data: {userId, email, login}} as const);