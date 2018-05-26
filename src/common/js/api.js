/**
 * 用用axios实现与后台的交互
 */

import axios from 'axios'

axios.defaults.withCredentials = true

const requestUrl = 'https://www.xxx.com'

// 与后台交互的API
export const GET_XXX = (options) => {
    return axios.post(requestUrl + '/???/??', options)
}
