<template>
  <div id="app">
    <Header @search-text="searchText"/>
    <WizardList :search="search"/>
  </div>
</template>

<script>
import WizardList from './components/WizardList'
import Header from './components/Header'

export default {
  name: 'app',
  components: {
    WizardList,
    Header
  },
  data() {
    return {
      search: ""
    }
  },
  methods: {
    searchText(value) {
      this.search = value;
    }
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
