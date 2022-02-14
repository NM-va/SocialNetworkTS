import axios, {AxiosResponse} from "axios";
import {UserItemType} from "../redux/users-reducer";
import {ProfileDataFormType} from "../components/Profile/ProfileInfo/ProfileDataForm";

type GetUsersResponseType = {
    items: Array<UserItemType>
    totalCount: number
    error: string
}

type CommonResponseType = {
    resultCode: number
    messages: Array<string>
    data: {}
}

export type LoginParamsType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: boolean
}

export type FormikErrorType = {
    email: string
    password: string
    rememberMe?: boolean
}

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "968a1a28-eb55-43a7-89bc-ff44bc6685f0"
    }
});

export const usersAPI = {
    getUsers (currentPage: number = 1, pageSize: number = 10): Promise <GetUsersResponseType> {
        return instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    followUser(userId: string) {
        return instance.post<CommonResponseType>(`follow/${userId}`, {}, {});
    },
    unfollowUser(userId: string) {
        return instance.delete<CommonResponseType>(`follow/${userId}`, {});
    },
    getProfile(userId: string) {
        console.warn('Obsolete method/ Please profileAPI object');
        return profileAPI.getProfile(userId);
    },
};

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status});
    },
    savePhoto(photoFIle: any) {
        const formData = new FormData();
        formData.append("image", photoFIle);
        return instance.put(`profile/photo`, formData,{
            headers: {
                "Content-Type" : "multipart/form-data"
            }
        });
    },
    saveProfile(profile: ProfileDataFormType) {
        return instance.put(`profile`, profile);
    },
};

export const authAPI = {
    login(data: LoginParamsType) {
        return instance.post<CommonResponseType>(`auth/login`, data, {})
    },
    me() {
        return instance.get(`auth/me`)
    },
    logout() {
        return instance.delete<CommonResponseType>(`auth/login`)
    },
};