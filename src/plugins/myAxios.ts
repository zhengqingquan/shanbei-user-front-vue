/**
 * zhengqingquan
 * UTF-8
 */

/**
 * 一、通常浏览器会提供发送请求的API，例如：XMLHttpRequest、Fetch API或第三方库。
 * 而JavaScript在浏览器中调用各种浏览器API去发送HTTP请求、操作浏览历史、访问本地存储（比如文件上传）等。
 *
 * 二、Axios是一个基于Promise的HTTP客户端。
 * 它是对浏览器提供的XMLHttpRequest和Node.js提供的http模块的封装。
 * 使得在浏览器和Node.js环境中发送HTTP请求变得更加容易。
 *
 * 三、而Promise是JavaScript中的一种对象，用于表示异步操作的最终完成或失败，并且可以方便地对异步操作进行链式调用和错误处理。
 * Promise有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。
 * 当异步操作完成时，Promise 可以从 pending 状态转换为 fulfilled 或 rejected 状态。
 * Promise对象可以通过then()方法进行链式调用，then()方法接收两个参数，一个用于处理成功的回调函数，一个用于处理失败的回调函数。
 * 如果异步操作成功，则调用成功回调函数，并将异步操作的结果作为参数传递给回调函数；如果异步操作失败，则调用失败回调函数，并将错误信息作为参数传递给回调函数。
 * 同时，then()方法也会返回一个新的Promise对象，因此可以在then()方法中进行链式调用。
 * 除了then()方法外，Promise还提供了其他方法，例如catch()方法用于处理异常情况，finally()方法用于在异步操作结束后执行特定的操作。
 * 通过使用Promise，可以使得异步操作变得更加清晰、易于理解和维护。
 */

import axios from "axios";

/**
 * 创建实例时配置默认值，定义一个自己的baseURL。
 * @type {axios.AxiosInstance}
 */
const myAxios = axios.create({
    baseURL: 'http://localhost:8080'
});

/**
 * 向后台发送请求的时候要携带上请求凭证。
 * 该值默认情况下为false。
 * @type {boolean}
 */
myAxios.defaults.withCredentials = true;

/**
 * 添加请求拦截器
 * 第一个参数是成功时的处理函数，第二个参数是失败时的处理函数。
 * 成功时的处理函数接收一个配置对象，失败时的处理函数接收一个错误对象。
 * 使用这个方法，您可以在发送请求之前对请求进行全局的处理。
 * Axios拦截器允许在请求或响应被 then 或 catch 处理之前拦截它们。
 */
myAxios.interceptors.request.use(
    // 在发送请求之前做些什么
    function (config) {
        console.log("请求拦截器拦截了请求。", config)
        return config;
    },
    // 对请求错误做些什么
    function (error) {
        console.log("请求拦截器拦截了请求，但发生了错误。", error)
        return Promise.reject(error);
    }
);

/**
 * 添加响应拦截器
 * 第一个参数是成功时的处理函数，第二个参数是失败时的处理函数。
 * 成功时的处理函数接收一个响应对象，失败时的处理函数接收一个错误对象。
 * 使用这个方法，可以在发送请求后对响应进行全局的处理。
 * Axios拦截器允许在请求或响应被 then 或 catch 处理之前拦截它们。
 */
myAxios.interceptors.response.use(
    function (response) {
        console.log("我收到了响应。", response)
        // 2xx 范围内的状态码都会触发该函数。
        // 对响应数据做点什么
        return response.data;
    }, function (error) {
        // 超出 2xx 范围的状态码都会触发该函数。
        // 对响应错误做点什么
        console.log("我收到了响应。但响应错误。", error)
        return Promise.reject(error);
    }
);

export default myAxios;

