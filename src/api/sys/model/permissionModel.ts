export interface Permission {
  id: number
  name: string
  description: string
  type: number //1-菜单、2-仓库权限、3-操作权限
  validRegex: string
}
