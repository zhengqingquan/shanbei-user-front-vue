// .d.ts基本上就是TypeScript定义类型的后缀。

/**
 * 用户类别
 */
type UserType = {
    id: number;
    username: string;
    userAccount: string;
    avatarUrl?: string;
    gender: string;
    phone: string;
    email: string;
    userStatus: number;
    userRole: number;
    tags:string[];
    createTime: Date;
};