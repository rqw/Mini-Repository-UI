import { defHttp } from '/@/utils/http/axios'
import { LoginParams, LoginResultModel, GetUserInfoModel, UserInfo } from './model/userModel'

import { ErrorMessageMode } from '/#/axios'

enum Api {
  Login = 'user/login',
  QueryUser = 'user',
  Logout = '/logout',
  GetUserInfo = 'user/0',
  GetPermCode = '/getPermCode',
  TestRetry = '/testRetry',
}

/**
 * @description: user login api
 */
export function loginApi(params: LoginParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<LoginResultModel>(
    {
      url: Api.Login,
      params,
    },
    {
      errorMessageMode: mode,
    },
  )
}
export function queryUserInfoList() {
  return defHttp.post<Array<UserInfo>>(
    {
      url: Api.QueryUser,
    },
    { errorMessageMode: 'none' },
  )
}

/**
 * @description: getUserInfo
 */
export function getUserInfo() {
  return defHttp.get<GetUserInfoModel>({ url: Api.GetUserInfo }, { errorMessageMode: 'none' })
}

export function getPermCode() {
  return defHttp.get<string[]>({ url: Api.GetPermCode })
}

export function doLogout() {
  return defHttp.get({ url: Api.Logout })
}

export function testRetry() {
  return defHttp.get(
    { url: Api.TestRetry },
    {
      retryRequest: {
        isOpenRetry: true,
        count: 5,
        waitTime: 1000,
      },
    },
  )
}
