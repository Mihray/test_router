<template>
    <h1>Login</h1>
    <button @click="click('./home')">登录</button>
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
      methods:{
        click(url){
          this.$router.push(url)
        },
      }
  }
  </script>
  
  <style>
  
  </style>
  