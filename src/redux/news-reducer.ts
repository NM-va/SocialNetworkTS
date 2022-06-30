import avatar1 from "../assets/images/avatar1.jpg";
import avatar2 from "../assets/images/avatar2.jpg";
import avatar3 from "../assets/images/avatar3.jpg";
import avatar4 from "../assets/images/avatar4.jpg";
import avatar5 from "../assets/images/avatar5.jpg";

export type NewsFriendItemType = {
    id: number
    name: string
    avatar: string
    address: string
    news: {textNews: string, likes: number}
}

let initialState = {
    friends: [
        {
            id: 1,
            name: "Andrey",
            avatar: avatar1,
            address: "/",
            news: {
                textNews: "If someone missed it, check out the new song by System of a Revenge! I thinks they are going back to their roots...",
                likes: 10
            }
        },
        {
            id: 2,
            name: "Sveta",
            avatar: avatar2,
            address: "/",
            news: {
                textNews: "Hey guys! We are gona be playing this Saturday of The Marina Bar for their new Mystic Deer Party. If you wanna hang out and have a really good time, come and join us. We’l be waiting for you!",
                likes: 23
            }
        },
        {
            id: 3,
            name: "Sasha",
            avatar: avatar3,
            address: "/",
            news: {
                textNews: "Hey Nastya, you should really check out this new song by Iron Maid. The next time they come to the city we should totally go!",
                likes: 2
            }
        },
        {
            id: 4,
            name: "Sergey",
            avatar: avatar4,
            address: "/",
            news: {
                textNews: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
                likes: 11
            }
        },
        {
            id: 5,
            name: "Nastya",
            avatar: avatar5,
            address: "/",
            news: {
                textNews: "If you would like to practice using reduce I recommend signing up to freeCodeCamp and completing as many of the intermediate algorithms as you can using reduce.",
                likes: 40
            }
        }
    ] as Array<NewsFriendItemType>
};

export type InitialStateType = typeof initialState;
type ActionTypes = {}
export const newsReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    return state;
};