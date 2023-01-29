<template>
  <a-card size="small">
    <a-form
      ref="passwdForm"
      :model="passwdInfo"
      name="basic"
      autocomplete="off"
      :labelCol="{ span: 4 }"
      :wrapper-col="{ span: 20 }"
    >
      <a-form-item label="原密码" name="oldPassword" :rules="passwdRule.old">
        <a-input-password v-model:value="passwdInfo.oldPassword" />
      </a-form-item>
      <a-form-item label="新密码" name="newPassword" :rules="passwdRule.new">
        <a-input-password v-model:value="passwdInfo.newPassword" />
      </a-form-item>
    </a-form>
    <a-row>
      <a-col :span="24" style="text-align: center; margin: 10px">
        <a-button type="primary" @click="save">确认修改</a-button>&nbsp;
        <a-button type="primary" @click="cancel">取消</a-button>
      </a-col>
    </a-row>
  </a-card>
</template>
<script lang="ts">
  import { FormInstance, message } from 'ant-design-vue'
  import { defineComponent, ref } from 'vue'
  import { changePasswd } from '/@/api/sys/user'
  import { encryptByMd5 } from '/@/utils/cipher'
  import { PasswdInfo } from '/@/api/sys/model/userModel'

  export default defineComponent({
    name: 'Passwd',
    emits: ['success', 'cancel'],
    setup(_props, { emit }) {
      const passwdInfo = ref<PasswdInfo>({})
      const passwdForm = ref<FormInstance>()
      const passwdRule = {
        old: [{ required: true, message: '请输入原始密码.' }],
        new: [{ required: true, message: '请输入新密码.' }],
      }
      const cancel = () => {
        emit('cancel')
      }
      const save = () => {
        passwdForm.value
          ?.validate()
          .then(() => {
            let param = {
              oldPassword: encryptByMd5(passwdInfo.value.oldPassword!),
              newPassword: encryptByMd5(passwdInfo.value.newPassword!),
            }
            changePasswd(param).then(() => {
              message.info('操作成功.')
              emit('success')
            })
          })
          .catch(() => {})
      }
      return {
        passwdForm,
        cancel,
        save,
        passwdInfo,
        passwdRule,
      }
    },
  })
</script>
