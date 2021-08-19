import {ActionTypes} from "./store";

export type FriendItemType = {
    id: number
    name: string
    avatar: string
}

let initialState = {
    friends: [
        {
            id: 1,
            name: "Andrey",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo3qbWHSWAYms8owf4do5qdmppgfZWsZAmnQ&usqp=CAU"
        },
        {
            id: 2,
            name: "Sasha",
            avatar: "https://lh3.googleusercontent.com/proxy/b4L8ZCPxTRf54szpyY5BYBdquYJ_2uUi6WcpZpG6ecxzhe2uod7JiZCUvcUTG_yxygse0VzFy6j0g46uJa82bMmpScWwQjh5G_Qg-65QlOpxbOGQLPPbhVY"
        },
        {
            id: 3,
            name: "Sveta",
            avatar: "https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg"
        }
    ] as Array<FriendItemType>
};

export type InitialStateType = typeof initialState;

export const sidebarReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {

    return state;
}