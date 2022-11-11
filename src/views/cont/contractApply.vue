<template>
  <div>
    <el-container>
      <el-aside>
        <el-popover placement="bottom" width="920" v-model="isShow">
          <el-header>
            <el-main>
              <el-form size="mini" :inline="true" style="width: 900px">
                <el-form-item label="用户名:">
                  <el-input style="width: 150px" v-model="search.custName" suffix-icon="el-icon-delete">
                    <i
                        class="el-icon-edit el-input__icon"
                        slot="edit"
                    >
                    </i>
                  </el-input>
                </el-form-item>
                <el-form-item label="身份证号:">
                  <el-input style="width: 150px" v-model="search.idNo" suffix-icon="el-icon-delete"></el-input>
                </el-form-item>
                <el-form-item label="手机号:">
                  <el-input style="width: 150px" v-model="search.mobilePhone" suffix-icon="el-icon-delete"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button style="margin-right: 15px" @click="loadLimit(search)" type="primary">
                    查询
                  </el-button>
                </el-form-item>
              </el-form>

            </el-main>
          </el-header>
          <el-table :data="creditLimit" @row-click="selectOne">
            <el-table-column label="姓名" prop="custName"></el-table-column>
            <el-table-column label="身份证号" prop="idNo"></el-table-column>
            <el-table-column label="手机号" prop="mobilePhone"></el-table-column>
            <el-table-column label="申请日期" prop="applyDt"></el-table-column>
          </el-table>
          <el-button slot="reference" style="margin-right: 15px" type="primary" icon="el-icon-search"
                     @click="loadLimit"></el-button>
        </el-popover>
      </el-aside>
      <el-main>
        <el-form :inline="true" size="mini" :model="custInfo">
          <el-form-item label="客户名:">
            <el-input v-model="custInfo.custName" readonly></el-input>
          </el-form-item>
          <el-form-item label="身份证号:">
            <el-input v-model="custInfo.idNo" readonly></el-input>
          </el-form-item>
          <el-form-item label="手机号:">
            <el-input v-model="custInfo.mobilePhone" readonly></el-input>
          </el-form-item>
        </el-form>
        <el-button @click="toContract()">保存</el-button>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "contractApply",
  data() {
    return {
      creditLimit: [],
      search: {},
      custInfo: {},
      isShow: false
    }
  },
  methods: {
    loadLimit(data) {
      this.$axios.post('doc/limit/query', data).then(res => {
        this.creditLimit = res.data
      }).catch(err => {
        console.log(err)
      })
    },
    selectOne(row, column, event) {
      this.isShow = !this.isShow
      this.custInfo = row
    },
    toContract() {
      this.$router.push({
        path: 'home',
        query: {id:'contractList'}
      })
    }
  },
  created() {
  },

  mounted() {

  }
}
</script>

<style scoped>

</style>
