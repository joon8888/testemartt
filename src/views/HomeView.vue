<template>
<!--container-->
		<div id="st-container">
			<section class="st-main-contents">
        <h2 class="blind">본문</h2>
				<article class="main-banner">
          <!-- 메인 배너 > 링크 이동 -->
          <div class="banner-box">
            <a href="#" class="banner-img" title="새 창" @click="btnPopup('About') "> <!-- modalFullOpen -->
              <img src="./../assets/images/main/banner_1.jpg" alt="배너 이미지">
            </a>
            <div class="banner-info">
              <h3 class="tit">배너 타이틀(링크 이동)</h3>
              <p class="summary">요약 설명</p>
              <div class="details">
                <span class="period">00.00(요일)</span>
                <span class="location">위치</span>
              </div>
            </div>
          </div>
          <!-- //메인 배너 > 링크 이동 -->
          <div class="black-bg" v-show="modalCheck">
            <div class="white-bg">
              <AboutView />
              <div class="modal-btn">
                <button @click="modalOpen">닫기</button>                
              </div>
            </div>
          </div>     

          <!-- 화면 꽉찬 modal -->
          <div class="black-bg" id="myFullsizeModal" tabindex="-1" role="dialog" aria-labelledby="myFullsizeModalLabel" v-show="modalFullCheck">
            <div class="modal-dialog modal-fullsize" role="document">
              <div class="modal-content modal-fullsize">
                <AboutView />
              </div>
            </div>
          </div>
               

          <!-- 메인 배너 > 상세 팝업(레이어) -->
          <div class="banner-box">
            <a href="javascript:void(0);" class="banner-img" data-popup-target="#popup-1" aria-label="배너 상세 보기" @click="btnPopup('Event')">
              <img src="./../assets/images/main/banner_7.jpg" alt="배너 이미지">
            </a>
            <div class="banner-info">
              <h3 class="tit">배너 타이틀(상세 팝업 노출 - 상단 이미지O)</h3>
            </div>
          </div>

          <div class="banner-box">
            <a  href="javascript:void(0);" class="banner-img" data-popup-target="#popup-2" aria-label="배너 상세 보기" @click="btnPopup('Notice')">
              <img src="./../assets/images/main/banner_7.jpg" alt="배너 이미지">
            </a>
            <div class="banner-info">
              <h3 class="tit">배너 타이틀(상세 팝업 노출 - 상단 이미지X)</h3>
            </div>
          </div>
          <!-- //메인 배너 > 상세 팝업(레이어) -->

          <!-- 지도 배너-->
          <div class="banner-box">
            <a href="javascript:void(0);" class="banner-img" data-popup-target="#popup-map" aria-label="스타필드 마켓 지도보기" @click="btnPopup('Map')">
              <img src="./../assets/images/main/banner_map.jpg" alt="배너 이미지">
            </a>
            <div class="banner-info">
              <h3 class="tit">스타필드 마켓 죽전점 둘러보기</h3>
              <p class="summary">원하는 매장과 시설을 쉽게 찾아보세요.</p>
            </div>
          </div>
        </article>

        <article class="main-store">
          <div class="store-tit">
            <p class="">오시는 길</p>
            <div class="store-select">
              <div class="custom-select store-city">
                <label for="store-city-select" class="blind">도시 선택</label>
                <select id="store-city-select" title="도시 선택(현재 비활성화됨)" disabled>
                  <option value="경기">경기</option>
                </select>
              </div>
              <div class="custom-select store-name">
                <label for="store-name-select" class="blind">매장 선택</label>
                <select id="store-name-select" title="매장 선택(현재 비활성화됨)" disabled>
                  <option value="죽전점">죽전점</option>
                </select>
              </div>              
            </div>
          </div>
          <!-- 네이버 지도 -->
          <div class="store-map" id="storeMap"></div>
          <!-- //네이버 지도 -->
          <address class="store-info">
            <p class="info-adr">경기도 용인시 수지구<br>포은대로 552 스타필드 마켓 죽전점</p>
            <div class="info-con">
              <strong>대표번호</strong>
              <span>031 - 888 - 1234</span>
            </div>
            <div class="info-con">
              <strong>영업시간</strong>
              <span>10:00 ~ 22:00</span>
            </div>
          </address>
        </article>
			</section>
		</div>
    <!-- floating -->
    <div class="floating-wrap">
      <div class="floating-icon-top">
        <a href="#st-container" aria-label="콘텐츠 상단으로 이동"></a>
      </div>
    </div>

</template>
<script> 
import AboutView from './AboutView.vue';
export default {
  name: 'LayoutFooter',
  components:{
    AboutView,
  },
  data() {
    return {
      modalCheck: false,      
      modalFullCheck: false,     
    }
  },
  methods: {
    modalOpen() {
      this.modalCheck = !this.modalCheck
    },
    modalFullOpen() {
      this.modalFullCheck = !this.modalFullCheck
    },
    btnPopup(to){            
      var status = "fullscreen=yes,toolbar=no,scrollbars=no,resizable=no,status=no,menubar=no,titlebar=no,top=0,left=0,width=" + screen.width + ", height=" + screen.height;
      var sendData = {key:'1'}
      localStorage.setItem('sendData', JSON.stringify(sendData));
      window.open("/win" + to,"_blank",status); 
    },
  }
} 
</script>

<style>

.modal-dialog.modal-fullsize {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

.popup-view{
  opacity: 0;
  display: none;
  visibility: hidden;
}
.active{
  opacity: 1;
  display: block;
  visibility: visible;
}
/* dimmed */
.modal-wrap {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
}
/* modal or popup */
.modal-container {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 550px;
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
}
.black-bg{
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,0.6);
	position: fixed;
}

.white-bg {
  width: 90%;
	margin: 80px auto;
	background: white;
	border-radius: 5px;
	padding: 20px 0;
}

.close {
	cursor: pointer;
	border: none;
	background: #6667AB;
	color: white;
	font-weight: bold;
	border-radius: 5px;
	padding: 5px 15px;
}

.close:hover {
    color: white;
	font-weight: bold;
	transform: scale(1.1);
	transition: all 0.5s;
}	
</style>

