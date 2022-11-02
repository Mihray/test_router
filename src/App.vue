<template>
  <!-- <a href="#/">HomeVue</a>|
  <a href="#/helloworld">HelloWorld</a> |
  <a href="#/non-existent-path">Broken Link</a>|
  <component :is="currentView" /> -->
  <router-view></router-view>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HomeVue from './components/HomeVue.vue'
import NotFound from './components/NotFound.vue'

const routes = {
  '/': HomeVue,
  '/helloworld': HelloWorld
}

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      currentPath:window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1)||'/']|| NotFound
    }
  },
  mounted(){
        window.addEventListener('hashchange',()=>{
            this.currentPath=window.location.hash
        })
    },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
