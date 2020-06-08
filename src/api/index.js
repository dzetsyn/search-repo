import axios from 'axios';


const httpClient = axios.create();
httpClient.defaults.baseURL = `https://api.github.com`;

const get = async (url, data) => {
    return new Promise((resolve, reject) => {
        httpClient({ method: 'GET', url, params: data })
            .then(async (response) => {
                resolve(response.data);
            })
            .catch(function (error) {
                //console.log({ error })
                reject(error);
            });
    });
}


export { get };