import getConfig from 'next/config';
import { IResponseAPI } from '../../helpers/api.interface';
import {NextRouter} from "next/router";

const {publicRuntimeConfig} = getConfig();

// export interface IOptionFetch {
//     abort?: AbortController,
//     router?: NextRouter,
//     token: string,
// }

export const fetchWrapper = {
    get,
};

function get(url: string) {
    const requestOptions = {
        method: 'GET',
        // headers: authBearer(url, opt.token),
        // signal: opt?.abort?.signal,
    } as RequestInit;
    return fetch(url, requestOptions).then(handleResponse).catch(e => handleErrors(e));
}




function handleResponse(response: any): IResponseAPI {
    return response.text().then((text: any) => {
        const data = text && JSON.parse(text);

        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject({
                status: response.status,
                message: error,
                error: true,
            });
        }

        return {data} as any;
    });
}

function handleErrors(response: any) {

    return {
        status: response.status ?? 500,
        message: response.message,
        error: true,
    } as IResponseAPI;
}