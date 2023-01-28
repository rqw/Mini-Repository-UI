import { defHttp } from '/@/utils/http/axios'
import { LoginParams, LoginResultModel, GetUserInfoModel, UserInfo } from './model/userModel'

import { ErrorMessageMode } from '/#/axios'
import { Permission } from './model/permissionModel'

enum Api {
  QueryPermission = 'permission',
}

/**
 * @description: user login api
 */
export function queryPermission(mode: ErrorMessageMode = 'modal') {
  return defHttp.post<Array<Permission>>(
    {
      url: Api.QueryPermission,
    },
    {
      errorMessageMode: mode,
    },
  )
}
