<template>
  <div class="home">

    <el-container>

      <el-aside width="200px">
        <NavMenu></NavMenu>
      </el-aside>

      <el-main>
        <div>
          <router-view/>
        </div>
      </el-main>
    </el-container>


  </div>
</template>

<script>
import NavMenu from "@/views/nav/NavMenu";

export default {
  name: 'Home',
  components: {
    NavMenu
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
