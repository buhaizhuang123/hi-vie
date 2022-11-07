<template>
  <div>
    <el-container>
      <el-header> 授信申请
      </el-header>
      <el-main>
        <el-container>
          <el-header>
            <el-form size="mini" :inline="true" style="width: 700px">
              <el-form-item label="用户名">
                <el-input style="width: 150px" v-model="search.custName"></el-input>
              </el-form-item>
              <el-form-item label="身份证号">
                <el-input style="width: 150px" v-model="search.idNo"></el-input>
              </el-form-item>
              <el-form-item label="手机号">
                <el-input style="width: 150px" v-model="search.mobilePhone"></el-input>
              </el-form-item>
            </el-form>
          </el-header>
        </el-container>
        <el-container>
          <el-header style="text-align: right; font-size: 12px;">
            <el-button class="el-icon-setting" style="margin-right: 15px" @click="toApply" type="primary">
              申请
            </el-button>
            <el-button class="el-icon-setting" style="margin-right: 15px" type="primary">
              查询
            </el-button>
          </el-header>
          <el-table :data="creditLimit">
            <el-table-column label="授信编号" prop="limitNo"></el-table-column>
            <el-table-column label="客户号"></el-table-column>
            <el-table-column label="姓名"></el-table-column>
            <el-table-column label="身份证号"></el-table-column>
            <el-table-column label="手机号"></el-table-column>
            <el-table-column label="申请日期"></el-table-column>
            <el-table-column label="授信状态"></el-table-column>
          </el-table>
        </el-container>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "creditLimit",
  data() {
    return {
      creditLimit: [],
      search: {
        custName: '',
        idNo: '',
        mobilePhone: ''
      }
    }
  },
  mounted() {
    this.loadLimit()
  },
  methods: {
    loadLimit() {
      this.$axios.get('doc/limit/query').then(res => {
        console.log(res)
      })
    },
    toApply() {
      // 跳转授信申请页面
      this.$router.push(
          {
            name: 'limitApply'
          }
      )
    }
  }
}
</script>

<style scoped>
</style>
