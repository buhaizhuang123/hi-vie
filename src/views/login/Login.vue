<template>
  <div>
    <el-container>
        <el-footer>
          <el-form ref="form" style="width: 100%" :model="user" label-width="100px" :label-position="labelPosition" >
            <el-form-item label="用户名"  >
              <el-col :span="11">
                <el-input type="text" name="username" style="width: 300px" v-model="user.username"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="密码" :rules="[
                { required: true, message: '密码不能为空'},
                { type: 'number', message: '密码必须为数字值'}]">
              <el-col :span="11">
                <el-input type="password" name="password" style="width: 300px"  v-model="user.password"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="验证码">
              <el-container style="width: 300px" >
                <el-input aria-placeholder="验证码" v-model="user.imgValue"></el-input>
                <el-image :src="imgObj.src" @click="imgLoad"></el-image>
              </el-container>
            </el-form-item>
            <el-form-item  style="width: 300px" >
              <el-col :span="4">
                <el-button type="success" @click="login(user)">login</el-button>
              </el-col>
            </el-form-item>
          </el-form>
        </el-footer>
    </el-container>
  </div>
</template>
<script>
export default {
  name: 'login',
  data() {
    return {
      user: {
        username: '',
        password: '',
        imgKey: '',
        imgValue: ''
      },
      imgObj: {
        key: '',
        value: '',
        src: ''
      },
      labelPosition:'left'
    }
  },
  methods: {
    login(data) {
      this.$axios.get('/login', {
        params: data
      }).then(res => {
        console.log(res, 'res')
        if (res.data.success) {
          localStorage.setItem('authentication', res.headers.authentication)
          this.$router.push({
            path: '/sys'
          })
        }
        if (!res.data.success) {
          this.$message.error("登录失败   " + res.data.message)
        }
      })
    },
    imgLoad() {
      this.$axios.get('image/generate').then(req => {
        this.imgObj.src = req.data.value
        this.user.imgKey = req.data.key
        console.log(this.src)
      })
    },
  },
  mounted() {
    this.imgLoad()
  }

}
</script>
<style>
.el-header, .el-footer {
  text-align: center;
  line-height: 60px;
  margin: 0 auto;
  padding-top: 200px;
}
</style>
