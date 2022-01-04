import {authAPI, LoginParamsType} from "../api/api";
import {StoreType} from "./redux-store";
import {ThunkAction} from "redux-thunk";

const SET_USER_DATA = "samurai-network/auth/SET_USER_DATA";

// let initialState = {
//     userId: null,
//     email: null,
//     login: null,
//     isAuth: false,
// };
//
// export type InitialStateType = typeof initialState;

export type InitialStateType = {
    userId: null | string
    email: null | string
    login: null | string
    isAuth: boolean
}

let initialState:InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

export type SetAuthUserDataType = ReturnType<typeof setAuthUserData>
type ActionTypes = SetAuthUserDataType
type ThunkType = ThunkAction<void, StoreType, unknown, ActionTypes>

export const authReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            };
            
        default:
            return state;
    }
};
//actions
export const setAuthUserData = (userId: string | null, email: string | null, login: string | null, isAuth: boolean) =>({type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}} as const);

//thunks
export const getAuthUserData = ():ThunkType => async (dispatch: any) => {
    const response = await authAPI.me();
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(setAuthUserData(id, login, email, true));
    }
};

export const login = (data: LoginParamsType) => async (dispatch: any) => {
    const response = await authAPI.login(data);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    }
};

export const logout = () => (dispatch: any) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
};
