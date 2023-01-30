<template>
  <a-card size="small" title="仓库列表">
    <a-form :model="searchInfo" name="basic" autocomplete="off">
      <a-row :gutter="24">
        <a-col :span="8">
          <a-form-item label="名称" name="name">
            <a-input v-model:value="searchInfo.name" />
          </a-form-item>
        </a-col>
        <a-col :span="16">
          <a-button type="primary" @click="filter">查询</a-button>&nbsp;
          <template v-if="props.modify">
            <a-button type="primary" @click="add">新增</a-button>&nbsp;
            <a-button type="primary" @click="edit">编辑</a-button>&nbsp;
            <a-button type="primary" @click="del">删除</a-button>
          </template>
        </a-col>
      </a-row>
    </a-form>
    <a-table
      :columns="columns"
      :row-key="(record) => record.id"
      :data-source="dataSource?.dataList"
      :pagination="pagination"
      :loading="loading"
      :rowSelection="props.modify ? rowSelection : null"
      @change="handleTableChange"
      bordered
      :customRow="customRow"
      size="small"
    />
  </a-card>
</template>
<script lang="tsx" setup>
  import { usePagination } from 'vue-request'
  import { delRepository, queryRepositoryList } from '/@/api/sys/repository'
  import { message, Modal, TableProps } from 'ant-design-vue'
  import { computed, ref, defineExpose, defineEmits, defineProps } from 'vue'
  import { RepositoryInfo } from '/@/api/sys/model/repositoryModel'
  const emit = defineEmits(['add', 'edit', 'del', 'change', 'dbClick'])
  const props = defineProps({
    modify: {
      type: Boolean,
      default: () => true,
    },
  })
  const checkedRepos = ref<RepositoryInfo>({})
  const searchInfo = ref<RepositoryInfo>({})
  const condition = ref<any>({})
  const columns = [
    {
      title: '仓库名',
      width: '200px',
      dataIndex: 'name',
    },
    {
      title: '模式',
      width: '100px',
      dataIndex: 'mode',
      customRender: ({ text }) => {
        return (
          <a-tag color={{ 0: 'gray', 2: 'pink', 4: 'blue', 6: '#F50' }[text]}>
            {
              {
                0: '停用',
                2: '只读',
                4: '仅写入',
                6: '可读写',
              }[text]
            }
          </a-tag>
        )
      },
    },
    {
      title: '公开',
      width: '100px',
      dataIndex: 'publicAccess',
      customRender: ({ text }) => {
        return <a-tag color={text ? 'green' : 'gray'}>{text ? '公开' : '不公开'}</a-tag>
      },
    },
    {
      title: '缓存',
      width: '100px',
      dataIndex: 'cache',
      customRender: ({ text }) => {
        return <a-tag color={text ? 'green' : 'gray'}>{text ? '启用' : '不启用'}</a-tag>
      },
    },
    {
      title: '磁盘路径',
      dataIndex: 'diskPath',
    },
  ]
  const customRow = (record) => {
    return {
      onDblclick: () => emit('dbClick', record),
    }
  }
  const {
    data: dataSource,
    run,
    loading,
    total,
    current,
    pageSize,
  } = usePagination(queryRepositoryList, {
    pagination: {
      currentKey: 'no',
      pageSizeKey: 'capacity',
      totalKey: 'total',
    },
  })

  const pagination = computed(() => ({
    total: total.value,
    current: current.value,
    pageSize: pageSize.value,
    pageSizeOptions: [10, 20, 50, 100],
  }))

  const rowSelection: TableProps['rowSelection'] = {
    type: 'radio',
    onSelect: (row, state) => {
      if (state) {
        checkedRepos.value = row
        emit('change', checkedRepos.value)
      }
    },
  }

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

  const add = () => {
    emit('add', {})
  }
  const edit = () => {
    if (checkedRepos.value.id) {
      emit('edit', checkedRepos.value)
    } else {
      message.info('请先选择一条记录.')
    }
  }
  const del = () => {
    if (checkedRepos.value.id) {
      Modal.confirm({
        title: '提示',
        content: `确认要删除${checkedRepos.value.name}仓库吗?`,
        okText: '确认',
        okType: 'danger',
        cancelText: '取消',
        onOk() {
          delRepository(checkedRepos.value.id).then(() => {
            message.info('删除成功.')
            emit('del', checkedRepos.value.id)
            refresh()
          })
        },
        onCancel() {},
      })
    } else {
      message.info('请先选择一条记录.')
    }
  }
  const filter = () => {
    if (searchInfo.value.name != '') {
      condition.value['name'] = searchInfo.value.name
    } else {
      delete condition.value['name']
    }
    refresh()
  }
  const refresh = () => {
    run({
      capacity: pageSize.value,
      condition: condition.value,
      no: current.value,
    })
  }
  defineExpose({ refresh })
</script>
