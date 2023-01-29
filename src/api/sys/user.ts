import { defHttp } from '/@/utils/http/axios'
import {
  LoginParams,
  LoginResultModel,
  GetUserInfoModel,
  UserInfo,
  PasswdInfo,
} from './model/userModel'

import { ErrorMessageMode } from '/#/axios'
import { Page } from '/@/api/model/baseModel'

enum Api {
  Login = 'user/login',
  QueryUser = 'user',
  SaveUser = 'user',
  Passwd = 'user/passwd',
  DelUser = 'user',
  GetUserInfo = 'user/0',
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
export function saveUser(params: UserInfo, mode: ErrorMessageMode = 'modal') {
  return defHttp.put<UserInfo>(
    {
      url: Api.SaveUser,
      params,
    },
    {
      errorMessageMode: mode,
    },
  )
}

export function changePasswd(params: PasswdInfo, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<string>(
    {
      url: Api.Passwd,
      params,
    },
    {
      errorMessageMode: mode,
    },
  )
}

export function delUser(params?: number, mode: ErrorMessageMode = 'modal') {
  return defHttp.delete<any>(
    {
      url: `${Api.DelUser}/${params}`,
    },
    {
      errorMessageMode: mode,
    },
  )
}

export function queryUserInfoList(params: Page<UserInfo>) {
  return defHttp.post<Page<UserInfo>>(
    {
      params,
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
