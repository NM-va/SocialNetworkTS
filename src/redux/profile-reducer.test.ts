import {addPost, deletePost, InitialStateType, profileReducer} from "./profile-reducer";

let state: InitialStateType = {
    posts: [
        {id: 1, message: "How, how are you?", likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 11},
        {id: 3, message: "Blabla", likesCount: 12},
        {id: 4, message: "Dada", likesCount: 12}
    ],
    profile: null,
    status: '',
};



it("length of post should be incremented", () => {
    let action = addPost("it-kamasutra");
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(5);
}) ;

it("message of new post should be correct", () => {
    let action = addPost("it-kamasutra");
    let newState = profileReducer(state, action);

    expect(newState.posts[4].message).toBe("it-kamasutra");
}) ;

it("after deleting length of messages should be decrement", () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
}) ;

it("after deleting length of messages shouldn't be decrement if id is incorrect", () => {
    let action = deletePost(1000);
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(4);
}) ;
