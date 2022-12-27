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
                <el-input v-model="creditLimit.personalInfo.custName" :readonly="isReadOnly"></el-input>
              </el-form-item>
              <el-form-item label="身份证号">
                <el-input v-model="creditLimit.personalInfo.idNo" :readonly="isReadOnly"></el-input>
              </el-form-item>
              <el-form-item label="手机号">
                <el-input v-model="creditLimit.personalInfo.mobilePhone" type="number" :readonly="isReadOnly"></el-input>
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
                <el-input v-model="creditLimit.spouseInfo.custName" :readonly="isReadOnly"></el-input>
              </el-form-item>
              <el-form-item label="身份证号">
                <el-input v-model="creditLimit.spouseInfo.idNo" :readonly="isReadOnly"></el-input>
              </el-form-item>
              <el-form-item label="手机号">
                <el-input v-model="creditLimit.spouseInfo.mobilePhone" type="number" :readonly="isReadOnly"></el-input>
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
                <el-input v-model="creditLimit.contactInfo.custName" :readonly="isReadOnly"></el-input>
              </el-form-item>
              <el-form-item label="身份证号">
                <el-input v-model="creditLimit.contactInfo.idNo" :readonly="isReadOnly"></el-input>
              </el-form-item>
              <el-form-item label="手机号">
                <el-input v-model="creditLimit.contactInfo.mobilePhone" type="number" :readonly="isReadOnly"></el-input>
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
                <el-input v-model="creditLimit.occupationInfo.occuTyp" :readonly="isReadOnly"></el-input>
              </el-form-item>
              <el-form-item label="职级">
                <el-input v-model="creditLimit.occupationInfo.occuLevel" :readonly="isReadOnly"></el-input>
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
                <el-input v-model="creditLimit.unit.unitName" :readonly="isReadOnly"></el-input>
              </el-form-item>
              <el-form-item label="单位地址">
                <el-input v-model="creditLimit.unit.unitAddress" :readonly="isReadOnly"></el-input>
              </el-form-item>
              <el-form-item label="单位联系电话">
                <el-input type="number" v-model="creditLimit.unit.unitMobilePhone" :readonly="isReadOnly"></el-input>
              </el-form-item>
            </el-form>
          </el-main>
        </el-container>
        <el-button type="primary" size="small" icon="el-icon-check" @click="saveApply(creditLimit)" v-show="!isReadOnly">保存</el-button>
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
          custName: '', // 姓名
          mobilePhone: '', // 手机号
          idNo: '' // 身份证号
        },
        spouseInfo: {
          custName: '', // 姓名
          mobilePhone: '', // 手机号
          idNo: '' // 身份证号
        },
        contactInfo: {
          custName: '', // 姓名
          mobilePhone: '', // 手机号
          idNo: '' // 身份证号
        },
        occupationInfo: {
          occuTyp: '', // 职业类型
          occuLevel: '' // 职级
        },
        unit: {
          unitName: '', // 单位名称
          unitAddress: '', // 单位地址
          unitMobilePhone: '' // 单位联系电话
        }
      },
      isReadOnly: false
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
    showPage() {
      this.isReadOnly = true
      this.$axios.get('product/limit/findByApplSeq', {
        params: {'applSeq': this.$route.query.applSeq}
      }).then(res => {
        if (res.data.personalInfo) {
          this.creditLimit.personalInfo = res.data.personalInfo
        }

        if (res.data.spouseInfo) {
          this.creditLimit.spouseInfo = res.data.spouseInfo
        }

        if (res.data.contactInfo) {
          this.creditLimit.contactInfo = res.data.contactInfo
        }

        if (res.data.occupationInfo) {
          this.creditLimit.occupationInfo = res.data.occupationInfo
        }
        if (res.data.unit) {
          this.creditLimit.unit = res.data.unit
        }
      }).catch(err => console.log(err))

      //
      // this.creditLimit.personalInfo = this.$route.query
      // console.log(this.$route.query)
    }

  },
  mounted() {
    this.showPage()
  }
}
</script>

<style scoped>

</style>
