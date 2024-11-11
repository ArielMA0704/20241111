<template>
  <footer class="footer">
    <div class="footer-section">
      <div class="footer-brand" :class="{ 'fade-in': isVisible }">
        <div class="brand-title">MedBobi</div>
        <p class="subtitle">醫護易聲通</p>
        <div class="yellow-underline"></div>
        <div class="contact-info">
          <div class="contact-item">
            <i class="phone-icon"></i>
            <p>總機：+886-2-0122-1234</p>
          </div>
          <div class="contact-item">
            <i class="fax-icon"></i>
            <p>傳真：+886-2-0122-1234</p>
          </div>
          <div class="contact-item">
            <i class="mobile-icon"></i>
            <p>手機：+886-2-0122-1234</p>
          </div>
          <div class="contact-item">
            <i class="email-icon"></i>
            <p>Email：@com.tw</p>
          </div>
        </div>
      </div>

      <div class="footer-location" :class="{ 'slide-in': isVisible }">
        <div class="section-title">院區資訊</div>
        <div class="yellow-underline"></div>
        <br />
        <br />
        <br />

        <div class="location-info">
          <div class="location-card">
            <div>中興院區</div>
            <p>新竹縣竹東鎮中興路四段195號</p>
          </div>
          <br />
          <br />
          <div class="location-card">
            <div>光復院區</div>
            <p>新竹市光復路二段321號1館</p>
          </div>
        </div>
      </div>

      <div class="footer-services" :class="{ 'slide-in-delayed': isVisible }">
        <div class="section-title">服務內容</div>
        <div class="yellow-underline"></div>
        <ul class="services-list">
          <li>門診紀錄</li>
          <li>護理紀錄</li>
          <li>會議紀錄</li>
          <li>住院摘要</li>
          <li>阿茲海默症衛教</li>
          <li>使用者自訂</li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  name: "FooterComp",
  setup() {
    const isVisible = ref(false);

    onMounted(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            isVisible.value = true;
          }
        },
        { threshold: 0.1 }
      );

      const footer = document.querySelector(".footer");
      if (footer) {
        observer.observe(footer);
      }
    });

    return {
      isVisible,
    };
  },
};
</script>

<style scoped>
.footer {
  background-color: #19867e;
  color: white;
  padding: 4rem 2rem;
  margin-top: 6rem;
  position: relative;
  overflow: hidden;
}

.footer-section {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6rem;
}

.brand-title {
  color: #ffe66d;
  font-size: 36px;
  margin: 0;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  transition: transform 0.3s ease;
  font-weight: bold;
}

.brand-title:hover {
  transform: translateY(-3px);
}

.yellow-underline {
  width: 100%;
  height: 3px;
  background-color: #ffe66d;
  margin: 10px 0 20px 0;
  transition: width 0.3s ease;
}

.section-title {
  margin-top: 2rem;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #ffe66d;
}

.section-title:hover + .yellow-underline,
.brand-title:hover + .yellow-underline {
  width: 100px;
}

.subtitle {
  font-size: 1.2rem;
  margin: 0;
  margin-bottom: 1rem;
  opacity: 0.9;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  transition: transform 0.3s ease;
}

.contact-item:hover {
  transform: translateX(10px);
}

.location-card {
  border-radius: 8px;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
  font-size: 18px;
  margin-bottom: 1.5rem;
}

.location-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.15);
}

.services-list {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 18px;
}

.services-list li {
  padding: 0.8rem 0;
  transition: transform 0.3s ease, padding-left 0.3s ease;
  cursor: pointer;
}

.services-list li:hover {
  transform: translateX(10px);
  padding-left: 10px;
  color: #fcd116;
}

/* 動畫類 */
.fade-in {
  animation: fadeIn 1s ease forwards;
}

.slide-in {
  animation: slideIn 1s ease forwards;
}

.slide-in-delayed {
  animation: slideIn 1s ease forwards;
  animation-delay: 0.2s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* 響應式設計 */
@media (max-width: 1024px) {
  .footer-section {
    grid-template-columns: repeat(2, 1fr);
  }

  .footer-brand {
    grid-column: span 2;
    text-align: center;
  }

  .yellow-underline {
    margin: 10px auto 20px auto;
  }
}

@media (max-width: 768px) {
  .footer-section {
    grid-template-columns: 1fr;
  }

  .footer-brand {
    grid-column: span 1;
  }

  .footer-location,
  .footer-services {
    text-align: center;
  }

  .yellow-underline {
    margin: 10px auto 20px auto;
  }

  .contact-item {
    justify-content: center;
  }

  .services-list li {
    text-align: center;
  }
}
</style>
