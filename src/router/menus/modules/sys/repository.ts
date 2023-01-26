import type { MenuModule } from '/@/router/types'
import { t } from '/@/hooks/web/useI18n'
const menu: MenuModule = {
  orderNo: 10,
  menu: {
    name: t('routes.sys.repository'),
    path: '/sys/repository',
  },
}
export default menu
