<style scoped>
    @import './../../assets/css/common.css';
    @import './../../assets/css/main.css';
</style>
<template>
<div id="popup-1"> <!-- class="popup-wrap" -->
    <button class="close-btn" aria-label="상세보기 화면 닫기"></button>
    <div class="popup-conts">
      <div class="pop-img">
        <img src="./../../assets/images/temp/banner_7.jpg" alt="배너 이미지">
      </div>
      <div class="pop-detail">
        <div class="ev-top-info">
          <h2 class="tit">제목</h2>
          <p class="period">00.00(요일)</p>
        </div>
        <!-- 요약 설명(editor) -->
        <ul class="ev-mid-info">
          <li>
            <strong>타이틀</strong>
            <span>설명</span>
          </li>
          <li>
            <strong>타이틀 길어지는 경우</strong>
            <span>
              설명 길어지는 경우(텍스트 줄바뀜 테스트 내용) 
              <br> 줄바꿈 태그 사용 시
            </span>
          </li>
          <li class="guide-info">
            <strong>리스트 형태 타이틀</strong>
            <p>설명</p>
            <ul>
              <li>리스트</li>
              <li>리스트</li>
            </ul>
          </li>
        </ul>
        <!-- //요약 설명(editor) -->
        <!-- 내용(editor) -->
        <div class="ev-btm-detail">
            안녕하세요. 스타필드를 사랑해 주시는 고객님께 감사드립니다.<br>
            보다 안정적이고 편리한 서비스 제공을 위해서 
            시스템 점검 작업을 진행합니다.<br><br>
          <img src="./../../assets/images/temp/editor_img.jpg" alt="팝업 상세 내용 이미지">
        </div>
        <!-- //내용(editor) -->
      </div>
    </div>
  </div>
</template>
