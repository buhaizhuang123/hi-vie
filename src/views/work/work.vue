<template>
  <div >
    <p > 工作台 </p>
    <el-container>
      <el-main>
        <el-button type="primary" @click="downLoad">
          下载
        </el-button>
      </el-main>
    </el-container>
  </div>


</template>

<script>
export default {
  name: "work",
  methods:{
    downLoad(){
      // 图片下载
      this.$axios.get('doc/file/downLoad',null,{responseType:'blob'})
      window.open('doc/file/downLoad')
    }
  }
}
</script>

<style scoped>

</style>
