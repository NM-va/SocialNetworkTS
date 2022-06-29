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
            name: 'This is Japan',
            author: 'FREE FLOW FLAVA',
            duration: '2:42',
            imgSrc: 'https://avatars.yandex.net/get-music-content/5966316/476b306e.a.22439911-1/200x200'
        },
        {
            id: 2,
            name: 'Death Ninja',
            author: 'FREE FLOW FLAVA',
            duration: '3:38',
            imgSrc: 'https://avatars.yandex.net/get-music-content/4382102/bfb762cc.a.17672843-1/200x200'
        },
        {
            id: 3,
            name: 'Red Dragon',
            author: 'FREE FLOW FLAVA',
            duration: '1:41',
            imgSrc: 'https://avatars.yandex.net/get-music-content/4388221/16a6b4d0.a.17672880-1/200x200'
        },
        {
            id: 4,
            name: 'Mistake',
            author: 'FREE FLOW FLAVA',
            duration: '2:45',
            imgSrc: 'https://avatars.yandex.net/get-music-content/1880735/70b6d66c.a.9255001-1/200x200'
        },
        {
            id: 5,
            name: 'Ray of Hope',
            author: 'FREE FLOW FLAVA',
            duration: '1:59',
            imgSrc: 'https://avatars.yandex.net/get-music-content/5234847/15fd0031.a.17672925-1/200x200'
        },
        {
            id: 6,
            name: '014',
            author: 'FREE FLOW FLAVA',
            duration: '2:02',
            imgSrc: 'https://avatars.yandex.net/get-music-content/2383988/9ec0cdf1.a.10166367-1/200x200'
        },
        {
            id: 7,
            name: '002',
            author: 'FREE FLOW FLAVA',
            duration: '2:01',
            imgSrc: 'https://avatars.yandex.net/get-music-content/2383988/9ec0cdf1.a.10166367-1/200x200'
        },
        {
            id: 8,
            name: 'Eternal',
            author: 'FREE FLOW FLAVA',
            duration: '2:09',
            imgSrc: 'https://avatars.yandex.net/get-music-content/5280749/8c10dbcd.a.17678543-1/200x200'
        },
        {
            id: 9,
            name: 'Itachi Uchiha',
            author: 'FREE FLOW FLAVA',
            duration: '1:57',
            imgSrc: 'https://avatars.yandex.net/get-music-content/5280749/c9a7d301.a.17672907-1/200x200'
        },
        {
            id: 10,
            name: '001',
            author: 'FREE FLOW FLAVA',
            duration: '2:05',
            imgSrc: 'https://avatars.yandex.net/get-music-content/2383988/9ec0cdf1.a.10166367-1/200x200'
        },
    ] as Array<SongItemType>
};

export type InitialStateType = typeof initialState;
type ActionTypes = {}
export const musicReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    return state;
};