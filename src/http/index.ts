import axios, { AxiosRequestConfig } from 'axios'
import config from '../config'

export const $host = axios.create({
  baseURL: config.REACT_API_URL,
})

export const $authHost = axios.create({
  baseURL: config.REACT_API_URL,
})

const authInterseptor = (config: AxiosRequestConfig) => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
  return config
}

$authHost.interceptors.request.use(authInterseptor)
