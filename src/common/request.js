export default {
  config: {
    baseURL: process.env.VUE_APP_BASE_API,
    // 处理token的方法
    getToken() {
      let token = uni.getStorageSync('token');
      if (!token) {
        // 无token的处理
        // return uni.reLaunch({
        //   // 跳转到登录页面
        //   // url: '/pages/login/login'
        // })
      }
      return token || ''
    },
    // 响应拦截器
    beforeRequest(options = {}) {
      return new Promise((resolve, reject) => {
        let header = {
          token: this.getToken(),
          "Content-Type": "application/json",
        }
        // 拼接url
        options.url = this.baseURL + options.url;
        options.method = options.method || 'GET';
        // 封装自己的请求头
        options.header = Object.assign(header, options.header)
        resolve(options)
      })
    },
    // 请求拦截器
    handleResponse(data) {
      return new Promise((resolve, reject) => {
        const [err, res] = data;
        // 处理错误
        if (res && res.statusCode !== 200) {
          let msg = res.data.msg || '请求错误';
          uni.showToast({
            icon: 'none',
            title: msg
          }) 
          return reject(msg);
        }
        if (err) {
          uni.showToast({
            icon: 'none',
            title: '请求错误'
          }) 
          return reject(err);
        }
        return resolve(res.data)
      })
    }
  },
  // request 请求
  request(options = {}) {
    return this.config.beforeRequest(options).then(opt => {
      // 这里看不懂的可以看上面 uni.request 三种请求方式的第二种
      return uni.request(opt)
    }).then(res => this.config.handleResponse(res))
  }
}