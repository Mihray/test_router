<template>
  <h1>home</h1>
  <router-view></router-view>
  <div>HomeVue的底部边栏</div>
  <div>
    <button @click="click('/hello')">HelloWorld</button>
    <button @click="click('/404')">点击跳转404</button>
  </div>

</template>

<script>

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data() {
    return {
      
    }
  },
  mounted(){
      this.$router.push('./hello');
    },
    methods:{
      click(url){
        this.$router.push(url)
      }
    }
}
</script>

<style>

</style>
