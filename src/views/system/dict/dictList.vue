<template>
  <div>
    <el-container>
      <el-header style="text-align:right;">
        <el-button type="primary">新增</el-button>
      </el-header>
      <el-main>
        <el-table :data="dictTbList" style="width: 100%">
          <el-table-column label="字典类型" prop="dictType">
          </el-table-column>
          <el-table-column label="标签名称" prop="dictName">
          </el-table-column>
          <el-table-column label="标签值" prop="dictValue">
          </el-table-column>
          <el-table-column label="创建日期" prop="createTime">
          </el-table-column>
          <el-table-column label="是否删除" prop="isDel">
          </el-table-column>
        </el-table>
      </el-main>

    </el-container>

  </div>

</template>

<script>
export default {
  name: "dictList",
  data() {
    return {
      dictTbList: []
    }
  },
  mounted() {
    this.searchDic();
  },
  methods: {
    searchDic() {
      this.$axios.get('doc/dict/query').then(res => {
        this.dictTbList = res.data
        console.log(res)
      }).catch(err => {

      })
    }
  }
}
</script>

<style scoped>

</style>
