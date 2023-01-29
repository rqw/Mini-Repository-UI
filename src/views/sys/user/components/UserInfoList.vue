<template>
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
          <a-button type="primary" @click="addUserInfo">新增</a-button>&nbsp;
          <a-button type="primary" @click="editUserInfo">编辑</a-button>&nbsp;
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
    />
  </a-card>
</template>
<script lang="ts">
  import { message, Modal, TableProps } from 'ant-design-vue'
  import { usePagination } from 'vue-request'
  import { computed, defineComponent, ref } from 'vue'
  import { delUser, queryUserInfoList } from '/@/api/sys/user'
  import { UserInfo } from '/@/api/sys/model/userModel'
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
      title: '邮箱',
      width: '220px',
      dataIndex: 'mail',
    },
    {
      title: '电话',
      width: '200px',
      dataIndex: 'tel',
    },
    {
      title: '仓库令牌',
      dataIndex: 'mrt',
    },
  ]
  export default defineComponent({
    name: 'UserInfoList',
    emits: ['add', 'edit', 'del'],
    setup(_props, { emit, expose }) {
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
      const checkedUser = ref<UserInfo>({})
      const searchInfo = ref<UserInfo>({})
      const condition = ref<any>({})
      const refresh = () => {
        run({
          capacity: pageSize.value,
          condition: condition.value,
          no: current.value,
        })
      }
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
            checkedUser.value = row
          }
        },
      }
      const addUserInfo = () => {
        emit('add', {})
      }
      const editUserInfo = () => {
        if (checkedUser.value.id) {
          emit('edit', checkedUser.value)
        } else {
          message.info('请先选择一条记录.')
        }
      }
      const deleteUserInfo = () => {
        if (checkedUser.value.id) {
          Modal.confirm({
            title: '提示',
            content: `确认要删除${checkedUser.value.loginName}帐号吗?`,
            okText: '确认',
            okType: 'danger',
            cancelText: '取消',
            onOk() {
              delUser(checkedUser.value.id).then(() => {
                message.info('删除成功.')
                emit('del', checkedUser.value.id)
                refresh()
              })
            },
            onCancel() {},
          })
        } else {
          message.info('请先选择一条记录.')
        }
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
        refresh()
      }
      expose({
        refresh,
      })
      return {
        dataSource,
        pagination,
        loading,
        columns,
        rowSelection,
        handleTableChange,
        searchInfo,
        addUserInfo,
        editUserInfo,
        deleteUserInfo,
        filterUserInfo,
        refresh,
      }
    },
  })
</script>
