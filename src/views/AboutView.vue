<template>
    <div id="st-container">
      <section class="st-storeAbout-container">
        <h2 class="blind">본문</h2>
        <article class="market-info">
          <div class="about-con">
            <div class="about-banner">
              <img src="./../assets/images/market/market_top_banner.jpg" alt="스타필드 마켓 관련 이미지">
            </div>
            <div class="about-info">
              <h3 class="tit">반짝반짝 빛나는 순간을 위해<br>새롭게 탄생한 '스타필드 마켓'</h3>
              <div class="detail">
                <p class="summary">당신의 삶 가까이에서 일상의 즐거움을 
                  누릴 수 있도록 합니다.</p>
                <p class="summary">활기찬 도심의 분위기를 만끽할 수 있는 마켓, 
                  나와 가족의 건강한 일상을 책임지는 문화와 휴식의 
                  공간, 소소한 행복을 느낄 수 있는 다양한 즐길거리까지.</p>
                <p class="summary">좋은 음식, 좋은 이웃, 좋은 문화를 한 곳에 모아
                  마음의 여백을 채우고, 삶의 밀도를 높여줍니다.</p>
              </div>
            </div>
          </div>
          <div class="about-con">
            <div class="about-banner">
              <img src="./../assets/images/market/market_info_banner_1.jpg" alt="스타필드 마켓 관련 이미지">
            </div>
            <div class="about-info">
              <h3 class="tit">스타필드 마켓은<br>일상을 새롭고 풍부하게 채워줍니다.</h3>
              <div class="detail">
                <p class="summary">우리 가족의 식탁을 책임지는 일상 장보기부터,
                  삶의 질을 높여주는 다양한 라이프스타일 브랜드까지 다채로운 쇼핑 경험을 선사합니다.</p>
              </div>
            </div>
          </div>
          <div class="about-con">
            <div class="about-banner">
              <img src="./../assets/images/market/market_info_banner_2.jpg" alt="스타필드 마켓 관련 이미지">
            </div>
            <div class="about-info">
              <h3 class="tit">스타필드 마켓은<br>일상의 균형과 행복을 추구합니다.</h3>
              <div class="detail">
                <p class="summary">일상 속 휴식과 충전이 조화롭게 밸런스를 
                  이루는 삶, 에너지를 불어넣는 즐길거리와 여유로운 
                  휴식이 어우러져 일상을 한가득 채워줍니다.</p>
              </div>
            </div>
          </div>
          <div class="about-con">
            <div class="about-banner">
              <img src="./../assets/images/market/market_info_banner_3.jpg" alt="스타필드 마켓 관련 이미지">
            </div>
            <div class="about-info">
              <h3 class="tit">스타필드 마켓은 일상에<br>필요한 모든 것들을 이어줍니다.</h3>
              <div class="detail">
                <p class="summary">사람과 사람을 연결하는 커뮤니티, 사람과 일상을
                  연결하는 편의시설 등 우리 동네 가까이에서 모든 것들을 바로 해결해주는 토탈 솔루션을 제공합니다.</p>
              </div>
            </div>
          </div>
          <div class="btm-con">
            <span>우리 동네에서 누리는 최고의 삶</span>
            <h2><strong>MY LOCAL DELIGHT, </strong>
            스타필드 마켓</h2>
          </div>
        </article>
      </section>
		</div>
</template>

<script> 
export default {
  name: 'AboutView',
  components:{
    
  },
  data() {
    return {
      modalCheck: false,
      openModal: true,
    }
  },
  mounted(){
      console.log('sendData::');
      console.log(JSON.parse(localStorage.getItem('sendData')));
  },
  methods: {
      closePopup: function(){
        this.$emit('close-popup')
      }
  }
} 
</script>
