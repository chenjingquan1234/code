<template>
  <div id="app">
    <Footer v-show="$route.meta.showFooter"/>
      <router-view />
  </div>
</template>

<script>
import Footer from './components/Footer'
export default {
  components: {
    Footer
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
   box-sizing: border-box;
  background-color: #f5f1f1;
  min-height: 100vh;
  width: 100%;
}
div {
  box-sizing: border-box;
}
p  {
  margin: 0;
}

#Footer-nav {
 
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
