const SET_USER_DATA = "SET_USER_DATA";

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