<template>
    <div class="popup-conts">
      <div class="map-container" id="map-starfield">
        <div>
          <div ref="panzoomContainer">
            <img src="https://www.starfieldmarket.com/resource/images/map/map_b1.png" alt="Zoomable Image" />
          </div>
        </div>
        <div class="map__zoom-container">
              <button class="map__zoom__btn-in" type="button" aria-label="지도확대 버튼"  @click="zoomIn">지도 확대</button>
              <button class="map__zoom__btn-out" type="button" aria-label="지도축소 버튼" @click="zoomOut">지도 축소</button>
        </div>
      </div>
    </div>
</template>
  <!-- <div id="popup-map" class="popup-wrap" role="dialog">
    <div class="popup-header">
      <h1>지도보기</h1>
      <button class="close-btn" aria-label="상세보기 화면 닫기"></button>
      
    </div>
    <div class="popup-conts">
      
      <div class="map-container" id="map-starfield">
      
        <div class="map__floor-container">
          <ul class="map__floor-list" role="tablist">
            <li><a href="#none" role="tab" aria-label="6, 7층 지도보기" data-floor="#floor_6f">6-7F</a></li>
            <li><a href="#none" role="tab" aria-label="5층 지도보기" data-floor="#floor_5f">5F</a></li>
            <li><a href="#none" role="tab" aria-label="4층 지도보기" data-floor="#floor_4f">4F</a></li>
            <li><a href="#none" role="tab" aria-label="3층 지도보기" data-floor="#floor_3f">3F</a></li>
            <li><a href="#none" role="tab" aria-label="2층 지도보기" data-floor="#floor_2f">2F</a></li>
            <li><a href="#none" role="tab" aria-label="1층 지도보기" data-floor="#floor_1f">1F</a></li>
            <li class="active"><a href="#none" role="tab" aria-label="지하 1층 지도보기" data-floor="#floor_b1">B1</a></li>
          </ul>
        </div>
      
       
        
        <div class="map__zoom-container">
          <button class="map__zoom__btn-in" type="button" aria-label="지도확대 버튼">지도 확대</button>
          <button class="map__zoom__btn-out" type="button" aria-label="지도축소 버튼">지도 축소</button>
        </div>
        
      </div>
      
    </div>
  </div> -->

<script> 
import panzoom from '@panzoom/panzoom'
import axios from 'axios'
export default {
  name: 'MapView',
  components:{

  },
  data() {
    return {
      panzoomInstance: null,
    }
  },
  mounted() {
      // Panzoom 인스턴스를 생성하고 컨테이너 요소에 바인딩.
      this.panzoomInstance = panzoom(this.$refs.panzoomContainer, {
      });

      // 마우스 휠 이벤트 리스너 추가
      this.$refs.panzoomContainer.addEventListener('wheel', (e) => {
        e.preventDefault(); // 기본 휠 이벤트 비활성화
        this.panzoomInstance.zoomWithWheel(e); // 줌 동작 수행
      });

      // 층정보
      //this.getFloorList();
  },
  methods: {
    zoomIn() {
      this.panzoomInstance.zoomIn(); // 줌 인
    },
    zoomOut() {
      this.panzoomInstance.zoomOut(); // 줌 아웃
    },
    async getFloorList() {
      await axios.get("http://localhost:8888/promotion/api/v1/sfmarket/map/list/?branchId=1068", {
      params: {}
    })
    .then(function (res) {
      console.log(res.data.data.mapList.mapFileList);         
    }).catch(function (err) {        
        console.log(err);
    }).then(function() {
        // 항상 실행
    });
    }

  }
} 
</script>