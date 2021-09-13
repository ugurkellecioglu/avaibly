import axiosClass from "axios"

const axiosConfig = {
    baseURL: 'http://localhost:3000',
};

const axios = axiosClass.create(axiosConfig)

export default axios

