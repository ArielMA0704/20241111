<template>
  <div class="service-process">
    <div class="process-item yellow-bg">
      <div class="box">
        <div class="yellow-text">
          <h3 class="process-title">門診紀錄</h3>
          <hr class="yellowLine" />
          <p class="ulText" style="display: flex; align-items: center">
            <span class="material-symbols-outlined" style="margin-right: 5px"
              >schedule</span
            >大幅縮短看診時間
          </p>
          <ul class="ulText">
            <li>患者描述症狀時,AI同步記錄整理</li>
            <li>自動生成結構化病史摘要</li>
            <li>醫師能快速掌握病情重點</li>
            <li>平均可節省30%診間時間</li>
          </ul>
          <p class="ulText" style="display: flex; align-items: center">
            <span class="material-symbols-outlined" style="margin-right: 5px"
              >browse_activity</span
            >即時數據分析
          </p>
          <ul class="ulText">
            <li>自動分析患者描述的症狀關聯</li>
            <li>智能比對相似病例</li>
            <li>協助醫師快速判斷</li>
            <li>提供治療建議參考</li>
          </ul>
        </div>
        <div class="yellowBoxImag">
          <img
            src="/images/patient-receives-some-good-news.jpg"
            alt="門診紀錄"
          />
        </div>
      </div>
    </div>

    <!-- 護理紀錄 -->
    <div class="greenbackground">
      <div class="box2">
        <h3 class="process-title">護理紀錄</h3>
        <hr class="yellowLine" />
        <div class="half-width">
          <div class="gray-bg">
            <div class="coverbox">
              <p class="grayBox">過往病例紀錄</p>
            </div>
            <img src="/images/document.jpg" alt="過往病例紀錄" />
          </div>
          <div class="gray-bg">
            <div class="coverbox">
              <p class="grayBox">Medbobi 系統紀錄</p>
            </div>
            <img src="/images/bobi護理紀錄3.png" alt="系統紀錄" />
          </div>
        </div>
      </div>
    </div>

    <!-- 3.會議記錄 -->
    <div class="whitebackground">
      <!-- 左側區塊 -->
      <div class="left-section">
        <div class="process-title">會議記錄</div>
        <hr class="yellowLine" />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="promtingtext">
            <ul style="margin: 0">
              <li>擁有中英文醫療語音辨識功能</li>
              <li>即時會議記錄輸出</li>
              <li>多人辨識功能</li>
            </ul>
          </div>
        </div>
        <img src="/images/meeting.jpg" alt="會議圖片" class="img1" />
      </div>

      <!-- 右側區塊 -->
      <div class="right-section-3">
        <div class="layout-container">
          <!-- 語音功能圖片 -->
          <img src="/images/mic.png" alt="語音功能" class="feature-image" />
          <!-- 對話內容區 -->
          <div class="dialog-section">
            <div class="dialog-group">
              <div class="conversation-title">對話內容</div>
              <div class="dialog-box">
                <p class="typing">
                  好的，我們今天要討論的是阿茲海默症的最新治療進展。
                  <br />王醫師提到最近在臨床試驗中，使用新型藥物 Lecanemab
                  治療早期患者，可以延緩認知功能退化約27%。
                  <br />李醫師補充說明，搭配生活型態的調整，效果會更好...
                </p>
              </div>
            </div>
            <div class="dialog-group">
              <div class="conversation-title">智能總結</div>
              <div class="dialog-box">
                <p class="typing">
                  1. 研究進展：Lecanemab新藥臨床成效顯著
                  <br />
                  2. 治療建議：藥物治療配合生活習慣調整
                  <br />
                  3. 後續追蹤：需持續觀察患者反應及副作用
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 4.住院摘要 -->
    <div class="background">
      <div>
        <div class="content-layout">
          <!-- 左側區域 -->
          <div class="left-section-4">
            <div class="process-title">住院摘要</div>
            <hr class="yellowLine" />
            <div class="description-4">
              (1)&nbsp;&nbsp;以AI驅動的語音辨識技術，提升醫護工作效率
              <br />
              (2)&nbsp;&nbsp;照護紀錄即說即寫，同步更新病歷系統
              <br />
              (3)&nbsp;&nbsp;減少紀錄時間，從60分鐘縮短至15分鐘
              <br />
              (4)&nbsp;&nbsp;自動將口述內容轉換為標準化醫療紀錄格式
            </div>
          </div>
          <!-- 右側區域 -->
          <div class="right-section-4">
            <div class="feature-list">
              <div class="feature-item">即時報告記錄輸入</div>
              <div class="feature-item">自動完成格式化報告</div>
              <div class="feature-item">自動生成易讀描述報告</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 5.阿茲海默症諮詢標題 -->
    <div class="whitebackground-5">
      <div>
        <h2 class="process-title">阿茲海默症衛教</h2>
        <hr class="yellowLine" />
      </div>
      <div>
        <div class="question-image">
          <img src="/images/Frame.png" alt="questions" />
        </div>
        <div class="answer-container">
          <div class="answer-text">
            <p class="answer-box">全面式即時回答</p>
            <p class="answer-box">專業資料來源</p>
            <p class="answer-box">建立良好衛教觀念</p>
          </div>
          <div class="answer-image">
            <img src="/images/Group 23.png" alt="answer" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 6.ai醫護助手 -->
  <div class="service-process">
    <div class="process-item yellow-bg1">
      <div class="box">
        <div class="yellow-text">
          <h3 class="process-title">影像辨識</h3>
          <hr class="yellowLine" />
          <p class="ulText" style="display: flex; align-items: center">
            <span class="material-symbols-outlined" style="margin-right: 5px"
              >schedule</span
            >功能亮點
          </p>
          <ul class="ulText">
            <li>高效生成精準檢查報告，顯著縮短醫師就診時間</li>
            <li>智能影像評估，提供準確的診斷支援</li>
            <li>綜合診斷建議，輔助醫療決策</li>
            <li>全面評估完整病情、過去病史</li>
          </ul>
          <p class="ulText" style="display: flex; align-items: center">
            <span class="material-symbols-outlined" style="margin-right: 5px"
              >browse_activity</span
            >三大核心功能
          </p>
          <ul class="ulText">
            <li>報告總整：讓醫師快速掌握病患狀況</li>
            <li>影像智能分析：精準解析影像資料</li>
            <li>專業診療建議：提供專業建議，支持醫療決策</li>
          </ul>
        </div>
        <div class="yellowBoxImag1">
          <img src="/images/Apple iPhone X Space Grey.png" alt="門診紀錄" />
        </div>
      </div>
    </div>
  </div>
  <FooterComp class="footer-container" />
</template>

<script setup>
import FooterComp from "../components/Footer.vue";
defineOptions({
  name: "IndexPage",
  components: {
    FooterComp,
  },
});
</script>

<style scoped>
/* 1.門診紀錄 */
.service-process {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.box {
  display: flex;
  flex-direction: row;
  width: 1200px;
  justify-content: space-between;
  padding: 10px;
  gap: 100px;
}

.process-item {
  width: 100%;
  overflow: hidden;
}

.process-content {
  padding: 2rem;
  min-height: 200px;
}

.process-title {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: rgba(22, 104, 104, 1);
  font-weight: bold;
}

.ulText {
  font-weight: bold;
  margin: "10";
}

.yellow-bg {
  width: 100%;
  height: 712px;
  background: linear-gradient(to right, #8cd7d7, white);
  min-height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.yellow-bg1 {
  width: 100%;
  height: 712px;
  background: linear-gradient(to right, #eafcfc, white);
  min-height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 4rem;
}
.yellow-text {
  font-size: 24px;
}

.yellowBoxImag {
  width: 600px;
  height: 600px;
  overflow: hidden;
  border-radius: 15px;
  aspect-ratio: 1;
}

.yellowBoxImag img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.yellowLine {
  border: none;
  height: 5px;
  background-color: rgba(255, 230, 109, 1);
  width: 30rem;
  margin-left: 0;
  margin-top: 0;
  margin-bottom: 2rem;
}

/* 2.護理紀錄 */
.greenbackground {
  background-color: #eafcfc;
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: center;
}

.box2 {
  width: 1200px;
  padding: 10px;
}

.half-width {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  display: flex;
  justify-content: center;
}

.gray-bg {
  height: 500px;
  overflow: hidden;
  border-radius: 15px;
  aspect-ratio: 1;
  position: relative;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.2);
}

.gray-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.grayBox {
  z-index: 1;
  position: absolute;
  top: 400px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 230, 109, 0.6);
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-weight: 800;
  font-size: 1.25rem;
  opacity: 1;
  transition: opacity 0.3s ease;
}
.gray-bg:hover .grayBox {
  background-color: rgba(255, 230, 109, 1);
}

/* 3.會議紀錄 */
.whitebackground {
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  padding: 20px;
  width: 1200px;
}

/* 左側區塊樣式 */
.left-section-3 {
  display: flex;
  justify-content: center;
}

.meetingtitle {
  width: 100%;
  font-size: 30px;
  font-weight: bold;
  color: #166868;
  border-bottom: 7px solid #ffe66d;
  margin-bottom: 20px;
}
.promtingtext {
  font-size: 20px;
  font-weight: 800;
  width: 100%;
  color: #000;
  line-height: 1.6;
  margin: 0px;
}

.img1 {
  width: 550px;
  height: auto;
}

/* 右側區塊樣式 */
.right-section-3 {
  display: flex;
  align-items: center;
}

.layout-container {
  background-color: #8cd7d7;
  border-radius: 15px;
  padding: 20px;
  height: 480px;
  width: 570px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.voice-image-container {
  width: 30%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}

.feature-image {
  height: 120px;
  border-radius: 8px;
  margin-bottom: 10px;
}

.dialog-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.dialog-group {
  width: 500px;
}

.conversation-title {
  font-size: 20px;
  color: #166868;
  font-weight: bold;
  margin-bottom: 10px;
}

.dialog-box {
  background-color: rgba(255, 255, 255, 0.8); /* 0.5 為 50% 透明度 */
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 10px;
  overflow: hidden; /* 防止打字效果溢出 */
}

.typing {
  width: 100%;
  white-space: nowrap; /* 防止文字換行 */
  overflow: hidden;
  border-right: 1px solid transparent;
  animation: typing 2s steps(30, end), blink-caret 0.75s step-end infinite;
  font-family: Consolas, Monaco;
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
  padding: 0;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: currentColor;
  }
}

/* 4.住院摘要 */
.background {
  background-image: url("/images/hospital-room-interior.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 1200px;
  height: 600px;
  padding: 20px;
  border-radius: 15px;
  position: relative;
}

.content-layout {
  display: flex;
  justify-content: space-between;
  height: 100%;
  gap: 40px;
}

.left-section-4 {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.right-section-4 {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.description-4 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: start;
  font-weight: bold;
  font-size: 18px;
  color: #333;
  line-height: 2.5;
  margin-top: 20px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  height: 300px;
}

.feature-list {
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
}

.feature-item {
  background-color: rgba(253, 144, 132, 1);
  padding: 15px 25px;
  border-radius: 8px;
  font-size: 18px;
  color: white;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-weight: bold;
}

.feature-item:hover {
  transform: translateX(10px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* 5.阿茲海默症衛教 */
.whitebackground-5 {
  background-color: white;
  padding: 20px;
  border-radius: 15px;
  height: 1600px;
  width: 1200px;
  display: flex;
  flex-direction: column;
  margin: 20px 0 120px 0;
}

.question-image {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.question-image img {
  max-width: 1000px;
}

.answer-image img {
  max-width: 800px;
}

.answer-image img:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

.answer-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 80px;
}

.answer-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 50px;
}

.answer-box {
  background-color: rgba(253, 144, 132, 1);
  width: 220px;
  height: 50px;
  color: white;
  font-weight: bold;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.answer-box:hover {
  transform: translateX(10px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .yellowBoxImag {
    width: 500px;
    height: 500px;
  }

  .yellow-bg {
    flex-direction: column;
    height: 1000px;
  }

  .half-width {
    grid-template-columns: 1fr;
  }

  .process-group {
    grid-template-columns: 1fr;
  }

  .process-images {
    grid-template-columns: 1fr;
  }

  .content-layout {
    flex-direction: column;
  }

  .left-section,
  .right-section {
    width: 100%;
    padding: 10px;
  }

  .title {
    font-size: 24px;
  }

  .feature-item {
    font-size: 16px;
    padding: 12px 20px;
  }

  .greenbackground {
    flex-direction: column;
  }

  .left-section-3,
  .right-section-3 {
    max-width: 100%;
  }
}

.yellowBoxImag1 {
  width: 600px;
  height: 600px;
  overflow: hidden;
  border-radius: 15px;
  aspect-ratio: 1;
}

.yellowBoxImag1:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

@media (max-width: 480px) {
  .yellowBoxImag {
    width: 100px;
    height: 100px;
  }
}
</style>
