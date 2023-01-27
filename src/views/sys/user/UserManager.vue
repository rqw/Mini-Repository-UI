<template>
  <a-table
    :columns="columns"
    :row-key="(record) => record.id"
    :data-source="dataSource"
    :pagination="pagination"
    :loading="loading"
    :rowSelection="rowSelectoin"
    @change="handleTableChange"
    bordered
  >
    <template #bodyCell="{ column, text }">
      <template v-if="column.dataIndex === 'name'">{{ text.first }} {{ text.last }}</template>
    </template>
  </a-table>
</template>
<script lang="ts">
  import type { TableProps } from 'ant-design-vue'
  import { Table } from 'ant-design-vue'
  import { usePagination } from 'vue-request'
  import { computed, defineComponent } from 'vue'
  import { queryUserInfoList } from '/@/api/sys/user'
  const columns = [
    {
      title: '账号',
      dataIndex: 'loginName',
    },
    {
      title: '姓名',
      dataIndex: 'fullname',
    },
    {
      title: '仓库令牌',
      dataIndex: 'mrt',
    },
  ]
  const rowSelection = {
    type: 'radio',
    onSelect: (row, state) => console.log(row, state),
  }

  export default defineComponent({
    name: 'UserManager',
    components: { ATable: Table },
    setup() {
      const {
        data: dataSource,
        run,
        loading,
        total,
        current,
        pageSize,
      } = usePagination(queryUserInfoList, {
        formatResult: (res) => res.dataList,
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
      }))

      const handleTableChange: TableProps['onChange'] = (
        pag: { pageSize: number; current: number },
        filters: any,
        sorter: any,
      ) => {
        run({
          capacity: pag.pageSize!,
          no: pag?.current,
          sortField: sorter.field,
          sortOrder: sorter.order,
          ...filters,
        })
      }

      return {
        dataSource,
        pagination,
        loading,
        columns,
        rowSelectoin: rowSelection,
        handleTableChange,
      }
    },
  })
</script>
