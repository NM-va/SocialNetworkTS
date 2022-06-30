import {authAPI, LoginParamsType, securityAPI} from "../api/api";
import {StoreType} from "./redux-store";
import {ThunkAction} from "redux-thunk";

const SET_USER_DATA = "samurai-network/auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "samurai-network/security/GET_CAPTCHA_URL";

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
    captchaUrl: null | string
}

let initialState:InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null // if null, then captcha is not required
};

export type SetAuthUserDataType = ReturnType<typeof setAuthUserData>
export type GetCaptchaUrlSuccessDataType = ReturnType<typeof getCaptchaUrlSuccess>
type ActionTypes = SetAuthUserDataType | GetCaptchaUrlSuccessDataType
type ThunkType = ThunkAction<void, StoreType, unknown, ActionTypes>

export const authReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {

    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            };

        default:
            return state;
    }
};

//actions
export const setAuthUserData = (userId: string | null, login: string | null, email: string | null, isAuth: boolean) =>({type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}} as const);
export const getCaptchaUrlSuccess = (captchaUrl: string) =>({type: GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl}} as const);

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
    } else if (response.data.resultCode === 10) {
        dispatch(getCaptchaUrl());
    }
};

export const getCaptchaUrl = () => async (dispatch: any) => {
    const response = await securityAPI.getCaptcha();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export const logout = () => (dispatch: any) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
};
