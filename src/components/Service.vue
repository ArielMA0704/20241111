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
</template>

<script setup>
defineOptions({
  name: "IndexPage",
});
</script>

<style scoped>
@import "../assets/styles/ServiceStyles.css";
</style>
