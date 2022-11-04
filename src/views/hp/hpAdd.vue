<template>
    <div>
        <el-form ref="form" :model="customerInfo">
          <el-form-item  label="姓名" prop="name">
              <el-input v-model="customerInfo.name"></el-input>
          </el-form-item>
          <el-form-item label="年龄" prop="age">
            <el-input v-model="customerInfo.age"></el-input>
          </el-form-item>
          <el-form-item label="职业" prop="worker">
            <el-input v-model="customerInfo.worker"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="save(customerInfo)">保存</el-button>
          </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
  name: "hpAdd",
  data(){
    return{
      customerInfo:{
        name:'',
        age:'',
        worker:''
      }
    }
  },
  methods:{
    save(data){
      console.log(data);
      this.$axios.post('doc/person/add', data).then(req=>{
        this.$message.info(req)
        this.$emit('toPage','hpIndex');
      })

    }
  }
}
</script>

<style scoped>

</style>
