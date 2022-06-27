import { fetchWrapper } from "../helpers";

export const loginService = {
    login
}

const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/authenticate`;

function login(params) {
    return fetchWrapper.post(baseUrl, params);
}