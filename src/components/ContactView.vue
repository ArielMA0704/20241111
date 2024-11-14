<template>
  <q-page class="bg">
    <div class="background">
      <q-card class="my-card">
        <q-card-section>
          <div class="container">
            <h2>聯絡我們</h2>
            <q-form @submit.prevent="submitForm" class="form">
              <q-input
                filled
                v-model="form.email"
                label="電子郵件"
                type="email"
                required
              />
              <br />
              <q-input
                filled
                v-model="form.phone"
                label="電話"
                type="tel"
                required
              />
              <br />
              <q-input
                filled
                v-model="form.message"
                label="聯絡內容"
                type="textarea"
                required
                :style="{ backgroundColor: 'white' }"
              />
              <br />
              <q-btn
                type="submit"
                label="提交"
                :style="{ backgroundColor: '#166868', color: 'white' }"
              />
            </q-form>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
  <FooterComp class="footer-container" />
</template>

<script>
import FooterComp from "../components/Footer.vue";

export default {
  data() {
    return {
      form: {
        email: "",
        phone: "",
        address: "",
        message: "",
      },
    };
  },
  components: {
    FooterComp,
  },

  methods: {
    submitForm() {
      // 在這裡處理表單提交
      console.log("提交的表單資料:", this.form);
    },
  },
};
</script>

<style scoped>
.background {
  background-color: #eafcfc;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h2 {
  font-size: 25px;
  margin: 0;
  font-weight: bold;
  color: #166868;
}

.form {
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
/* 響應式設計 */
@media screen and (max-width: 600px) {
  .background {
    padding: 0.5rem;
    align-items: flex-start;
    min-height: 80vh; /* 手機版縮短高度 */
  }

  .my-card {
    margin: 0.5rem;
    border-radius: 8px;
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .form {
    padding: 0;
    width: 100%;
  }

  .q-input {
    margin-bottom: 1rem;
  }

  .submit-btn {
    width: 100%;
    margin-top: 1rem;
  }
}

/* 更小螢幕的適配 */
@media screen and (max-width: 320px) {
  .background {
    min-height: 70vh; /* 更小螢幕進一步縮短 */
    padding: 1rem 0.25rem;
  }
  h2 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  .my-card {
    width: 100%;
    max-width: 600px;
    margin: 1rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow-y: auto; /* 如果內容過長可以滾動 */
  }
}
@media screen and (max-height: 600px) {
  .background {
    min-height: auto; /* 在較矮的螢幕上自適應高度 */
    padding: 1rem 0.5rem;
  }

  .my-card {
    margin: 0.5rem;
  }
}
</style>
