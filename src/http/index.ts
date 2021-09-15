import axios from 'axios'
import config from '../config'

export const $host = axios.create({
  baseURL: config.REACT_API_URL,
})
