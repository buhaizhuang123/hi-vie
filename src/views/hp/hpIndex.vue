<template>
  <div>
    <el-container>
        <el-aside width="400px" class="hp_index_aside">
          <el-row>
            <el-col :span="12">
              <el-menu default-active="2"
                       @open="handleOpen">

                <el-submenu index="1">
                  <template slot="title">
                    首页
                  </template>
                  <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="1-1" @click="currentNode = 'hpIndex'" >列表页</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                  </el-menu-item-group>
                  <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-4-1" @click="currentNode = 'addressList'">地址列表</el-menu-item>
                  </el-submenu>
                </el-submenu>
                <el-submenu index="2">
                  <template slot="title">系统管理</template>
                  <el-menu-item-group>

                    <el-menu-item index="1-1" @click="currentNode = 'dictList'">标签管理</el-menu-item>

                  </el-menu-item-group>

                </el-submenu>


              </el-menu>
            </el-col>
          </el-row>
        </el-aside>

        <el-container>
          <el-main>
            <hpList v-if="currentNode === 'hpIndex'" @toPage="data=>{ currentNode = data['path'] , inputData = data.data}"></hpList>
            <hpAdd v-if="currentNode === 'hpAdd'" @toPage="data=>{ currentNode = data}"></hpAdd>
            <hpUpdate v-if="currentNode === 'hpUpdate'"  @toPage="data=>{ currentNode = data['path']}" :inputData="inputData" :customerInfo="inputData" ></hpUpdate>
            <dictList v-if="currentNode === 'dictList'"  ></dictList>
            <addressList v-if="currentNode === 'addressList'" ></addressList>
          </el-main>
        </el-container>
    </el-container>
  </div>
</template>

<script>
import hpList from '@/views/hp/hpList'
import hpAdd from '@/views/hp/hpAdd'
import hpUpdate from '@/views/hp/hpUpdate'
import dictList from '@/views/dict/dictList'
import addressList from "@/views/address/addressList";

export default {
  name: "hpIndex",
  components:{
    hpList,
    hpUpdate,
    hpAdd,
    dictList,
    addressList
  },
  data(){
    return {
      /* 默认列表页 */
      currentNode:'hpIndex',
      inputData:Object,
      customerInfo:Object
    }
  },
  methods:{
    handleOpen(key,keyPath){
      console.log(key,keyPath)
    },

  }
}
</script>

<style scoped>
.hp_index_aside {
}
</style>
