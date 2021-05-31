import {request} from "./network";

export const login = (token: string) => {
    return request('login/', {token})
}
