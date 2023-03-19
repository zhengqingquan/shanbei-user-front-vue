// 创建实例时配置默认值
import axios from "axios";

// 定义一个自己的baseurl
const myAxios = axios.create({
    baseURL: 'http://localhost:8080'
});

// 向后台发送请求的时候要携带上请求凭证。
myAxios.defaults.withCredentials=true;

// 添加请求拦截器
myAxios.interceptors.request.use(function (config) {
    console.log("请求拦截器拦截了请求。",config)
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
myAxios.interceptors.response.use(function (response) {
    console.log("我收到了响应。",response)
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response.data;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default myAxios;

