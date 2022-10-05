import {
    ResCryptoList
} from "./interface";

import {fetchWrapper} from "./fetch-wrapper";

export const cryptoService = {
    getCryptoList
}

async function getCryptoList() {

    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&per_page=10";
    interface IResponseEndpoint {
        status: number;
        message: string;
        error: boolean;
        data: ResCryptoList;
    }
    const res = await fetchWrapper.get(url);
    return res as IResponseEndpoint;
}