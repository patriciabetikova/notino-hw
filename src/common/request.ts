import axios, { Method } from "axios"
import { config } from "config"

const request = (method: Method) => (url: string) =>
  new Promise((resolve, reject) => {
    return axios({
      method,
      url: config.apiRoot + url,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(x => {
        resolve(x.data)
      })
      .catch(error => {
        return reject(error)
      })
  })

export const get = request("get")
