import axiosClass from "axios"

const axiosConfig = {
    baseURL: 'http://agile-temple-31848.herokuapp.com',
};

const axios = axiosClass.create(axiosConfig)

export default axios

