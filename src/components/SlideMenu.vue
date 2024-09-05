<style scoped>
    @import './../assets/css/common.css';
    @import './../assets/css/main.css';
    @import 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css';
</style>
<template>
<div id="st-wrap">
  <!-- <aside id="head-nav"> -->
    <div id="menu-dim"></div>
    <div class="menu-wrap">
      <div class="menu-container">
        <div class="menu-head">
          <h2 class="store-logo"><img src="./../assets/images/common/logo_vertical.svg" alt="Starfield MARKET"></h2>        
          <div class="store-info">
            <dl class="info-hours">
              <dt>
                <!-- 점포 선택 활성화 시 disabled 클래스 삭제 -->
                <div class="custom-select disabled">
                  <label for="store-select" class="blind">매장 선택</label>
                  <select id="store-select" title="매장 선택(현재 비활성화됨)" disabled>
                    <option value="죽전점" selected>죽전점</option>
                  </select>
                </div>
              </dt>
              <dd>{{openTime}} ~ {{closeTime}}</dd>
            </dl>
            <ul class="info-noti">
              <li>이마트 죽전점 영업시간 {{openTime}} ~ {{closeTime}}</li>
              <li>브랜드별 영업시간 상이</li>
              <li>매월 2, 4주차 일요일 휴무</li>
            </ul>
          </div>
        </div>
        <div class="menu-list">
          <ul>
            <li><a v-bind:href="'/'">HOME</a></li>
            <li><a v-bind:href="'/about'">스타필드 마켓 소개</a></li>          
            <li><a v-bind:href="'/store'">매장안내</a></li>
            <li><a v-bind:href="'/store/fnb'" id="link-fnb">레스토랑&카페</a></li>
            <li><a v-bind:href="'/facility'" id="link-facility">편의시설</a></li>
            <li><a v-bind:href="'/map'" data-popup-target="#popup-map">지도보기</a></li>
          </ul>
        </div>
        <div class="menu-close">
          <button type="button" aria-label="메뉴창 닫기"></button>
        </div>
      </div>
    </div>
  <!-- </aside> -->
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: "SlideMenu",
  components: {
  },
  data() {
    return {
      openTime: '0000',
      closeTime: '0000'
    }
  },
  computed: {
  },
  methods: {
    doClose() {
      this.$emit('close')
    },
    getSfmarketInfo(){

      axios.post('/emartapi', {
        "siteNo":"07",
        "storeCode":"1068",
        "yearMonth":"202408"
      }, {
        headers: { 'Content-Type': 'application/json' },
      })
          .then((res) => {
            console.log(res);
            let oTime = res.data.openTime;
            let cTime = res.data.closeTime;
            this.openTime = oTime.substring(0,2) + ':' + oTime.substring(2,4);
            this.closeTime = cTime.substring(0,2) + ':' + cTime.substring(2,4);
          });
    }
  },
  mounted()
  {
    // this.getSfmarketInfo();
  }

}
</script>

