import avatar1 from "../assets/images/avatar1.jpg";
import avatar2 from "../assets/images/avatar2.jpg";
import avatar3 from "../assets/images/avatar3.jpg";
import avatar4 from "../assets/images/avatar4.jpg";
import avatar5 from "../assets/images/avatar5.jpg";

export type FriendItemType = {
    id: number
    name: string
    avatar: string
    address: string
}

let initialState = {
    friends: [
        {
            id: 1,
            name: "Andrey",
            avatar: avatar1,
            address: "/"
        },
        {
            id: 2,
            name: "Sveta",
            avatar: avatar2,
            address: "/"
        },
        {
            id: 3,
            name: "Sasha",
            avatar: avatar3,
            address: "/"
        },
        {
            id: 4,
            name: "Sergey",
            avatar: avatar4,
            address: "/"
        },
        {
            id: 5,
            name: "Nastya",
            avatar: avatar5,
            address: "/"
        }
    ] as Array<FriendItemType>
};

export type InitialStateType = typeof initialState;
type ActionTypes = {}
export const sidebarReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    return state;
};