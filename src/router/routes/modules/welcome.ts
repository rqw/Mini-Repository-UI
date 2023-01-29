import type { AppRouteModule } from '/@/router/types'

import { LAYOUT } from '/@/router/constant'
import { t } from '/@/hooks/web/useI18n'

const welcome: AppRouteModule = {
  path: '/welcome',
  name: 'Welcome',
  component: LAYOUT,
  redirect: '/welcome/index',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: t('routes.welcome.index'),
  },
  children: [
    {
      path: 'index',
      name: 'WelcomeIndex',
      component: () => import('/@/views/welcome/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.welcome.index'),
      },
    },
  ],
}

export default welcome
