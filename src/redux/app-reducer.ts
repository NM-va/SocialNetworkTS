import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

let initialState = {
    initialized: false,
    globalError: null
};

export type InitialStateType = typeof initialState;

export type InitializedSuccessType = ReturnType<typeof initializedSuccess>
type ActionTypes = InitializedSuccessType

export const appReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            };
            
        default:
            return state;
    }
};
//actions
export const initializedSuccess = () =>({type: INITIALIZED_SUCCESS} as const);

//thunks
export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());
    promise.then(() => {
        dispatch(initializedSuccess());
    });
};
