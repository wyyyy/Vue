<template>
  <div>
<div id='just test'>

  <el-select v-model="name" placeholder="请选择">
    <el-option
      v-for="item in tableData"
      :key="item.date"
      :label="item.date"
      :value="item.date">
    </el-option>
  </el-select>
</div>
   <el-button type="primary" round @click="dialogFormVisible = true">NewMpn</el-button>
  <el-button type="success" round @click="get()">Load Data</el-button>
  <el-button type="primary" icon="el-icon-edit"></el-button>
<el-button type="primary" icon="el-icon-share"></el-button>
<el-button type="primary" icon="el-icon-delete"></el-button>
<el-button type="primary" icon="el-icon-search">搜索</el-button>
<el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>

     <div class="block">
    <span class="demonstration">完整功能</span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[3,100, 200, 300, 400]"
      :page-size="3"
      layout="total, sizes, prev, pager, next, jumper"
      :total="foodData.length">
    </el-pagination>

 <el-table
  v-loading="loading"
    :data="foodData"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="商品名称">
            <span>{{ props.row.name }}
              <li v-for="val in props.row.foods" track-by="$index">
                {{val.name}}
 </li>
            </span>
          </el-form-item>
          <el-form-item label="所属店铺">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="商品 ID">
            <span>{{ props.row.foods.length }}</span>
          </el-form-item>
          <el-form-item label="店铺 ID">
            <span>{{ props.row.shopId }}</span>
          </el-form-item>
          <el-form-item label="商品分类">
            <span>{{ props.row.category }}</span>
          </el-form-item>
          <el-form-item label="店铺地址">
            <span>{{ props.row.address }}</span>
          </el-form-item>
          <el-form-item label="商品描述">
            <span>{{ props.row.desc }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
       <el-table-column
      type="index"
      width="50">
    </el-table-column>
    <el-table-column
      label="Field1"
      prop="name">
    </el-table-column>
    <el-table-column
      label="Field2"
      prop="name">
    </el-table-column>
    <el-table-column
      label="Foods"
      prop="foods.length">
    </el-table-column>
  </el-table>
<div>
<!-- Form -->

<el-dialog title="收货地址" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="活动名称" :label-width="formLabelWidth">
      <el-input v-model="form.name" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="活动区域" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>
</div>

  </div>

  </div>
</template>
<script>
export default {
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    },
    get: function () {
      this.$http.get(this.filePath).then(
        function (res) {
          console.log(this.tableData.length)
          console.log(res.status + 'statusText:' + res.statusText)
          console.log(res.body)
          this.foodData = res.body
          var data = res.body
          this.foodData = data.data
          console.log('fooddata:' + data.errno)
          console.log('fooddata-data:' + this.foodData.data)
          console.log(JSON.parse(JSON.stringify(this.foodData)))
          setTimeout(() => {
            this.loading = false
          }, 2000)
        },
        function (res) {
          console.log(res.data)
        }
      )
    }
  },
  data () {
    return {
      loading: false,
      todos: {
        name: 'myname',
        sex: '1',
        age: '28'
      },
      foodData: [
        {
          name: '热销榜',
          type: -1,
          foods: [
            {
              name: '皮蛋瘦肉粥',
              price: 10,
              oldPrice: '',
              description: '咸粥',
              sellCount: 229,
              rating: 100,
              info:
                '一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足',
              ratings: [
                {
                  username: '3******c',
                  rateTime: 1469281964000,
                  rateType: 0,
                  text: '很喜欢的粥',
                  avatar:
                    'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
                },
                {
                  username: '2******3',
                  rateTime: 1469271264000,
                  rateType: 0,
                  text: '',
                  avatar:
                    'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
                },
                {
                  username: '3******b',
                  rateTime: 1469261964000,
                  rateType: 1,
                  text: '',
                  avatar:
                    'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'
                }
              ],
              icon:
                'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114',
              image:
                'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750'
            }
          ]
        }
      ],
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
      ],
      name: '',
      filePath: '/api/goods',
      dialogTableVisible: false,
      dialogFormVisible: false,
      currentPage4: 1,
      total: 3,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
    }
  }
}
</script>
<style>
 body {
    margin: 0;
  }
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
