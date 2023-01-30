<template>
  <a-card size="small" style="height: 100%">
    <RepositoryList ref="refList" :modify="false" @dbClick="dbClick" />
  </a-card>
</template>
<script lang="ts" setup>
  import RepositoryDetail from './components/RepositoryDetail.vue'
  import RepositoryList from './components/RepositoryList.vue'
  import { ref, defineComponent } from 'vue'
  import { RepositoryInfo } from '/@/api/sys/model/repositoryModel'
  defineComponent({ RepositoryDetail, RepositoryList })
  const currentRepos = ref<RepositoryInfo>({})
  const refList = ref()

  const refresh = () => {
    refList.value?.refresh()
  }
  const dbClick = (repos) => {
    currentRepos.value = repos
    console.log(repos)
    //show view
  }
</script>
