<template>
<div>
 <el-table
      :data="tableData"
      stripe
      border
       highlight-current-row
    @current-change="handleCurrentChange"
      style="width: 100%">
       <el-table-column
      type="index"
      width="50">
    </el-table-column>
      <el-table-column
        property="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
         <template slot-scope="scope">
        <el-popover trigger="hover" placement="left">
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
       <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
       <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
       <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
       <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
       <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
       <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
       <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
       <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>

     </div>
</template>
<script>
export default {
  methods: {
    tbdetail: function () {},
    setCurrent (row) {
      this.$refs.singleTable.setCurrentRow(row)
    },
    handleCurrentChange (val) {
      console.log('setCurrent:' + val)
      this.currentRow = val
    }
  },
  data () {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  }
}
</script>
