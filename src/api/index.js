import axios from 'axios';


const httpClient = axios.create();
httpClient.defaults.timeout = 9000;
httpClient.defaults.baseURL = `https://api.github.com`;

const get = async (url, data) => {
    return new Promise((resolve, reject) => {
        httpClient({ method: 'GET', url, params: data })
            .then(async (response) => {
                resolve(response.data);
            })
            .catch(function (error) {
                reject(error);
            });
    });
}


export { get };