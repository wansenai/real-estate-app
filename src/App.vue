<template>
  <div id="app">
  <!-- <chooseWords></chooseWords> -->
 
  <router-view></router-view>
  </div>
</template>

<script>
// import chooseWords from './components/chooseWords.vue'

export default {
  name: 'App',
  components: {
    // chooseWords
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 30px;
}
</style>
