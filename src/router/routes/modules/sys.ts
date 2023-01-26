import type { AppRouteModule } from '/@/router/types'
import { LAYOUT } from '/@/router/constant'
import { t } from '/@/hooks/web/useI18n'
import { RoleEnum } from '/@/enums/roleEnum'

const sys: AppRouteModule = {
  path: '/sys',
  name: 'Sys',
  component: LAYOUT,
  redirect: '/sys/user',
  meta: {
    title: t('routes.dashboard.about'),
    roles: [RoleEnum.USER_MANAGER],
  },
  children: [
    {
      path: 'user',
      name: 'UserManager',
      component: () => import('/@/views/sys/about/index.vue'),
      meta: {
        title: t('routes.sys.user'),
        roles: [RoleEnum.USER_MANAGER],
      },
    },
    {
      path: 'repository',
      name: 'RepositoryManager',
      component: () => import('/@/views/sys/about/index.vue'),
      meta: {
        title: t('routes.sys.repository'),
        roles: [RoleEnum.REPOS_MANAGER],
      },
    },
    {
      path: 'repository/view',
      name: 'RepositoryView',
      component: () => import('/@/views/sys/about/index.vue'),
      meta: {
        title: t('routes.sys.repositoryView'),
        roles: [RoleEnum.REPOS_VIEW],
      },
    },
  ],
}

export default sys
