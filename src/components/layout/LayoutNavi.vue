<template>
	
		<header id="st-header">
      <div class="head-wrap head-wrap-main">
        <div class="head-left">
          <button type="button" class="btn-head-back" onclick="onBack()" aria-label="뒤로가기"></button>
          <a v-bind:href="'/'" class="btn-head-home" aria-label="홈으로 이동"></a>
        </div>
        <h1 class="head-tit">
          <span class="top-logo">
            <img src="./../../assets/images/common/logo.svg" alt="Starfield MARKET">
          </span>
        </h1>
        <div class="head-right">
          <button type="button" class="btn-head-menu" @click="doOpenClose" aria-label="전체 메뉴 열기"></button>
        </div>
      </div>
      <Transition name="slide" mode="out-in">
        <SlideMenu v-show="isSlide" @close="doClose" />
      </Transition>      
    </header>    
        
 </template>

<script>
import SlideMenu from '@/components/SlideMenu.vue'
export default {
  name: "layoutNavi",
  data() {
    return {
      isSlide: false
    }
  },
  components:{
    SlideMenu,
  },
  methods: {
    doOpenClose(){      
      this.isSlide = !this.isSlide
    },

    doClose(){      
      this.isSlide = false
    }
  },
}</script>

<!-- <style>
nav {
  padding: 30px;
  background-color: #f1f1f1;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-active {
  color: #42b983;
}

</style> -->
