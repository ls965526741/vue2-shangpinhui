<!--
 * @Author: liaoshuai
 * @Date: 2021-12-24 23:50:53
 * @LastEditors: liaoshuai
 * @LastEditTime: 2022-03-20 08:56:14
 * @Description:入口文件
-->
<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  components: {
    Header,
    Footer
  },

  mounted() {
    this.$store.dispatch('categoryList')
  }
}
</script>
<style scoped>
#app {
  user-select: none;
}
</style>
