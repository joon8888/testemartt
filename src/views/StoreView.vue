<style scoped>
    @import './../assets/css/common.css';
    @import './../assets/css/main.css';        
</style>
<template>
		<div id="st-container">
      <section class="st-store-container">
        <h2 class="blind">매장 안내</h2>
        <!-- 240902 작업 전달 > 1depth / 2depth / Tab con 영역 작업 내용 -->
        <article class="store-info">
          <!-- Tab 1depth -->
          <article class="store-tab-area">
            <ul class="tab-menu" role="tablist">
              <li id="tab-1" tabindex="0" role="tab" :class="0 === pointIndex ? 'active': ''"  @click="pointTab(0)">층별</li>
              <li id="tab-2" tabindex="0" role="tab" :class="1 === pointIndex ? 'active': ''" @click="pointTab(1)">카테고리</li>
              <li id="tab-3" tabindex="0" role="tab" :class="2 === pointIndex ? 'active': ''" @click="pointTab(2)">편의시설</li>
              <li tabindex="0" role="button" aria-haspopup="dialog" data-popup-target="#popup-map" :class="3 === pointIndex ? 'active': ''" @click="pointTab(3)">지도보기</li>
            </ul>
          </article>
          <!-- //Tab 1depth -->

          <!-- Tab 2depth -->
          <div class="tab-2depth-area">
            <div class="tab-2depth tab-2depth-floor" id="tab-2depth-floor" role="tabpanel">
              <a href="#none" id="subtab-b1" role="tab" class="active">B1</a>
              <a href="#none" id="subtab-1f" role="tab">1F</a>
              <a href="#none" id="subtab-2f" role="tab">2F</a>
              <a href="#none" id="subtab-3f" role="tab">3F</a>
              <a href="#none" id="subtab-4f" role="tab">4F</a>
              <a href="#none" id="subtab-5f" role="tab">5F</a>
              <a href="#none" id="subtab-6f" role="tab">6F</a>
            </div>
            <div class="tab-2depth tab-2depth-category" id="tab-2depth-category" role="tabpanel">
              <a href="#none" id="subtab-all" role="tab" class="active">전체</a>
              <a href="#none" id="subtab-emart" role="tab">이마트</a>
              <a href="#none" id="subtab-fnb" role="tab">레스토랑&카페</a>
              <a href="#none" id="subtab-fashion" role="tab">패션잡화</a>
              <a href="#none" id="subtab-entertainment" role="tab">엔터테인먼트</a>
              <a href="#none" id="subtab-lifestyle" role="tab">라이프스타일</a>
            </div>
          </div>
          <!-- //Tab 2depth -->

          <!-- Tab con -->
          <div class="tab-con">
            <div class="con con-floor" id="con-floor" role="tabpanel">
              <!-- 개발영역::층별 & 카테고리 // -->
              <div class ="store-list">
                <!-- 카테고리 // -->
                <div class="category-list">
                  <h2 class="category-list-tit">카테고리명 10글자 이내 입력 권장 카테고리명 10글자 이내 입력 권장 카테고리명 10글자 이내 입력 권장</h2> <!-- 카테고리명 -->
                  <ul>
                    <!-- 카테고리 내 세부 매장 리스트 // -->
                    <li class="category-store">
                      <!-- 매장상세 페이지 랜딩연결 // -->
                      <a class="category-store-info" href="./store_info_detail.html"> <!-- 매장상세 페이지 -->
                        <div class="category-store-logo"><img src="./../assets/images/temp/logo_emart.png" alt="매장명"></div> <!--이미지 경로 / 대체텍스트 -->
                        <div class="category-store-name"><p>매장명 매장명 매장명 매장명 매장명 매장명 매장명 매장명</p></div> <!--매장명 -->
                      </a>
                      <!-- // 매장상세 페이지 랜딩연결 -->
                      <div class="category-store-btn">
                        <!-- 전화번호 없을 경우 .category-store-btn 유지한 채 a태그 미노출 //  -->
                        <a href="tel:0212341234"> <!-- 매장 전화번호 -->
                          <i class="ico-call">전화걸기</i>
                        </a>
                        <!-- // 전화번호 없을 경우 .category-store-btn 유지한 채 a태그 미노출  -->
                      </div>
                    </li>
                    <!-- // 카테고리 내 세부 매장 리스트 -->
                  </ul>
                </div>
                <!-- // 카테고리 -->
                <div class="category-list">
                  <h2 class="category-list-tit">이마트</h2> 
                  <ul>
                    <li class="category-store">
                      <a class="category-store-info" href="./store_info_detail.html">
                        <div class="category-store-logo"><img src="./../assets/images/temp/logo_emart.png" alt="이마트 죽전점"></div> 
                        <div class="category-store-name"><p>이마트 죽전점</p></div>
                      </a>
                      <div class="category-store-btn">
                        <a href="tel:0212341234"> 
                          <i class="ico-call">전화걸기</i>
                        </a>
                      </div>
                    </li>
                    <li class="category-store">
                      <a class="category-store-info" href="./store_info_detail.html">
                        <div class="category-store-logo"><img src="./../assets/images/temp/logo_emart.png" alt="이마트 죽전점"></div> 
                        <div class="category-store-name"><p>이마트 죽전점</p></div>
                      </a>
                      <div class="category-store-btn">
                        <a href="tel:0212341234"> 
                          <i class="ico-call">전화걸기</i>
                        </a>
                      </div>
                    </li>
                    <li class="category-store">
                      <a class="category-store-info" href="./store_info_detail.html">
                        <div class="category-store-logo"><img src="./../assets/images/temp/logo_emart.png" alt="이마트 죽전점"></div> 
                        <div class="category-store-name"><p>이마트 죽전점</p></div>
                      </a>
                      <div class="category-store-btn">
                        <a href="tel:0212341234"> 
                          <i class="ico-call">전화걸기</i>
                        </a>
                      </div>
                    </li>
                    <li class="category-store">
                      <a class="category-store-info" href="./store_info_detail.html">
                        <div class="category-store-logo"><img src="./../assets/images/temp/logo_emart.png" alt="이마트 죽전점"></div> 
                        <div class="category-store-name"><p>이마트 죽전점 이마트 죽전점 (전화 번호 없는 경우) </p></div>
                      </a>
                      <div class="category-store-btn">
                        <!-- <a href="tel:0212341234"> 
                          <i class="ico-call">전화걸기</i>
                        </a> -->
                      </div>
                    </li>
                    <li class="category-store">
                      <a class="category-store-info" href="./store_info_detail.html">
                        <div class="category-store-logo"><img src="./../assets/images/temp/logo_emart.png" alt="이마트 죽전점"></div> 
                        <div class="category-store-name"><p>이마트 죽전점</p></div>
                      </a>
                      <div class="category-store-btn">
                        <a href="tel:0212341234"> 
                          <i class="ico-call">전화걸기</i>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- // 개발영역::층별 & 카테고리-->
            </div>
            <div class="con con-category" id="con-category" role="tabpanel">
              <!-- 개발영역::층별 & 카테고리 // -->
              <div class ="store-list">
                <!-- 카테고리 // -->
                <div class="category-list">
                  <h2 class="category-list-tit">이마트 (카테고리명 10글자 이내 입력 권장) </h2> <!-- 카테고리명 -->
                  <ul>
                    <!-- 카테고리 내 세부 매장 리스트 // -->
                    <li class="category-store">
                      <!-- 매장상세 페이지 랜딩연결 // -->
                      <a class="category-store-info" href="./store_info_detail.html"> <!-- 매장상세 페이지 랜딩연결-->
                        <div class="category-store-logo"><img src="./../assets/images/temp/logo_emart.png" alt="이마트(매장명)"></div> <!--이미지 경로 / 대체텍스트 -->
                        <div class="category-store-name"><p>이마트 (매장명)</p></div> <!--매장명 -->
                      </a>
                      <!-- // 매장상세 페이지 랜딩연결 -->
                      <div class="category-store-btn">
                        <a href="tel:0212341234"> <!-- 매장 전화번호 -->
                          <i class="ico-call">전화걸기</i>
                        </a>
                      </div>
                    </li>
                    <!-- // 카테고리 내 세부 매장 리스트 -->
                  </ul>
                </div>
                <!-- // 카테고리 -->
              </div>
              <!-- // 개발영역::층별 & 카테고리-->
            </div>
            <div class="con con-facility" id="con-facility" role="tabpanel">
              <!-- 하드코딩영역 :: 편의시설 // -->
              <div class="facility-list">
                <ul>
                  <li class="store-detail">
                    <div class="store-top-info">
                      <h2 class="tit">고객만족센터</h2>
                      <p class="summary">교환 및 환불, 고객님의 불편사항이나 문제점 등을 소비자 분쟁 해결 기준에 따라 처리해 드립니다.</p>
                    </div> 
                    <div class="store-mid-info">
                      <div class="store-location">
                        <dl>
                          <dt>운영시간</dt>
                          <dd>10:00 - 23:00</dd>
                        </dl>
                        <dl>
                          <dt>매장위치</dt>
                          <dd>B1F</dd>
                          <dd>무인양품 맞은편</dd>
                        </dl>
                      </div>
                    </div>
                  </li>
                  <li class="store-detail">
                    <div class="store-top-info">
                      <h2 class="tit">유모차대여소</h2>
                      <p class="summary">유아 고객과 함께 방문하신 고객을 위해 유모차를 대여해 드립니다.</p>
                    </div> 
                    <div class="store-mid-info">
                      <div class="store-location">
                        <dl>
                          <dt>운영시간</dt>
                          <dd>10:00 - 23:00</dd>
                        </dl>
                        <dl>
                          <dt>매장위치</dt>
                          <dd>B1F</dd>
                          <dd>무인양품 맞은편</dd>
                        </dl>
                      </div>
                    </div>
                  </li>
                  <li class="store-detail">
                    <div class="store-top-info">
                      <h2 class="tit">유아휴게실</h2>
                      <p class="summary">쾌적하고 깨끗한 엄마(아빠)와 아기의 휴식공간을 제공해 드립니다.</p>
                    </div> 
                    <div class="store-mid-info">
                      <div class="store-location">
                        <dl>
                          <dt>운영시간</dt>
                          <dd>10:00 - 23:00</dd>
                        </dl>
                        <dl>
                          <dt>매장위치</dt>
                          <dd>2F</dd>
                          <dd>배스킨라빈스 옆</dd>
                        </dl>
                      </div>
                    </div>
                  </li>
                  <li class="store-detail">
                    <div class="store-top-info">
                      <h2 class="tit">심장자동제세동기</h2>
                      <p class="summary">쾌적하고 깨끗한 엄마(아빠)와 아기의 휴식공간을 제공해 드립니다.</p>
                    </div> 
                    <div class="store-mid-info">
                      <div class="store-location">
                        <dl>
                          <dt>운영시간</dt>
                          <dd>10:00 - 23:00</dd>
                        </dl>
                        <dl>
                          <dt>매장위치</dt>
                          <dd>B1F, 1F, 2F</dd>
                          <dd>매장 입구</dd>
                        </dl>
                      </div>
                    </div>
                  </li>
                  <li class="store-detail">
                    <div class="store-top-info">
                      <h2 class="tit">ATM</h2>
                      <p class="summary">NH농협은행(B1F),신한은행(B1F),우리은행(B1F), SC제일은행(B1F), KB국민은행(1F),신한은행(1F),우리은행(1F)</p>
                    </div> 
                    <div class="store-mid-info">
                      <div class="store-location">
                        <dl>
                          <dt>운영시간</dt>
                          <dd>10:00 - 23:00</dd>
                        </dl>
                        <dl>
                          <dt>매장위치</dt>
                          <dd>지하1층 연결통로, 1층 부출입구</dd>
                        </dl>
                      </div>
                    </div>
                  </li>
                  <li class="store-detail">
                    <div class="store-top-info">
                      <h2 class="tit">가족화장실</h2>
                    </div> 
                    <div class="store-mid-info">
                      <div class="store-location">
                        <dl>
                          <dt>운영시간</dt>
                          <dd>10:00 - 23:00</dd>
                        </dl>
                        <dl>
                          <dt>매장위치</dt>
                          <dd>B1F, 1F, 2F</dd>
                          <dd>화장실</dd>
                        </dl>
                      </div>
                    </div>
                  </li>
                  <li class="store-detail">
                    <div class="store-top-info">
                      <h2 class="tit">장애인 화장실</h2>
                    </div> 
                    <div class="store-mid-info">
                      <div class="store-location">
                        <dl>
                          <dt>운영시간</dt>
                          <dd>10:00 - 23:00</dd>
                        </dl>
                        <dl>
                          <dt>매장위치</dt>
                          <dd>B1F, 1F, 2F</dd>
                          <dd>화장실</dd>
                        </dl>
                      </div>
                    </div>
                  </li>
                  <li class="store-detail">
                    <div class="store-top-info">
                      <h2 class="tit">전기차 충전소</h2>
                    </div> 
                    <div class="store-mid-info">
                      <div class="store-location">
                        <dl>
                          <dt>운영시간</dt>
                          <dd>10:00 - 23:00</dd>
                        </dl>
                        <dl>
                          <dt>매장위치</dt>
                          <dd>3F, 6F</dd>
                          <dd>주차장</dd>
                        </dl>
                      </div>
                    </div>
                  </li>
                  <li class="store-detail">
                    <div class="store-top-info">
                      <h2 class="tit">북그라운드</h2>
                      <p class="summary">스타필드 마켓을 찾는 모두에게 열려있는 책과 함께하는 휴식 문화공간 입니다.</p>
                    </div> 
                    <div class="store-mid-info">
                      <div class="store-location">
                        <dl>
                          <dt>운영시간</dt>
                          <dd>10:00 - 23:00</dd>
                        </dl>
                        <dl>
                          <dt>매장위치</dt>
                          <dd>1F</dd>
                          <dd>스타벅스 앞</dd>
                        </dl>
                      </div>
                    </div>
                  </li>
                  <li class="store-detail">
                    <div class="store-top-info">
                      <h2 class="tit">키즈그라운드</h2>
                      <p class="summary">어린이 고객들의 취향을 고려해 부모님과의 쇼핑 시간이 지루하지 않은 경험이 될 수 있도록 마련한 공간입니다.</p>
                    </div> 
                    <div class="store-mid-info">
                      <div class="store-location">
                        <dl>
                          <dt>운영시간</dt>
                          <dd>10:00 - 23:00</dd>
                        </dl>
                        <dl>
                          <dt>매장위치</dt>
                          <dd>2F</dd>
                          <dd>갓덴스시 앞</dd>
                        </dl>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <!-- // 하드코딩영역 :: 편의시설 -->
            </div>
          </div>
          <!-- //Tab con -->
        </article>
        <!-- // 240902 작업 전달 > 1depth / 2depth / Tab con 영역 작업 내용 -->
      </section>
		</div>
</template>
<script> 
import axios from 'axios'
export default {
  name: 'StoreView',
  components:{
  },
  data() {
    return {      
      pointIndex: 0,
      mapList: [],
    }
  },
  mounted() {
      // 층정보
      this.getFloorList();
  },
  created() {

  },
  methods: {
    async getFloorList() {
      await axios
        .get(`http://localhost:8888/promotion/api/v1/sfmarket/map/list/?branchId=1068`)
        .then((res) => {
            var list = res.data.data.mapList.mapFileList;
            list.forEach((item) =>{              
                this.mapList.push(item);    
            });        
            
            console.log(this.mapList);  
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {          
        });
    },
    pointTab(index){            
      this.pointIndex = index;
    }
  }
} 
</script>
