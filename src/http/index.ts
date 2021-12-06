import axios, { AxiosRequestConfig } from 'axios'

export const $host = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

export const $authHost = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

const authInterseptor = (config: AxiosRequestConfig) => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
  return config
}

$authHost.interceptors.request.use(authInterseptor)
