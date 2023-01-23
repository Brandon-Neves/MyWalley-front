import axios from 'axios'

const BASE_URL = 'http://localhost:5000'

function createTransaction(body, type, token) {
  const transactionBody = {
    ...body,
    type
  }
  const promise = axios
    .post(`${BASE_URL}/nova-entrada`, transactionBody, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .catch(err => {
      return err.response
    })
  return promise
}

const transactionsApi = {
  createTransaction
}

export default transactionsApi
