<template>
  <div>
    <el-button type="primary">新增</el-button>
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
  </div>

</template>

<script>
export default {
  name: "dictList",
  data(){
    return {
      dictTbList:[
        {
          dictName:'123',
          dictValue:'123',
          isDel:'N'
        }
      ]
    }
  },
  created() {
    console.log('进来了')
  },
  methods:{

  }
}
</script>

<style scoped>

</style>
