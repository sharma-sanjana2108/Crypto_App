import axios from "axios"

const API_URL = "/api/user/"



const register = async(formData) => {
        const response = await axios.post(API_URL + 'register', formData)
        localStorage.setItem('user', JSON.stringify(response.data))
        return response.data;
}

const login = async(formData) => {
        const response = await axios.post(API_URL + 'login', formData)
        localStorage.setItem('user', JSON.stringify(response.data))
        return response.data;
}

export const fetchCoins = async() => {
    const response = await axios.get('https://api.coingecko.com/api/v3/search/trending')
    return response.data.coins
}

const cryptoService = {
    register,
    login,
}

export default cryptoService;