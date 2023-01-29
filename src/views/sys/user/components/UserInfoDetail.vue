<template>
  <a-card size="small" :title="infoTitle">
    <a-form
      ref="userForm"
      :model="currentUser"
      name="basic"
      autocomplete="off"
      :labelCol="{ span: 4 }"
      :wrapper-col="{ span: 20 }"
    >
      <a-form-item label="帐号" name="loginName" :rules="rules.loginName">
        <a-input v-model:value="currentUser.loginName" />
      </a-form-item>
      <a-form-item label="姓名" name="fullname" :rules="rules.fullname">
        <a-input v-model:value="currentUser.fullname" />
      </a-form-item>
      <a-form-item label="邮箱" name="mail" :rules="rules.mail">
        <a-input v-model:value="currentUser.mail" />
      </a-form-item>
      <a-form-item label="电话" name="tel" :rules="rules.tel">
        <a-input v-model:value="currentUser.tel" />
      </a-form-item>
      <a-form-item label="密码" name="realPassword" :rules="rules.realPassword">
        <a-input-password v-model:value="currentUser.realPassword" />
      </a-form-item>
    </a-form>
    <a-collapse>
      <a-collapse-panel key="1" header="权限信息">
        <a-tree
          v-model:expandedKeys="expandedKeys"
          v-model:checkedKeys="currentUser.permissionList"
          checkable
          :tree-data="treeData"
        />
      </a-collapse-panel>
    </a-collapse>
    <a-row>
      <a-col :span="24" style="text-align: center; margin: 10px">
        <a-button type="primary" @click="saveUserInfo">保存</a-button>&nbsp;
        <a-button type="primary" @click="cancel">取消</a-button>
      </a-col>
    </a-row>
  </a-card>
</template>
<script lang="ts">
  import { FormInstance, message } from 'ant-design-vue'
  import { computed, defineComponent, ref } from 'vue'
  import type { PropType } from 'vue'
  import { saveUser } from '/@/api/sys/user'
  import { queryPermission } from '/@/api/sys/permission'
  import { Permission } from '/@/api/sys/model/permissionModel'
  import { DataNode } from 'ant-design-vue/lib/tree'
  import { UserInfo } from '/@/api/sys/model/userModel'
  import { encryptByMd5 } from '/@/utils/cipher'

  export default defineComponent({
    name: 'UserInfoDetail',
    props: {
      detailInfo: {
        type: Object as PropType<UserInfo>,
        default: () => {},
      },
    },
    emits: ['success', 'cancel'],
    setup(props, { emit, expose }) {
      const permissionList = ref(new Array<Permission>(0))
      const firstNode = ['menu', 'repos', 'button']
      const expandedKeys = ref(firstNode)
      const currentUser = computed(() => props.detailInfo)
      const userForm = ref<FormInstance>()
      const infoTitle = computed(() => (currentUser.value.id ? '用户信息(编辑)' : '用户信息(新增)'))
      const rules = computed(() => ({
        loginName: [{ required: true, message: '请输入帐号.' }],
        fullname: [{ required: true, message: '请输入姓名.' }],
        realPassword: [{ required: !currentUser.value.id, message: '请输入密码.' }],
        tel: [],
        mail: [{ type: 'email', message: '邮箱格式有误.' }],
      }))
      queryPermission().then((res) => {
        permissionList.value = res
      })
      const treeData = computed(() => {
        let res = [
          { title: '菜单权限', key: 'menu', children: new Array<DataNode>(0) },
          { title: '仓库权限', key: 'repos', children: new Array<DataNode>(0) },
          { title: '操作权限', key: 'opert', children: new Array<DataNode>(0) },
        ]
        permissionList.value.forEach((perm) => {
          res[perm.type - 1].children.push({ title: perm.name, key: perm.id })
        })
        return res
      })

      const clearValidate = () => {
        userForm.value?.clearValidate()
      }
      const saveUserInfo = () => {
        userForm.value
          ?.validate()
          .then((_res) => {
            let params = currentUser.value
            params.permissionList = params.permissionList?.filter(
              (x) => !firstNode.includes(x + ''),
            )
            if (!!params.realPassword) {
              params.password = encryptByMd5(params.realPassword!)
            }
            saveUser(params).then(() => {
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
      expose({
        clearValidate,
      })
      return {
        permissionList,
        treeData,
        expandedKeys,
        userForm,
        infoTitle,
        currentUser,
        saveUserInfo,
        cancel,
        rules,
      }
    },
  })
</script>
