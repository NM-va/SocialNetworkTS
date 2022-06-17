export type SongItemType = {
    id: number
    name: string
    author: string
    duration: string
    imgSrc: string
}

let initialState = {
    songList: [
        {
            id: 1,
            name: 'Sanctified with Dynamite',
            author: 'PowerWolf',
            duration: '3:51',
            imgSrc: 'https://cdnb.artstation.com/p/assets/images/images/010/532/065/large/zsofia-dankova-1.jpg?1539776234'
        },
        {
            id: 2,
            name: 'Army of the Night',
            author: 'PowerWolf',
            duration: '3:51',
            imgSrc: 'https://i.pinimg.com/originals/10/37/36/1037361b721513a7168e1dae07139f55.jpg'
        },
        {
            id: 3,
            name: 'Higher Than Heaven',
            author: 'PowerWolf',
            duration: '3:51',
            imgSrc: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b81633f7-ac45-4e1d-9255-46297d588240/dcf39re-204aaff0-a53f-4f9b-83d3-81239bf35778.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2I4MTYzM2Y3LWFjNDUtNGUxZC05MjU1LTQ2Mjk3ZDU4ODI0MFwvZGNmMzlyZS0yMDRhYWZmMC1hNTNmLTRmOWItODNkMy04MTIzOWJmMzU3NzgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.fE1cp7I7GjauqJ8gKCoqz2cK1BHjeAwhivRnE7oMsVo'
        },
        {
            id: 4,
            name: 'Incense & Iron',
            author: 'PowerWolf',
            duration: '3:51',
            imgSrc: 'https://i.pinimg.com/originals/2b/ca/63/2bca632180d842a6f15908154ce862bb.jpg'
        },
        {
            id: 5,
            name: 'Venom of Venus',
            author: 'PowerWolf',
            duration: '3:51',
            imgSrc: 'https://steamuserimages-a.akamaihd.net/ugc/941709259346307842/830C554F58DDEF61ACD21D28FBC3FC4FEAAAE136/'
        },
        {
            id: 6,
            name: 'Sanctified with Dynamite',
            author: 'PowerWolf',
            duration: '3:51',
            imgSrc: 'https://cdnb.artstation.com/p/assets/images/images/010/532/065/large/zsofia-dankova-1.jpg?1539776234'
        },
        {
            id: 7,
            name: 'Army of the Night',
            author: 'PowerWolf',
            duration: '3:51',
            imgSrc: 'https://i.pinimg.com/originals/10/37/36/1037361b721513a7168e1dae07139f55.jpg'
        },
        {
            id: 8,
            name: 'Higher Than Heaven',
            author: 'PowerWolf',
            duration: '3:51',
            imgSrc: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b81633f7-ac45-4e1d-9255-46297d588240/dcf39re-204aaff0-a53f-4f9b-83d3-81239bf35778.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2I4MTYzM2Y3LWFjNDUtNGUxZC05MjU1LTQ2Mjk3ZDU4ODI0MFwvZGNmMzlyZS0yMDRhYWZmMC1hNTNmLTRmOWItODNkMy04MTIzOWJmMzU3NzgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.fE1cp7I7GjauqJ8gKCoqz2cK1BHjeAwhivRnE7oMsVo'
        },
        {
            id: 9,
            name: 'Incense & Iron',
            author: 'PowerWolf',
            duration: '3:51',
            imgSrc: 'https://i.pinimg.com/originals/2b/ca/63/2bca632180d842a6f15908154ce862bb.jpg'
        },
        {
            id: 10,
            name: 'Venom of Venus',
            author: 'PowerWolf',
            duration: '3:51',
            imgSrc: 'https://steamuserimages-a.akamaihd.net/ugc/941709259346307842/830C554F58DDEF61ACD21D28FBC3FC4FEAAAE136/'
        },
    ] as Array<SongItemType>
};

export type InitialStateType = typeof initialState;
type ActionTypes = {}
export const musicReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    return state;
};