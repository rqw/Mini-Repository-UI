<template>
  <a-card size="small" style="height: 100%">
    <UserInfoList ref="refList" @add="showDetail" @edit="showDetail" />
    <a-drawer
      :width="720"
      :visible="visible"
      :body-style="{ paddingBottom: '80px' }"
      :footer-style="{ textAlign: 'right' }"
      :closable="false"
      @close="onClose"
    >
      <UserInfoDetail
        ref="refDetail"
        :detail-info="currentUser"
        @success="refresh"
        @cancel="onClose"
      />
    </a-drawer>
  </a-card>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import UserInfoDetail from './components/UserInfoDetail.vue'
  import UserInfoList from './components/UserInfoList.vue'
  import { UserInfo } from '/@/api/sys/model/userModel'

  export default defineComponent({
    name: 'UserManager',
    components: { UserInfoDetail, UserInfoList },
    setup() {
      const visible = ref<boolean>(false)
      const currentUser = ref<UserInfo>({})
      const refList = ref()
      const refDetail = ref()

      const showDetail = (user) => {
        currentUser.value = user
        showDrawer()
      }
      const refresh = () => {
        refList.value.refresh()
        onClose()
      }

      const showDrawer = () => {
        visible.value = true
        refDetail.value?.clearValidate()
      }

      const onClose = () => {
        visible.value = false
      }
      return {
        refList,
        refDetail,
        currentUser,
        showDetail,
        refresh,
        visible,
        onClose,
      }
    },
  })
</script>
