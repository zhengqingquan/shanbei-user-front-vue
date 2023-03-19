import myAxios from "../plugins/myAxios";
import {Toast} from "vant";
import {getCurrentUserState, setCurrentUserState} from "../states/user";


// 如果访问后台成功，则返回数据。否则返回null
export const getCurrentUser = async () => {
    // 这里是缓存，如果用户量不大，可以不用这个。
    // 如果要获取可以使用路由钩子。路由守卫，每次切换页面都去获取一次用户信息。
    // 因为使用current可以永远拿到用户最新的值。
    // const currentUser = getCurrentUserState();
    // if (currentUser) {
    //     return currentUser;
    // }


    // 不存在则从远程获取。
    const res = await myAxios.get('/user/current');
    if (res.code === 0) {
        setCurrentUserState(res.data);
        return res.data;
    }
    return null;
}