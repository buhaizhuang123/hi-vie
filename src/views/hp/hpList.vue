<template>
    <div>
      <el-container>
        <el-tag type="danger">
            数据列表
        </el-tag>
        <el-main>
            <el-row type="flex" >
              <el-col  :span="12" >
                <el-input placeholder="姓名">
                </el-input>
              </el-col>
              <el-col  :span="12"  >
                <el-input placeholder="职业">
                </el-input>
              </el-col>
            </el-row>
            <el-row >
              <el-col :span="12">
                <el-button type="primary"  @click="()=>{this.$emit('toPage',{path:'hpAdd'})}">新增</el-button>
              </el-col>
              <el-col  :span="12" >
                <div>
                  <el-button type="primary" icon="el-icon-search" >搜索</el-button>
                </div>
              </el-col>
            </el-row>
          <el-table ref="tbData" :data="tableData" style="width: 100%">
            <el-table-column label="序号" prop="id" width="150"></el-table-column>
            <el-table-column label="姓名" prop="name" width="150"></el-table-column>
            <el-table-column label="年龄" prop="age"  width="150"></el-table-column>
            <el-table-column label="职业" prop="worker" width="120"></el-table-column>
<!--            <el-table-column property="hight" label="高亮显示字段" prop="hight" width="120">-->
<!--              <template slot-scope="scope">-->
<!--                <p v-html="scope.row.hight"></p>-->
<!--              </template>-->
<!--            </el-table-column>-->
            <el-table-column label="操作" fixed="right" width="200">
              <template slot-scope="scope">
                <el-button
                    type="primary"
                    icon="el-icon-edit"
                    size="mini"
                    @click="consoleAdd(scope.$index, scope.row)"></el-button>
                <el-button
                    type="primary"
                    icon="el-icon-delete"
                    size="mini"
                    @click="delTbData(scope.row.id)"
                    slot="reference"
                >

                </el-button>
              </template>
            </el-table-column>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click="visible = false">取消</el-button>
              <el-button type="primary" size="mini" @click="visible = false">确定</el-button>
            </div>
          </el-table>
          <el-pagination
              :page-size="20"
              :pager-count="11"
              layout="prev, pager, next"
              :total="1000">
          </el-pagination>
        </el-main>
        <hpAdd v-if="currentNode === 'hpAdd'"></hpAdd>
      </el-container>
    </div>
</template>

<script>
import hpAdd from '@/views/hp/hpAdd'
export default {
  name: "hpList",
  components:{
    hpAdd
  },
  data(){
    return {
      tableData: [
        {
          id:'1',
          name:'123',
          age:2,
          worker:'zzz',
          hight:''
        }
      ],
      currentNode:'',
      visible: false,
    }
  },
  mounted() {
    this.searchTableData()
  },
  methods:{
    addHp(){
      console.log('跳转')
    },
    consoleAdd(index,row){
      console.log(index,row)
      this.$emit('toPage',{path:'hpUpdate',data:row});
    },
    searchTableData(){
      this.$axios.get('person/findAll').then(data=>{
        console.log(data)
        this.tableData = data.data
      })
    },
    delTbData(id){
      this.$axios.post('person/del/'+id)
      .then(req=>{
        this.$message.success(req)
        this.reload()
      })

      console.log(id)
    }
  }
}
</script>

<style scoped>
body{
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
</style>
