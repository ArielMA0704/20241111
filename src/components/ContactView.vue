<template>
  <q-page>
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
</style>
