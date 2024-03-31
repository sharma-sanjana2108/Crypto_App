import axios from "axios"

export const fetchCoins = async() => {
    const response = await axios.get('https://api.coingecko.com/api/v3/search/trending')
    return response.data.coins
}
