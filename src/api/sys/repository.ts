import { defHttp } from '/@/utils/http/axios'

import { ErrorMessageMode } from '/#/axios'
import { Page } from '/@/api/model/baseModel'
import { RepositoryInfo } from './model/repositoryModel'

enum Api {
  Query = 'repository',
  Save = 'repository',
  Del = 'repository',
}
export function saveRepository(params: RepositoryInfo, mode: ErrorMessageMode = 'modal') {
  return defHttp.put<RepositoryInfo>(
    {
      url: Api.Save,
      params,
    },
    {
      errorMessageMode: mode,
    },
  )
}

export function delRepository(params?: number, mode: ErrorMessageMode = 'modal') {
  return defHttp.delete<any>(
    {
      url: `${Api.Del}/${params}`,
    },
    {
      errorMessageMode: mode,
    },
  )
}

export function queryRepositoryList(params: Page<RepositoryInfo>) {
  return defHttp.post<Page<RepositoryInfo>>(
    {
      params,
      url: Api.Query,
    },
    { errorMessageMode: 'none' },
  )
}
