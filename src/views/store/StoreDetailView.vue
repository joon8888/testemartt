<style scoped>
    @import './../../assets/css/common.css';
    @import './../../assets/css/main.css';
    @import 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css';
</style>
<template>
<div id="st-container">
      <section class="st-storeDetail-contents">
        <h2 class="blind">본문</h2>
        <article class="store-detail">
          <div class="store-content">
            <!--슬라이드 배너-->  
            <div class="swiper store-banner">
              <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img src="./../../assets/images/temp/starbucks_img.jpg" alt="배너 이미지1">
                  </div>
                  <div class="swiper-slide">
                    <img src="./../../assets/images/temp/starbucks_img.jpg" alt="배너 이미지2">
                  </div>
                  <div class="swiper-slide">
                    <img src="./../../assets/images/temp/starbucks_img.jpg" alt="배너 이미지3">
                  </div>
              </div>
              <!--인디게이션-->
              <div class="swiper-pagination swp-pg"></div>
            </div>
    
            <div class="store-top-info">
              <h2 class="tit">스타벅스</h2>
              <p class="summary">특별한 스타벅스의 경험과 문화를 한 잔의 커피와 함께</p>
            </div> 
            <div class="store-mid-info">
              <div class="store-location">
                <dl>
                  <dt>운영시간</dt>
                  <dd>10:00 - 23:00</dd>
                </dl>
                <dl>
                  <dt>대표전화</dt>
                  <dd>1522 - 3232</dd>
                </dl>
                <dl>
                  <dt>매장위치</dt>
                  <dd>1F</dd>
                </dl>
              </div>
              <div class="store-rw-info">
                <dl>
                  <dt>신세계상품권</dt>
                  <dd>사용가능</dd>
                </dl>
                <dl>
                  <dt>포인트적립</dt>
                  <dd>사용가능</dd>
                </dl>
                <dl>
                  <dt>우수고객할인</dt>
                  <dd>-</dd>
                </dl>
                <dl>
                  <dt>SSGPAY</dt>
                  <dd>사용가능</dd>
                </dl>
                <dl>
                  <dt>반려동물</dt>
                  <dd>캐리어 소지시 가능</dd>
                </dl>
              </div>  
            </div>
          </div>
        </article>
      </section>
		</div>
</template>
