<template>
  <a-card size="small" title="用户管理" style="height: 100%">
    <a-row style>
      <a-col :span="12">
        <a-card size="small" title="用户列表">
          <a-form :model="searchInfo" name="basic" autocomplete="off">
            <a-row :gutter="24">
              <a-col :span="8">
                <a-form-item label="帐号" name="loginName">
                  <a-input v-model:value="searchInfo.loginName" />
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item label="姓名" name="fullname">
                  <a-input v-model:value="searchInfo.fullname" />
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-button type="primary" @click="filterUserInfo">查询</a-button>&nbsp;
                <a-button type="primary" @click="deleteUserInfo">删除</a-button>
              </a-col>
            </a-row>
          </a-form>
          <a-table
            :columns="columns"
            :row-key="(record) => record.id"
            :data-source="dataSource?.dataList"
            :pagination="pagination"
            :loading="loading"
            :rowSelection="rowSelection"
            @change="handleTableChange"
            bordered
            size="small"
            :scroll="{ y: height, scrollToFirstRowOnChange: true }"
          />
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card size="small" :title="infoTitle">
          <a-form
            ref="userForm"
            :model="currentUser"
            name="basic"
            autocomplete="off"
            :labelCol="{ span: 4 }"
            :wrapper-col="{ span: 20 }"
          >
            <a-form-item
              label="帐号"
              name="loginName"
              :rules="[{ required: true, message: '请输入帐号.' }]"
            >
              <a-input v-model:value="currentUser.loginName" />
            </a-form-item>
            <a-form-item
              label="姓名"
              name="fullname"
              :rules="[{ required: true, message: '请输入姓名.' }]"
            >
              <a-input v-model:value="currentUser.fullname" />
            </a-form-item>

            <a-form-item
              label="密码"
              name="realPassword"
              :rules="[{ required: !currentUser.id, message: '请输入密码.' }]"
            >
              <a-input-password v-model:value="currentUser.realPassword" />
            </a-form-item>
          </a-form>
          <a-collapse>
            <a-collapse-panel key="1" header="权限信息">
              <a-tree
                v-model:expandedKeys="expandedKeys"
                v-model:checkedKeys="checkedKeys"
                checkable
                :tree-data="treeData"
              />
            </a-collapse-panel>
          </a-collapse>
          <a-row>
            <a-col :span="24" style="text-align: center; margin: 10px">
              <a-button type="primary" @click="saveUserInfo">保存</a-button>&nbsp;
              <a-button type="primary" @click="resetUserInfo">重置</a-button>
            </a-col>
          </a-row>
        </a-card>
      </a-col>
    </a-row>
  </a-card>
</template>
<script lang="ts">
  import { FormInstance, message, Modal, TableProps } from 'ant-design-vue'
  import {
    Table as ATable,
    Collapse as ACollapse,
    CollapsePanel as ACollapsePanel,
    Row as ARow,
    Col as ACol,
    Tree as ATree,
    Card as ACard,
    Form as AForm,
    FormItem as AFormItem,
    Button as AButton,
    InputPassword as AInputPassword,
  } from 'ant-design-vue'
  import { usePagination } from 'vue-request'
  import { computed, defineComponent, ref } from 'vue'
  import { delUser, queryUserInfoList, saveUser } from '/@/api/sys/user'
  import { queryPermission } from '/@/api/sys/permission'
  import { Permission } from '/@/api/sys/model/permissionModel'
  import { DataNode } from 'ant-design-vue/lib/tree'
  import { UserInfo } from '/@/api/sys/model/userModel'
  import { encryptByMd5 } from '/@/utils/cipher'
  const columns = [
    {
      title: '账号',
      width: '200px',
      dataIndex: 'loginName',
    },
    {
      title: '姓名',
      width: '120px',
      dataIndex: 'fullname',
    },
    {
      title: '仓库令牌',
      dataIndex: 'mrt',
    },
  ]
  export default defineComponent({
    name: 'UserManager',
    components: {
      ACollapse,
      ACollapsePanel,
      ATable,
      ARow,
      ACol,
      ATree,
      ACard,
      AForm,
      AFormItem,
      AButton,
      AInputPassword,
    },
    setup() {
      const {
        data: dataSource,
        run,
        loading,
        total,
        current,
        pageSize,
      } = usePagination(queryUserInfoList, {
        pagination: {
          currentKey: 'no',
          pageSizeKey: 'capacity',
          totalKey: 'total',
        },
      })
      const height = ref('1300px')
      const permissionList = ref(new Array<Permission>(0))
      const checkedKeys = ref(new Array<string | number>(0))
      const expandedKeys = ref(['menu', 'repos', 'button'])
      const currentUser = ref<UserInfo>({})
      const searchInfo = ref<UserInfo>({})

      const condition = ref<any>({})
      const userForm = ref<FormInstance>()
      const infoTitle = computed(() => (currentUser.value.id ? '用户信息(编辑)' : '用户信息(新增)'))
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
      const pagination = computed(() => ({
        total: total.value,
        current: current.value,
        pageSize: pageSize.value,
        pageSizeOptions: [10, 20, 50, 100],
      }))

      const handleTableChange: TableProps['onChange'] = (
        pag: { pageSize: number; current: number },
        filters: any,
        sorter: any,
      ) => {
        run({
          capacity: pag.pageSize!,
          no: pag?.current,
          condition: condition.value,
          sortField: sorter.field,
          sortOrder: sorter.order,
          ...filters,
        })
      }
      const rowSelection: TableProps['rowSelection'] = {
        type: 'radio',
        onSelect: (row, state) => {
          if (state) {
            currentUser.value = row
            checkedKeys.value = row.permissionList
            userForm.value?.clearValidate()
          }
        },
      }
      const deleteUserInfo = () => {
        if (currentUser.value.id) {
          Modal.confirm({
            title: '提示',
            content: `确认要删除${currentUser.value.loginName}帐号吗?`,
            okText: '确认',
            okType: 'danger',
            cancelText: '取消',
            onOk() {
              delUser(currentUser.value.id).then(() => {
                message.info('删除成功.')
                run({
                  capacity: pageSize.value,
                  no: current.value,
                })
              })
            },
            onCancel() {},
          })
        } else {
          message.info('请先选择一条记录.')
        }
      }
      const resetUserInfo = () => {
        currentUser.value = {}
        userForm.value?.clearValidate()
      }
      const saveUserInfo = () => {
        userForm.value
          ?.validate()
          .then((res) => {
            res = currentUser.value
            res.permissionList = checkedKeys.value
            if (!!res.realPassword) {
              res.password = encryptByMd5(res.realPassword)
            }
            console.log(res)
            saveUser(res).then(() => {
              message.info('保存成功.')
              run({
                capacity: pageSize.value,
                no: current.value,
              })
            })
          })
          .catch((err) => {
            console.log('err', err)
          })
      }
      const filterUserInfo = () => {
        if (searchInfo.value.loginName != '') {
          condition.value['loginName'] = searchInfo.value.loginName
        } else {
          delete condition.value['loginName']
        }
        if (searchInfo.value.fullname != '') {
          condition.value['fullname'] = searchInfo.value.fullname
        } else {
          delete condition.value['fullname']
        }
        run({
          capacity: pageSize.value,
          no: current.value,
          condition: condition.value,
        })
      }
      return {
        dataSource,
        pagination,
        loading,
        columns,
        permissionList,
        rowSelection,
        treeData,
        checkedKeys,
        expandedKeys,
        height,
        userForm,
        infoTitle,
        currentUser,
        handleTableChange,
        saveUserInfo,
        searchInfo,
        deleteUserInfo,
        filterUserInfo,
        resetUserInfo,
      }
    },
  })
</script>
