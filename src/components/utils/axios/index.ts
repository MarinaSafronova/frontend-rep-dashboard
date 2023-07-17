import axios from 'axios'

const token = sessionStorage.getItem('token')

export const instance = axios.create({
    baseURL: `http://localhost:5000`,
    timeout: 1000,
    headers: {'X-Requested-With': 'XMLHttpRequest'},
})


export const newsInstance = axios.create({
    baseURL: 'https://min-api.cryptocompare.com/data/v2/',
    timeout: 1000,
})

export const instanceAuth = axios.create({
    baseURL: `http://localhost:5000`,
    timeout: 1000,
    headers: {
        'X-Custom-Header': 'foobar',
        Authorization: `Bearer ${token}`,
    },
})

export const coinGeckoApi = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' },
})