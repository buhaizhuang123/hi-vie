<template>
  <div>
    <el-container>
      <el-header>
        授信申请
      </el-header>
      <el-main>
        <el-container>
          <el-header>
            <el-main width="200px">
              <li class="el-icon-setting">个人信息</li>
            </el-main>
          </el-header>
          <el-main>
            <el-form :model="creditLimit.personalInfo" :inline="true" size="mini">
              <el-form-item label="用户名">
                <el-input v-model="creditLimit.personalInfo.custName"></el-input>
              </el-form-item>
              <el-form-item label="身份证号">
                <el-input v-model="creditLimit.personalInfo.idNo"></el-input>
              </el-form-item>
              <el-form-item label="手机号">
                <el-input v-model="creditLimit.personalInfo.mobilePhone" type="number"></el-input>
              </el-form-item>
            </el-form>
          </el-main>
        </el-container>
        <el-container>
          <el-header>
            <el-main width="200px">
              <li class="el-icon-setting">配偶信息</li>
            </el-main>
          </el-header>
          <el-main>
            <el-form :model="creditLimit.spouseInfo" :inline="true" size="mini">
              <el-form-item label="用户名">
                <el-input v-model="creditLimit.spouseInfo.custName"></el-input>
              </el-form-item>
              <el-form-item label="身份证号">
                <el-input v-model="creditLimit.spouseInfo.idNo"></el-input>
              </el-form-item>
              <el-form-item label="手机号">
                <el-input v-model="creditLimit.spouseInfo.mobilePhone" type="number"></el-input>
              </el-form-item>
            </el-form>
          </el-main>
        </el-container>
        <el-container>
          <el-header>
            <el-main width="200px">
              <li class="el-icon-setting">联系人信息</li>
            </el-main>
          </el-header>
          <el-main>
            <el-form :model="creditLimit.contactInfo" :inline="true" size="mini">
              <el-form-item label="用户名">
                <el-input v-model="creditLimit.contactInfo.custName"></el-input>
              </el-form-item>
              <el-form-item label="身份证号">
                <el-input v-model="creditLimit.contactInfo.idNo"></el-input>
              </el-form-item>
              <el-form-item label="手机号">
                <el-input v-model="creditLimit.contactInfo.mobilePhone" type="number"></el-input>
              </el-form-item>
            </el-form>
          </el-main>
        </el-container>
        <el-container>
          <el-header>
            <el-main width="200px">
              <li class="el-icon-setting">职业信息</li>
            </el-main>
          </el-header>
          <el-main>
            <el-form :model="creditLimit.occupationInfo" :inline="true" size="mini">
              <el-form-item label="职业类型">
                <el-input v-model="creditLimit.occupationInfo.occuTyp"></el-input>
              </el-form-item>
              <el-form-item label="职级">
                <el-input v-model="creditLimit.occupationInfo.occuLevel"></el-input>
              </el-form-item>
            </el-form>
          </el-main>
        </el-container>
        <el-container>
          <el-header>
            <el-main width="200px">
              <li class="el-icon-setting">单位信息</li>
            </el-main>
          </el-header>
          <el-main>
            <el-form :inline="true" size="mini" :model="creditLimit.unit">
              <el-form-item label="单位名称">
                <el-input v-model="creditLimit.unit.unitName"></el-input>
              </el-form-item>
              <el-form-item label="单位地址">
                <el-input v-model="creditLimit.unit.unitAddress"></el-input>
              </el-form-item>
              <el-form-item label="单位联系电话">
                <el-input type="number" v-model="creditLimit.unit.unitMobilePhone"></el-input>
              </el-form-item>
            </el-form>
          </el-main>
        </el-container>
        <el-button type="primary" size="small" icon="el-icon-check" @click="saveApply(creditLimit)">保存</el-button>
        <el-button type="primary" size="small" icon="el-icon-check" @click="to">跳转</el-button>
      </el-main>
    </el-container>


  </div>
</template>

<script>
export default {
  name: "creditLimitApply", //  授信申请页面
  data() {
    return {
      creditLimit: {
        personalInfo: {
          custName: null, // 姓名
          mobilePhone: null, // 手机号
          idNo: null // 身份证号
        },
        spouseInfo: {
          custName: null, // 姓名
          mobilePhone: null, // 手机号
          idNo: null // 身份证号
        },
        contactInfo: {
          custName: null, // 姓名
          mobilePhone: null, // 手机号
          idNo: null // 身份证号
        },
        occupationInfo: {
          occuTyp: null, // 职业类型
          occuLevel: null // 职级
        },
        unit: {
          unitName: null, // 单位名称
          unitAddress: null, // 单位地址
          unitMobilePhone: null // 单位联系电话
        }
      }
    }
  },
  methods: {

    saveApply(data) {
      console.log(data, 'data')
      this.$axios.post('product/limit/save', data).then(res => console.log(res)).catch(err => console.log(err))
    },
    to() {
      this.$router.push({
        path: 'home',
        query: {id: 'limit'}
      })
    },
    showPage(){
      this.creditLimit.personalInfo = this.$route.query
      console.log(this.$route.query)
    }

  },
  mounted() {
    this.showPage()
  }
}
</script>

<style scoped>

</style>
