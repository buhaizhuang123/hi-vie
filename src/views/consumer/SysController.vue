<template>
  <div>

    <el-container>
      <el-header>
        header
      </el-header>
      <el-container>
        <el-aside>
          <li v-for="(item,index) in loginUser">
            {{index}} : {{item}}
          </li>
        </el-aside>
        <el-main>
          <el-button type="primary" icon="el-icon-search" @click="toPerseon">搜索</el-button>
          <el-table :data='user' style="width: 100%" :header-cell-style="headClass" :cell-style="rowClass" stripe>
            <el-table-column prop="userId" label="用户ID" width="180" fixed></el-table-column>
            <el-table-column prop="username" label="用户名" width="180"></el-table-column>
            <el-table-column prop="password" label="用户密码" width="180"></el-table-column>
            <el-table-column prop="userAuth" label="用户权限" width="180"></el-table-column>
            <el-table-column label="操作" width="180">
              <template slot-scope="scope">
                <el-button type="text" size="small" @click="cn()">查看</el-button>
                <el-popover placement="right" width="400" trigger="click">
                  <el-row>{{ obj.userId }}</el-row>
                  <el-row>{{ obj.username }}</el-row>
                  <el-row>{{ obj.password }}</el-row>
                  <el-row>{{ obj.userAuth }}</el-row>
                  <el-button size="small" slot="reference" @click="ck(scope.row.userId)">查看</el-button>
                </el-popover>
              </template>
            </el-table-column>
          </el-table>

        </el-main>
      </el-container>

    </el-container>
  </div>
</template>

<script>
export default {
  name: "SysController",
  data() {
    return {
      user: [
        {
          userId: '',
          username: '',
          password: '',
          userAuth: [],
          show: false
        }
      ],
      loginUser: [],
      obj: {},
      mess: this.$route
    }
  },
  mounted() {

    this.list();
    //判断当前浏览器是否支持WebSocket
    this.timer_login(this.loginUser)
    this.show = false;
    console.log(this.mess,'mess')
  },
  methods: {
    list() {
      this.$axios.get('doc/sys/listUsr?limit=1').then(req => {
        if (req.data.success) {
          this.user = req.data.data
        }
      })
    },
    // 实时查询登录角色
    timer_login(loginUser) {
      var ws = new WebSocket("ws://127.0.0.1:8912/websocket/tsName");

      ws.onopen = function (info) {
        this.ws = ws;
      }

      ws.onclose = function () {
        loginUser.push('close')
      }

      ws.onmessage = function (info) {
        console.log(info.data,'info.data')
        loginUser.push(info.data)
      }

      ws.onerror = function (err) {
        console.log(info, 'error')
        loginUser.push(err)
      }
    },
    look(index) {
      console.log(index)
      this.$message.info(this.loginUser[index])
    },
    ck(index) {
      this.obj = this.user[index - 1]
    },
    cn() {

    },
    headClass() {
      return 'text-align: center;background:rgb(242,242,242);color:rgb(140,138,140)';
    },
    rowClass() {
      return "text-align:center";
    },
    toPerseon(){
      this.$router.replace({
        path:'/person_search'
      })
    }
  },
  watch: {
    loginUser: {
      handler(newVal, oldVal) {
      },
      deep: true,
      immediate: true
    }
  }
}
</script>

<style scoped>

</style>
