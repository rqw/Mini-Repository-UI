export interface RepositoryInfo {
  id?: number
  name?: string
  diskPath?: string
  mode?: number
  cache?: boolean
  publicAccess?: boolean
  mirror?: Array<string>
  mirrorSite?: string
}
