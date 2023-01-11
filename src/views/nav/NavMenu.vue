<template>
  <el-container>
    <el-row class="tac">
      <el-col >
        <el-menu :default-active="$route.path" :router="true">
          <el-menu-item index="/work" >
            <template slot="title">
              工作台
            </template>

          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              个人信息
            </template>
            <el-menu-item index="person_search">查询</el-menu-item>
            <el-menu-item index="limit">授信申请</el-menu-item>
            <el-menu-item index="contractList">贷款申请</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">系统管理</template>
            <el-menu-item-group>

              <el-menu-item index="dictList" >标签管理</el-menu-item>
              <el-menu-item index="custManager" >客户管理</el-menu-item>

            </el-menu-item-group>

          </el-submenu>


        </el-menu>
      </el-col>
    </el-row>

  </el-container>
</template>

<script>
export default {
  name: "NavMenu"
}
</script>

<style scoped>

</style>
