/**
 * @description: Login interface parameters
 */
export interface LoginParams {
  loginName: string
  password: string
}

export interface RoleInfo {
  roleName: string
  value: string
}

/**
 * @description: Login interface return value
 */
export interface LoginResultModel {
  userId: string | number
  jwtToken: string
  role: RoleInfo
  permissionList: number[]
}

/**
 * @description: Get user information return value
 */
export interface GetUserInfoModel {
  roles: RoleInfo[]
  permissionList: number[]
  // 用户id
  id: string | number
  // 用户名
  loginName: string
  // 真实名字
  fullname: string
  // 头像
  avatar: string
  // 介绍
  desc?: string
}
export interface UserInfo {
  id: number
  loginName: string
  fullname: string
  password: string
  act: string
  mrt: string
  permissionList: Array<number>
}
