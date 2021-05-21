import axios from 'axios' // 引用axios

let baseURL = 'http://prod.xxx.com'
if (process.env.NODE_ENV === 'development') {
  baseURL = '/proxyApi'
} else if (process.env.NODE_ENV === 'test') {
  baseURL = 'http://test.xxx.com'
} else if (process.env.NODE_ENV === 'staging') {
  baseURL = 'http://staging.xxx.com'
} else if (process.env.NODE_ENV === 'production') {
  baseURL = 'http://prod.xxx.com'
}

const instance = axios.create({
  baseURL,
  timeout: 60000,
  withCredentials: true,
  headers: {
    get: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      // 在开发中，一般还需要单点登录或者其他功能的通用请求头，可以一并配置进来
    },
    post: {
      'Content-Type': 'application/json;charset=utf-8'
      // 在开发中，一般还需要单点登录或者其他功能的通用请求头，可以一并配置进来
    }
  }
})

/**
 * 1.状态码 401、403
 * 2.状态码非200抛出异常
 * 3.避免重复请求
 */
// 请求拦截器
instance.interceptors.request.use(
  config => {
    // 每次发送请求之前判断是否存在token
    // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况，此处token一般是用户完成登录后储存到localstorage里的
    // token && (config.headers.Authorization = token)
    return config
  },
  error => {
    return Promise.error(error)
  })
// 响应拦截器
instance.interceptors.response.use(response => {
  // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
  // 否则的话抛出错误
  if (response.status === 200) {
    if (response.data.code === 403) {
      // 未授权调取授权接口
    } else if (response.data.code === 401) {
      // 未登录跳转登录页
    } else {
      return Promise.resolve(response)
    }
  } else {
    return Promise.reject(response)
  }
}, error => {
  // 我们可以在这里对异常状态作统一处理
  if (error.response.status) {
    // 处理请求失败的情况
    // 对不同返回码对相应处理
    return Promise.reject(error.response)
  }
})

export function get (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params
    }).then((res) => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

export function post (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, {
      params
    }).then((res) => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}
