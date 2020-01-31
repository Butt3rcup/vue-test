<template>
  <div>
    <h1>Home</h1>
    <el-button @click="outLogin">
      退出
    </el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    outLogin () {
      window.sessionStorage.removeItem('token')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped></style>
