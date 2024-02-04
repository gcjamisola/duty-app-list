import axios from 'axios'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL
const client = axios.create({ baseURL: BACKEND_URL })

/* eslint-disable @typescript-eslint/no-explicit-any */
const ApiWrapper = function (options: any) {
  const onSuccess = function (response: any) {
    return response.data
  }

  //ERROR HANDLER
  const onError = function (error: any) {
    let description = ""
    const has = Object.prototype.hasOwnProperty

    if (error.response) {

      if (has.call(error.response.data, 'error')) {
        description = error.response.data.error[0].value
      } else {
        description = 'We\'re sorry, something went wrong with our network.  Pls try again in a bit.'
      }
    }

    return Promise.reject(error.response || description)
  }

  return (
    client(options)
      .then(onSuccess)
      .catch(onError)
  )
}

export default ApiWrapper