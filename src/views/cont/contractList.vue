<template>
  <div>
    <el-container>
      <el-header> 贷款申请
      </el-header>
      <el-main>
        <el-header>
          <el-form size="mini" :inline="true" style="width: 700px">
            <el-form-item label="用户名:">
              <el-input style="width: 150px" v-model="search.custName"></el-input>
            </el-form-item>
            <el-form-item label="身份证号:">
              <el-input style="width: 150px" v-model="search.idNo"></el-input>
            </el-form-item>
            <el-form-item label="手机号:">
              <el-input style="width: 150px" v-model="search.mobilePhone"></el-input>
            </el-form-item>
          </el-form>
        </el-header>

        <el-main>
          <el-header style="text-align: right; font-size: 12px;">
            <el-button class="el-icon-setting" style="margin-right: 15px" @click="toApply(search)" type="primary">
              申请
            </el-button>
            <el-button class="el-icon-setting" style="margin-right: 15px" @click="" type="primary">
              查询
            </el-button>
          </el-header>
          <el-main>
            <el-table :data="creditLimit">
              <el-table-column label="授信编号" prop="limitNo"></el-table-column>
              <el-table-column label="申请号" prop="applSeq" v-if="false"></el-table-column>
              <el-table-column label="姓名" prop="custName"></el-table-column>
              <el-table-column label="身份证号" prop="idNo"></el-table-column>
              <el-table-column label="手机号" prop="mobilePhone"></el-table-column>
              <el-table-column label="申请日期" prop="applyDt"></el-table-column>
              <el-table-column label="授信状态">
                <template slot-scope="scope">
                  <el-switch
                      v-model="scope.row['limitSts'] === '0'"
                      active-color="#13ce66"
                      inactive-color="#ff4949"
                      active-text="生效"
                      inactive-text="失效"
                      @change="">
                  </el-switch>
                </template>
              </el-table-column>
            </el-table>
          </el-main>
        </el-main>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "contractList",
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
  },
  methods: {
    toApply(data) {
      this.$router.push({
        name: '/contractApply',
        params:{'1':[1,1,2]}
      })
    }
  }
}
</script>

<style scoped>

</style>
