export interface BasicPageParams {
  page: number
  pageSize: number
}

export interface BasicFetchResult<T> {
  items: T[]
  total: number
}

export interface Page<T> {
  no: number //当前页码，从1开始
  total?: number //记录总数
  condition?: Map<string, string> //查询条件
  orders?: Array<string> //排序
  capacity: number //页容量
  dataList?: T[] //数据列表
}
