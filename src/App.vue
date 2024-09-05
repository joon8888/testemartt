<style scoped>
  @import './assets/css/common.css';
  @import './assets/css/main.css';
  @import './assets/css/header.css';
  @import './assets/css/slide.css';
</style>

<template>
  <div id="app">
    <LayoutNavi />
    <div class="contents">
      <router-view />
    </div>
    <LayoutConts />
    <LayoutFooter />
  </div>
</template>

<script> 
import LayoutNavi   from '@/components/layout/LayoutNavi.vue'
import LayoutConts from '@/components/layout/LayoutConts.vue'
import LayoutFooter from '@/components/layout/LayoutFooter.vue'

export default {
  name: 'App',
  components: {
    LayoutNavi,
    LayoutConts,
    LayoutFooter
  }
} 
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.contents {
  padding: 10px;
  text-align: left; 
}
</style>
