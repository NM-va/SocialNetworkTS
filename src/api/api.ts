import axios from "axios";
import {UserItemType} from "../redux/users-reducer";

type getUsersResponseType = {
    items: Array<UserItemType>
    totalCount: number
    error: string
}

type commonResponseType = {
    resultCode: number
    messages: Array<string>
    data: {}
}

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "968a1a28-eb55-43a7-89bc-ff44bc6685f0"
    }
});

export const usersAPI = {
    getUsers (currentPage: number = 1, pageSize: number = 10): Promise <getUsersResponseType> {
        return instance.get<getUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    followUser(userId: string) {
        return instance.post<commonResponseType>(`follow/${userId}`, {}, {});
    },
    unfollowUser(userId: string) {
        return instance.delete<commonResponseType>(`follow/${userId}`, {});
    },
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`);
    },
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`, {})
    }
}

