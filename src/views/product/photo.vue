<template>
  <div>
    <el-continer>
      <el-header>
        图片
        <el-button @click="show"></el-button>
        <el-image :src="image"></el-image>
      </el-header>
    </el-continer>
  </div>
</template>

<script>
export default {
  name: "photo",
  data(){
    return {
      image :''
    }
  },
  methods: {
    show() {
      this.$axios.get('product/photo/photo').then(res => {
        this.image = res.data;
        console.log(this.image)
      }).catch(err=>console.log(err))
      console.log('show')
    }
  },
  mounted() {
    this.show()
  }
}
</script>

<style scoped>

</style>
