import axios from 'axios';
import { BASE_URL } from '.';

export const mainUrl = BASE_URL;

export const Requests = {};

// Set config defaults when creating the instance
export const instance = axios.create({
    baseURL: mainUrl
});

// Add a response interceptor
instance.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        if (error?.response) {
            if ([403, 401].includes(error?.response?.status)) {
                alert('Invalid user Account or Key');
            }

            return error?.response;
        } else {
            alert('Please ensure you are connected to the internet');
            return false;
        }
    }
);

Requests.fetchMovies = async (
    url,
    method
) => {
    instance.defaults.baseURL = mainUrl;

    try {
        const response = await instance(url, {
            method
        });
        return response?.data;
    } catch (error) {
        return error?.response;
    }
};

Requests.fetchSingleMovieCast = async (
    url,
    method
) => {
    instance.defaults.baseURL = mainUrl;

    try {
        const response = await instance(url, {
            method
        });
        return response?.data;
    } catch (error) {
        return error?.response;
    }
};

Requests.fetchSingleMovie = async (
    url,
    method
) => {
    instance.defaults.baseURL = mainUrl;

    try {
        const response = await instance(url, {
            method
        });
        return response?.data;
    } catch (error) {
        return error?.response;
    }
};

