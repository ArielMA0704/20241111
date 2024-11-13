<template>
  <div class="login-modal-overlay" @click.self="goBack">
    <div class="login-container">
      <div class="login-box">
        <div class="back-button">
          <button @click="goBack">✕</button>
        </div>
        <h1 class="login-title">歡迎登入</h1>

        <div class="login-buttons">
          <div class="custom-google-btn">
            <div id="g_id_signin" v-if="showSSO"></div>
          </div>

          <!--<button class="login-btn Apple-btn" @click="AppleSignIn">
            透過Apple帳戶登入
          </button>-->
        </div>

        <q-page-sticky position="top-right" :offset="[18, 18]">
          <div id="loginPage" />
        </q-page-sticky>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { api } from "boot/axios";
import { useQuasar } from "quasar";
import { setToken, checkLogin } from "boot/account";
import { useLoginStore } from "stores/token";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "LoginView",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },

  emits: ["close", "login-success"],

  setup(props, { emit }) {
    const $q = useQuasar();
    const router = useRouter();
    const showSSO = ref(true);
    const loginStore = useLoginStore();
    const handleClose = () => {
      emit("close"); // 觸發關閉事件
    };

    const goBack = () => {
      emit("close");
    };

    // Apple 登入
    async function AppleSignIn() {
      try {
        const succ = await AppleID.auth.signIn();
        await login(succ, "apple");
      } catch (error) {
        console.error(error);
        $q.notify({
          position: "top",
          message: error.toString(),
          type: "negative",
        });
      }
    }

    // Google 登入
    async function googleAuth(evt) {
      await login(evt, "google");
    }

    // 通用登入處理
    async function login(resp, iss) {
      try {
        $q.loading.show();
        const post = await api.post("login", {
          resp: resp,
          iss: iss,
        });
        const { data } = post;
        setToken(data.ltt, data.stt);
        loginStore.setValue(
          true,
          JSON.parse(atob(data.stt.split(".")[1])).username
        );
        $q.loading.hide();
        toProjectPage();
      } catch (error) {
        $q.loading.hide();
        $q.notify({
          position: "top",
          message: error.toString(),
          type: "negative",
        });
        console.error("err", error);
      }
    }

    function toProjectPage() {
      router.push("/scene");
    }

    // Google 初始化
    function googleInit() {
      if (window.google) {
        google.accounts.id.initialize({
          client_id:
            "48299599921-oghrh3htslmgsccnavcdv60mm3k8i5tn.apps.googleusercontent.com",
          callback: googleAuth,
          auto_select: true,
          itp_support: true,
          prompt_parent_id: "loginPage",
        });
        // 確保在按鈕渲染後應用樣式
        google.accounts.id.renderButton(
          document.getElementById("g_id_signin"),
          {
            type: "standard",
            theme: "outline", // 使用 outline 主題更容易自定義
            size: "large",
            width: "100%",
            text: "signin_with",
          }
        );
        setTimeout(() => {
          const buttonElements = document.querySelectorAll(
            "#g_id_signin span, #g_id_signin div"
          );
          buttonElements.forEach((element) => {
            element.style.color = "white";
          });

          // 修改 Google 圖標顏色
          const googleIcon = document.querySelector(
            "#g_id_signin .nsm7Bb-HzV7m-LgbsSe-Bz112c"
          );
          if (googleIcon) {
            googleIcon.style.filter = "brightness(0) invert(1)";
          }
        }, 100);
      } else {
        setTimeout(googleInit, 500);
      }
    }

    onMounted(async () => {
      if (await checkLogin(true)) {
        toProjectPage();
      } else {
        try {
          googleInit();
        } catch (error) {
          $q.notify({
            position: "top",
            message: error.toString(),
            type: "negative",
          });
        }
        google.accounts.id.prompt((notification) => {
          if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
            console.log(notification);
          }
        });
      }
    });

    onMounted(() => {
      googleInit();
    });

    return {
      showSSO,
      goBack,
      AppleSignIn,
      handleClose,
    };
  },
});
</script>

<style>
.login-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 12px;
  width: 90%;
  max-width: 600px;
  height: 30vh;
  min-height: 200px;
}

.login-box {
  background: white;
  padding: 4rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.back-button {
  position: absolute;
  top: 2rem;
  right: 2rem;
}
.back-button :hover {
  color: #333;
}

.back-button button {
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem;
  color: #666;
  transition: color 0.3s ease;
}

.back-button button:hover {
  color: #333;
}

.login-title {
  text-align: center;
  margin-bottom: 4rem;
  color: #333;
  font-size: 2.5rem;
  font-weight: bold;
  border-bottom: 3px solid #0d9488;
  padding-bottom: 1rem;
  width: 80%;
  margin: 0 auto 2rem auto;
}

.custom-google-btn {
  width: 100%;
}

/* 自定義 Google 按鈕樣式 */
#g_id_signin {
  width: 100% !important;
}

/* 覆蓋 Google 按鈕的樣式 */
#g_id_signin div[role="button"] {
  background-color: #db4437 !important;
  border-radius: 8px !important;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1) !important;
  transition: all 0.3s ease !important;
  height: 50px !important;
  width: 100% !important;
  text-align: center !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  border: none !important;
}

#g_id_signin div[role="button"]:hover {
  background-color: #c53929 !important;
  transform: translateY(-2px) !important;
}

#g_id_signin div[role="button"] div {
  padding: 0 !important;
  margin: 0 !important;
}

#g_id_signin iframe {
  width: 100% !important;
  scale: 1.2;
}

.login-buttons {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  justify-content: center;
}

.login-btn {
  padding: 1rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  color: white;
  font-weight: 500;
  width: 100%;
  height: 50px;
}

.google-btn {
  background-color: #db4437;
}

.Apple-btn {
  background-color: black;
}

.Apple-btn:hover {
  transform: translateY(-2px);
}

@media (max-width: 480px) {
  .login-box {
    margin: 1rem;
    padding: 1.5rem;
  }

  .login-title {
    font-size: 1.5rem;
  }

  .login-btn {
    padding: 0.8rem;
  }
}
</style>
