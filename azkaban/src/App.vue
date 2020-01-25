<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/magic.jpg" style="max-width: 300px">
    <WizardList/>
  </div>
</template>

<script>
import WizardList from './components/WizardList'

export default {
  name: 'app',
  components: {
    WizardList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
