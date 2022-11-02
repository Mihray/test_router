<template>
  <h1>HelloWorld{{a}}</h1>
  <button @click="currentView1"></button>
</template>
<script>
import LoginVue from './LoginVue.vue'
const routes2={
  '/':LoginVue,
}
export default {
  components: {
    LoginVue
  },
  data(){
    return{
      currentPath1:window.location.hash
    }
  },
  computed:{
    currentView1(){
      return routes2[this.currentPath1.slice(1)||'/']
    }
  },
  mounted(){
    window.addEventListener('hashchange',()=>{
      this.currentPath1=window.location.hash
    })
  }
}
</script>
<style scoped>

</style>