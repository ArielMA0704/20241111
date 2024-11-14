<template>
  <div class="hero-section">
    <div class="gradient-container">
      <div
        ref="fadeInElement"
        :class="{ 'fade-in': fadeInAnimated }"
        class="text-content element"
      >
        <div class="brand-name slide-in-left">醫護聲易通 Medbobi</div>
        <div class="slogan">
          "智慧對話，專業解答，
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;為您提供最貼心的服務"
        </div>
      </div>
      <div class="phone-container">
        <div class="phone phone-top"></div>
        <div class="phone phone-bottom"></div>
      </div>
    </div>
  </div>

  <div class="blue-container">
    <div class="ai-section">
      <div
        ref="slideInLeftElement"
        :class="{ 'slide-in-left': slideInLeftAnimated }"
        class="ai-image-container element"
      >
        <img src="/images/Macbook Air.png" alt="AI診斷" class="ai-image" />
      </div>
      <div
        ref="slideInRightElement"
        :class="{ 'slide-in-right': slideInRightAnimated }"
        class="ai-content element"
      >
        <div class="ai-text">
          <h2 class="ai-title">AI 輔助診斷</h2>
          <div class="yellow-line-2"></div>
          <ul class="feature-list">
            <li class="feature-item">運用LLM協助語音診斷</li>
            <li class="feature-item">提升診斷準確度</li>
            <li class="feature-item">縮短就診等待時間</li>
            <li class="feature-item">即時分析病症資料</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <FooterComp class="footer-container" />
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from "vue";
import FooterComp from "../components/Footer.vue";

export default defineComponent({
  name: "AboutPage",
  components: {
    FooterComp,
  },

  setup() {
    // 控制動畫的狀態
    const fadeInAnimated = ref(false);
    const slideInLeftAnimated = ref(false);
    const slideInRightAnimated = ref(false);

    const toggleImage = (index) => {
      selectedIndex.value = selectedIndex.value === index ? null : index;
    };

    const fadeInElement = ref<HTMLElement | null>(null);
    const slideInLeftElement = ref<HTMLElement | null>(null);
    const slideInRightElement = ref<HTMLElement | null>(null);

    onMounted(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === fadeInElement.value) {
              fadeInAnimated.value = true;
            } else if (entry.target === slideInLeftElement.value) {
              slideInLeftAnimated.value = true;
            } else if (entry.target === slideInRightElement.value) {
              slideInRightAnimated.value = true;
            }
            observer.unobserve(entry.target);
          }
        });
      });

      if (fadeInElement.value) observer.observe(fadeInElement.value);
      if (slideInLeftElement.value) observer.observe(slideInLeftElement.value);
      if (slideInRightElement.value)
        observer.observe(slideInRightElement.value);
    });

    return {
      toggleImage,
      fadeInAnimated,
      slideInLeftAnimated,
      slideInRightAnimated,
      fadeInElement,
      slideInLeftElement,
      slideInRightElement,
    };
  },
});
</script>

<style scoped>
.body {
  margin: 0;
  padding: 0;
}

/* 內容 */
.element {
  opacity: 0;
  transition: all 0.5s ease;
}

.main-content {
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container {
  max-width: 1360px;
}
/* head */
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #26a69a;
  color: white;
}

.logo {
  height: 40px;
}

.logo img {
  height: 100%;
}

.nav-items {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-item {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  padding: 0.5rem 1rem;
}

.nav-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

.lang-switch {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
}

/* 頂部圖片網格 */
.gallery-container {
  padding: 20px;
  overflow: hidden;
}

.image-row {
  margin-top: 70px;
  display: flex;
  gap: 10px;
  height: 600px;
  width: 100%;
}

.image-item {
  flex: 1;
  position: relative;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  border-radius: 12px;
  cursor: pointer;
}

.image-wrapper {
  height: 100%;
  position: relative;
  overflow: hidden;
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.image-item.expanded {
  flex: 3;
}

.image-item.collapsed {
  flex: 0.5;
}

.image-item:hover .gallery-image {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.expanded .image-overlay {
  opacity: 1;
}

.image-title {
  font-size: 1.5rem;
  margin-bottom: 8px;
  font-weight: bold;
}

.image-description {
  font-size: 1rem;
  line-height: 1.4;
}

.titletext {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}

.h1text {
  margin: 10px 0 10px 0;
  color: #166868;
  font-weight: bold;
  font-size: 25px;
}

.bobiTitle {
  font-size: 40px;
  font-weight: bold;
  color: #166868;
  margin: 10px 0;
}

.titlebutton {
  border: 2px solid #166868;
  color: #166868;
  background-color: transparent;
  padding: 10px 20px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 25px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}

/* 滑鼠懸停時的效果 */
.titlebutton:hover {
  background-color: #166868;
  color: white;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
}

/* 按下時的效果 */
.titlebutton:active {
  background-color: #166868;
  color: white;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
}

/* 關於我們區域 */
.greensection {
  display: flex;
  justify-content: center;
}

.green-background-1 {
  display: flex;
  justify-content: center;
}

.top {
  font-size: 40px;
  font-weight: bold;
  gap: 10px;
  padding-bottom: 10px;
}

.hero-section {
  background: linear-gradient(135deg, #8cd7d7 0%, #166868 100%);
  width: 100%;
  min-height: 400px;
  height: 500px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.gradient-container {
  padding: 40px;
  min-height: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 800px;
}

.text-content {
  flex: 1;
  padding: 20px;
  z-index: 2;
}

.brand-name {
  font-size: 32px;
  font-weight: bold;
  color: #166868;
  margin-bottom: 15px;
  position: relative;
  display: inline-block;
  text-shadow: 2px 2px 5px rgba(255, 255, 255, 0.4);
}

.brand-name::after {
  content: "";
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: #ffe66d;
}
/* 添加淡入動畫 */
.fade-in {
  animation: fadeIn 1s ease-in forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* 從左滑入動畫 */
.slide-in-left {
  opacity: 0;
  transform: translateX(-50px);
  animation: slideInLeft 0.8s ease forwards;
  animation-delay: 0.3s; /* 延遲執行 */
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* 從右滑入動畫 */
.slide-in-right {
  opacity: 0;
  transform: translateX(50px);
  animation: slideInRight 0.8s ease forwards;
  animation-delay: 0.6s; /* 延遲執行 */
}
/* 左側圖片容器 */
.ai-image-container {
  flex: 1;
  max-width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ai-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
  transition: transform 0.3s ease;
}

.ai-image:hover {
  transform: scale(1.02);
}

/* AI診斷區塊樣式 */
.ai-text {
  margin-left: 0px;
}

.blue-container {
  background-color: #eafcfc;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
}

.ai-section {
  padding: 40px;
  position: relative;
  min-height: 500px;
  display: flex;
  justify-content: center;
  max-width: 1360px;
  margin-bottom: 20px;
}

.ai-content {
  width: 350px;
  height: 300px;
  padding: 30px;
  /* background-color: #8CD7D7; */
  background: linear-gradient(135deg, #8cd7d7 0%, #166868 100%);
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 180px;
  margin-left: 30px;
}

.ai-title {
  font-size: 32px;
  font-weight: bold;
  color: #166868;
  margin-bottom: 10px;
  text-align: center;
  text-shadow: 2px 2px 5px rgba(255, 255, 255, 0.4);
}

.yellow-line-1 {
  width: 600px;
  height: 4px;
  background-color: #ffe66d;
}
.yellow-line-2 {
  width: 300px;
  height: 4px;
  background-color: #ffe66d;
  margin-bottom: 20px;
}

.feature-list {
  list-style: none;
  padding: 0;
}

.feature-item {
  font-size: 20px;
  color: white;
  margin-bottom: 15px;
  padding-left: 20px;
  position: relative;
}

.feature-item::before {
  content: "-";
  position: absolute;
  left: 0;
  color: white;
}
@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.slogan {
  font-size: 24px;
  color: #ffffff;
  line-height: 1.6;
  margin-top: 20px;
}

.phone-container {
  position: relative;
  width: 300px;
  height: 400px;
  margin-right: 40px;
}

.phone {
  position: absolute;
  width: 200px;
  height: 380px;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.phone-top {
  right: 40px;
  top: 0;
  transform: rotate(-5deg);
  z-index: 2;
}

.phone-bottom {
  right: 80px;
  top: 20px;
  transform: rotate(-15deg);
  opacity: 0.8;
}

/* 添加互動效果 */
.phone-container:hover .phone-top {
  transform: rotate(0deg) translateY(-10px);
}

.phone-container:hover .phone-bottom {
  transform: rotate(-10deg) translateY(10px);
}

/* 服務介紹樣式 */
.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 200, "GRAD" 0, "opsz" 24;
}

.section-title {
  font-size: 2.25rem;
  font-weight: bold;
  text-align: center;
  color: #166868;
  margin: 20px 0;
}

.services-section {
  background-color: #ffffff;
  width: 100%;
  padding-bottom: 50px;
}

.doctor-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 使用三列的網格 */
  gap: 1.5rem;
  max-width: 1200px; /* 可根據需要調整最大寬度 */
  justify-self: center;
}

.icon-container {
  position: relative;
  display: inline-block;
}

.image {
  width: 300px; /* 調整圖片大小 */
  height: auto;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  opacity: 1;
  transition: opacity 0.3s ease;
}

.doctor-image:hover .overlay {
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.5);
}

.doctor-image:hover {
  box-shadow: 0px 0px 9.5px 5px rgba(0, 0, 0, 0.3);
}

.icon {
  margin-right: 5px; /* 圖標與文字之間的距離 */
  font-size: 50px; /* 調整圖標大小 */
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
}

.iconTitle {
  font-size: 24px;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  font-weight: bold;
}

.doctor-image {
  width: 380px;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 15px;
  position: relative;
  display: inline-block;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.15);
}

.doctor-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .ai-section {
    flex-direction: column;
    align-items: center;
    padding: 20px;
    gap: 20px;
  }
  .ai-image-container {
    max-width: 100%;
    margin-bottom: 20px;
  }
  .ai-image {
    width: 100%;
    max-width: 500px;
  }
  .feature-item {
    font-size: 16px;
    color: white;
    margin-bottom: 15px;
    padding-left: 20px;
    position: relative;
  }
  .ai-title {
    font-size: 24px;
  }
  .ai-content {
    width: 100%;
    max-width: 500px;
    margin: 0;
    margin-top: 20px;
  }
  .doctor-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .doctor-image {
    width: 300px;
  }

  /* 頂部 */
  .image-row {
    height: 300px;
  }

  .image-title {
    font-size: 1.2rem;
  }

  .image-description {
    font-size: 0.9rem;
  }

  .image-item.expanded {
    flex: 2;
  }

  .ai-image-container {
    flex: 1;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ai-image {
    width: 150%;
  }

  /* 關於我們 */
  .gradient-container {
    flex-direction: column;
    text-align: center;
    padding: 20px;
  }

  .text-content {
    padding: 20px 0;
  }

  .brand-name {
    font-size: 28px;
  }

  .brand-name::after {
    left: 20%;
    width: 60%;
  }

  .slogan {
    font-size: 20px;
  }

  .phone-container {
    margin: 40px auto;
    width: 250px;
    height: 300px;
  }

  .phone {
    width: 160px;
    height: 300px;
  }
}

@media (max-width: 425px) {
  .doctor-grid {
    grid-template-columns: 1fr;
  }
  .ai-image {
    width: 100%;
    max-width: 380px;
  }
  .ai-section {
    padding: 10px;
  }
  .ai-image-container {
    width: 100%;
    margin: 0 auto;
  }
  .ai-content {
    width: 90%;
    height: auto;
    padding: 20px;
    margin: 20px auto 0;
  }

  .feature-item {
    font-size: 14px;
  }

  .ai-title {
    font-size: 20px;
  }

  .yellow-line-2 {
    width: 200px;
    margin-bottom: 15px;
  }
}
</style>
