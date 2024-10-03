import axios from 'axios';
import { trimStart } from 'lodash';
import querystring from 'querystring';

// Get method
const api_version = 'api/v1';
const endPoint = `https://apidev.benchondemand.com/${api_version}/`;

export const get = async (url, params, headers = {}) => {
    const queryParams = querystring.stringify(params);
    const HOST_URL = process.env.REACT_APP_API_HOST;
    url = trimStart(`${endPoint}${url}`, '/');
    return axios.get(`${url}?${queryParams}`, {
        headers: { ...getHeaders().headers, Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
};

// Get blob method
export const getBlob = async (url, params, headers = {}) => {
    const queryParams = querystring.stringify(params);
    const HOST_URL = process.env.REACT_APP_API_HOST;
    url = trimStart(url, '/');
    return axios.get(`${url}?${queryParams}`, {
        responseType: 'blob',
        headers: { ...getHeaders().headers, Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
};

// Post method
export const post = async (url, data) => {
    const HOST_URL = process.env.REACT_APP_API_HOST;
    url = trimStart(url, '/');
    return axios.post(`${url}`, data, {
        headers: getHeaders().headers
    });
};

// Patch method
export const patch = async (url, data) => {
    const HOST_URL = process.env.REACT_APP_API_HOST;
    url = trimStart(url, '/');
    return axios.patch(`${HOST_URL}/${url}`, data, {
        headers: getHeaders().headers
    });
};

// Put method
export const put = async (url, data) => {
    const HOST_URL = process.env.REACT_APP_API_HOST;
    url = trimStart(url, '/');
    return axios.put(`${HOST_URL}/${url}`, data, {
        headers: getHeaders().headers
    });
};

// Delete method
export const Delete = async (url, data) => {
    const HOST_URL = process.env.REACT_APP_API_HOST;
    url = trimStart(url, '/');
    return axios.delete(`${HOST_URL}/${url}`, {
        data,
        headers: getHeaders().headers
    });
};

// Get Headers method
export const getHeaders = () => {
    return {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',  // Add this if necessary
        },
    };
};
