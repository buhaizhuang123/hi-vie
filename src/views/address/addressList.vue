<template>
    <div>
      <el-row>
        <el-col :span="8">
          <el-input placeholder="country" v-model="searchData.country"></el-input>
        </el-col>
        <el-col :span="8">
          <el-input placeholder="city" v-model="searchData.city"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-button  icon="el-icon-circle-plus-outline" @click="toAddressPtoBaseInfo"></el-button>
        </el-col>
        <el-col :span="8">
          <el-button  icon="el-icon-search" @click="searchTbData(searchData)"></el-button>
        </el-col>
      </el-row>
      <el-table :data="tableData"  ref="addressList">
        <el-table-column label="国家" prop="country" ></el-table-column>
        <el-table-column label="省份" prop="city"></el-table-column>
        <el-table-column label="地域" prop="territory"></el-table-column>
        <el-table-column label="content" prop="content"></el-table-column>
        <el-table-column label="特产" prop="speciality"></el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button  size="small" icon="el-icon-edit"  ></el-button>
              <el-button  size="small" icon="el-icon-delete" @click="delTbData(scope.row.id)"  ></el-button>
            </template>
        </el-table-column>
      </el-table>
      <div id="myChar">

      </div>
    </div>
</template>

<script>
/*
*  地址
* */
export default {
  name: "addressList",
  data(){
    return {
        tableData:[
          {
            id:'',
            country:'',
            city:'',
            territory:'',
            content:'',
            speciality:'',
          }
        ],
      searchData:{
          country:'',
          city: ''
      }
    }
  },
  mounted() {
    this.findAddressList();
  },
  methods:{
    findAddressList(){
      this.$axios(
          {
            method :'post',
            url:'address/all',
            params:{
              'country':'china','city':'山西省'
            }
          }
      ).then(data=>{
        this.tableData = JSON.parse(JSON.stringify(data.data))
      })
    },
    searchTbData(data){
      this.$axios({
        method:'post',
        url:'address/all',
        params:data
      }).then(req=>{
        this.tableData = JSON.parse(JSON.stringify(req.data))
      })
    },
    searchTbDataLike(data){
      this.$axios({
        method:'post',
        url:'address/allLike',
        params:data
      }).then(req=>{
        this.tableData = JSON.parse(JSON.stringify(req.data))
      })
    },
    delTbData(id){
      this.$axios(
          {
            method:'post',
            url:'address/del'+'/'+id,
          }
      ).then(data=>{
        this.$message.success(data.data)
        this.history.reload()
      })
    },
    toAddressPtoBaseInfo(){
      this.$router.push({
        path:'/addressBaseInfo'
      })
    }
    }
}
</script>

<style scoped>

</style>
