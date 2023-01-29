<template>
  <a-card size="small" :title="infoTitle">
    <a-form
      ref="infoForm"
      :model="currentRepos"
      name="basic"
      autocomplete="off"
      :labelCol="{ span: 4 }"
      :wrapper-col="{ span: 20 }"
    >
      <a-form-item label="名称" name="name" :rules="rules.name">
        <a-input v-model:value="currentRepos.name" />
      </a-form-item>
      <a-form-item label="路径" name="diskPath" :rules="rules.diskPath">
        <a-input v-model:value="currentRepos.diskPath" />
      </a-form-item>
      <a-form-item label="公开">
        <a-switch
          v-model:checked="currentRepos.publicAccess"
          checked-children="开"
          un-checked-children="关"
        />
      </a-form-item>
      <a-form-item label="缓存">
        <a-switch
          v-model:checked="currentRepos.cache"
          checked-children="开"
          un-checked-children="关"
        />
      </a-form-item>
      <a-form-item label="模式" name="mode" :rules="rules.mode">
        <a-radio-group v-model:value="currentRepos.mode" button-style="solid">
          <a-radio-button :value="0">停用</a-radio-button>
          <a-radio-button :value="2">只读</a-radio-button>
          <a-radio-button :value="4">仅写入</a-radio-button>
          <a-radio-button :value="6">读写</a-radio-button>
        </a-radio-group>
      </a-form-item>

      <a-form-item label="代理" name="mirrorSite" :rules="rules.mirrorSite">
        <a-textarea
          v-model:value="currentRepos.mirrorSite"
          placeholder="支持多个代理地址,一行输入一个代理地址"
          :rows="4"
        />
      </a-form-item>
    </a-form>
    <a-row>
      <a-col :span="24" style="text-align: center; margin: 10px">
        <a-button type="primary" @click="save">保存</a-button>&nbsp;
        <a-button type="primary" @click="cancel">取消</a-button>
      </a-col>
    </a-row>
  </a-card>
</template>
<script lang="ts" setup>
  import { FormInstance, message } from 'ant-design-vue'
  import { computed, ref, defineProps, defineEmits, defineExpose } from 'vue'
  import type { PropType } from 'vue'
  import { RepositoryInfo } from '/@/api/sys/model/repositoryModel'
  import { saveRepository } from '/@/api/sys/repository'
  const props = defineProps({
    detailInfo: {
      type: Object as PropType<RepositoryInfo>,
      default: () => {},
    },
  })
  const emit = defineEmits(['success', 'cancel'])
  const currentRepos = computed(() => props.detailInfo)
  const infoForm = ref<FormInstance>()
  const infoTitle = computed(() => (currentRepos.value.id ? '仓库信息(编辑)' : '仓库信息(新增)'))
  const rules = computed(() => ({
    name: [{ required: true, message: '请输入仓库名称.' }],
    diskPath: [],
    mode: [{ required: true, message: '请选择仓库模式.' }],
    mirrorSite: [],
  }))

  const clearValidate = () => {
    infoForm.value?.clearValidate()
  }
  const save = () => {
    infoForm.value
      ?.validate()
      .then((_res) => {
        let params = currentRepos.value
        saveRepository(params).then(() => {
          message.info('保存成功.')
          emit('success')
        })
      })
      .catch((err) => {
        console.log('err', err)
      })
  }
  const cancel = () => {
    emit('cancel')
  }
  defineExpose({
    clearValidate,
  })
</script>
