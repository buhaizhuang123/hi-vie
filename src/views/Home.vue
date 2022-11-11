<template>
  <div class="home">
    <!--    <img alt="Vue logo" src="../assets/logo.png">-->
    <!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <el-container style="height: 900px; border: 1px solid #eee">

      <el-aside width="400px">
        <el-aside width="400px" class="hp_index_aside">
          <el-row>
            <el-col :span="12">
              <el-menu default-active="2" mode="horizontal">
                <el-menu-item index="1" @click="currentNode = 'work'" aria-colspan="12">
                  <template slot="title">
                    工作台
                  </template>

                </el-menu-item>
                <el-submenu index="2">
                  <template slot="title">
                    个人信息
                  </template>
                  <el-menu-item index="1-1" @click="currentNode = 'personSearch'">查询</el-menu-item>
                  <el-menu-item index="1-2" @click="currentNode = 'limit'">授信申请</el-menu-item>
                  <el-menu-item index="1-3" @click="currentNode = 'contractList'">贷款申请</el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                  <template slot="title">系统管理</template>
                  <el-menu-item-group>

                    <el-menu-item index="1-1" @click="currentNode = 'dictList'">标签管理</el-menu-item>

                  </el-menu-item-group>

                </el-submenu>


              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
      </el-aside>
      <el-container>
        <el-main style="width:400px;height: 1200px">
          <dictList v-if="currentNode == 'dictList'"></dictList>
          <personSearch v-if="currentNode == 'personSearch'"></personSearch>
          <work v-if="currentNode == 'work'"></work>
          <limit v-if="currentNode == 'limit'"></limit>
          <contractList v-if="currentNode == 'contractList'"></contractList>
        </el-main>
      </el-container>
    </el-container>


  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import hpList from '@/views/hp/hpList'
import dictList from '@/views/dict/dictList';
import personSearch from '@/views/product/PersonShow'
import work from "@/views/work/work";
import limit from "@/views/limit/creditLimit"
import contractList from "@/views/cont/contractList";

export default {
  name: 'Home',
  components: {
    HelloWorld,
    hpList,
    dictList,
    personSearch,
    work,
    limit,
    contractList
  },
  data() {
    return {
      currentNode: 'work'
    }
  },
  mounted() {
    if (this.$route.query) {
      this.currentNode = this.$route.query.id
    }
  }
}
</script>
