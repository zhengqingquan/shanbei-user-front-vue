/**
 * zhengqingquan
 * UTF-8
 */

/**
 * 用于存用户的状态。
 * 这里相当于给了一个set和get方法，将用户的变量存放到了currentUser。使用set和get方法来访问这个对象。
 */
let currentUser: UserType;

const setCurrentUserState = (user: UserType) => {
    currentUser = user
}

const getCurrentUserState = ():UserType => {
    return currentUser;
}

export {
    setCurrentUserState,
    getCurrentUserState,
}