<template>
  <a-card size="small" style="height: 100%">
    <RepositoryList ref="refList" @add="showDetail" @edit="showDetail" />
    <a-drawer
      :width="720"
      :visible="visible"
      :body-style="{ paddingBottom: '80px' }"
      :footer-style="{ textAlign: 'right' }"
      :closable="false"
      @close="onClose"
    >
      <RepositoryDetail
        ref="refDetail"
        :detail-info="currentRepos"
        @success="refresh"
        @cancel="onClose"
      />
    </a-drawer>
  </a-card>
</template>
<script lang="ts" setup>
  import RepositoryDetail from './components/RepositoryDetail.vue'
  import RepositoryList from './components/RepositoryList.vue'
  import { ref, defineComponent } from 'vue'
  import { RepositoryInfo } from '/@/api/sys/model/repositoryModel'
  defineComponent({ RepositoryDetail, RepositoryList })
  const visible = ref<boolean>(false)
  const currentRepos = ref<RepositoryInfo>({})
  const refList = ref()
  const refDetail = ref()

  const showDetail = (repos) => {
    if (repos.mirror?.length > 0) {
      repos.mirrorSite = repos.mirror?.join('\n')
    }
    currentRepos.value = repos
    showDrawer()
  }
  const refresh = () => {
    refList.value?.refresh()
    onClose()
  }

  const showDrawer = () => {
    visible.value = true
    refDetail.value?.clearValidate()
  }

  const onClose = () => {
    visible.value = false
  }
</script>
