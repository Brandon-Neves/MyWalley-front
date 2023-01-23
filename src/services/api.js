import axios from 'axios'

const BASE_URL = 'http://localhost:5000'

function signUp(body) {
  const promise = axios.post(`${BASE_URL}/cadastro`, body)
  return promise
}

function login(body) {
  const promise = axios.post(`${BASE_URL}/`, body)
  return promise
}

const api = {
  login,
  signUp
}

export default api
