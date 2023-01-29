<template>
  <a-card style="height: 100%; weight: 100%; text-align: center; vertical-align: middle">
    <div>{{ t('routes.welcome.content') }}</div>
  </a-card>
</template>
<script lang="ts" setup>
  import { useI18n } from '/@/hooks/web/useI18n'
  const { t } = useI18n()
</script>
