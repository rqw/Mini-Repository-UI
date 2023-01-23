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
}

/**
 * @description: Get user information return value
 */
export interface GetUserInfoModel {
  roles: RoleInfo[]
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
