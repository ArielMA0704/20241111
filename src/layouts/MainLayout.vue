<template>
  <q-layout view="hHh lpr lFf">
    <q-header elevated class="bg-teal-600">
      <q-toolbar class="toolbar-container">
        <q-toolbar-title class="brand">MedBobi</q-toolbar-title>

        <!-- Centered Navigation Container -->
        <div class="center-container gt-sm">
          <!-- Navigation Items -->
          <div class="nav-buttons">
            <div v-for="item in navItems" :key="item.title" class="nav-item">
              <q-btn
                flat
                no-caps
                padding="sm lg"
                :label="item.title"
                class="nav-button"
                @click="!item.subItems && navigate(item.link)"
              >
                <span v-if="item.subItems" class="arrow">▼</span>
              </q-btn>
              <div v-if="item.subItems" class="dropdown-menu">
                <q-list style="min-width: 200px">
                  <q-item
                    v-for="subItem in item.subItems"
                    :key="subItem.title"
                    clickable
                    v-close-popup
                    @click="navigate(subItem.link)"
                    class="dropdown-item"
                  >
                    <q-item-section>{{ subItem.title }}</q-item-section>
                  </q-item>
                </q-list>
              </div>
            </div>
            <!-- Hover Indicator Line -->
            <div class="hover-line"></div>
          </div>
        </div>

        <!-- Right Side Actions -->
        <div class="right-actions">
          <!-- Language Selector -->
          <q-btn-dropdown
            flat
            :label="selectedLanguage"
            style="margin-right: 16px"
          >
            <q-list class="dropdown-menu1">
              <q-item
                v-for="lang in languages"
                :key="lang.code"
                clickable
                v-close-popup
                @click="selectLanguage(lang)"
              >
                <q-item-section>
                  <q-item-label>{{ lang.name }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>

          <!-- Login Button (New) -->
          <q-btn
            flat
            no-caps
            padding="sm lg"
            icon="login"
            label="登入"
            v-if="!loginStatus"
            @click="
              () => {
                console.log('Clicking login button');
                showLoginModal();
              }
            "
          />

          <!-- Mobile Menu Button -->
          <q-btn
            flat
            dense
            round
            icon="menu"
            class="lt-md nav-button"
            @click="drawerRight = !drawerRight"
          />

          <!-- User Actions -->
          <q-btn icon="home" to="/scene" flat v-if="loginStatus" />
          <q-btn
            icon="person"
            flat
            v-if="loginStatus"
            @click="userSetting = true"
          />
          <q-btn icon="logout" flat v-if="loginStatus" @click="logoutFunc" />
        </div>
      </q-toolbar>

      <!-- User Settings Dialog -->
      <q-dialog v-model="userSetting" @before-show="initUserSetting">
        <q-card>
          <q-card-section>
            <div class="text-h6">User Setting</div>
            <div class="text-subtitle1">{{ username }}</div>
            <div class="flex column">
              <q-btn
                :label="t('managePromptBookmarks')"
                to="/promptManagement"
                no-caps
              />
              <q-btn
                :label="t('管理知識庫')"
                to="/knowledgeManagement"
                class="q-mt-sm"
                no-caps
              />
              <q-btn
                :label="t('管理後台')"
                no-caps
                to="/ManagementSystem"
                v-if="userRole == 'ADMIN'"
                class="q-mt-sm"
              />
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>
    </q-header>

    <!-- Mobile Navigation Drawer -->
    <q-drawer v-model="drawerRight" side="right" bordered>
      <q-list>
        <q-separator />
        <!-- 針對不同項目使用不同的渲染邏輯 -->
        <template v-for="item in navItems" :key="item.title">
          <!-- 首頁和聯絡我們使用一般項目 -->
          <q-item
            v-if="['首頁', '聯絡我們'].includes(item.title)"
            clickable
            @click="navigate(item.link)"
          >
            <q-item-section>{{ item.title }}</q-item-section>
          </q-item>

          <!-- 其他項目保持展開功能 -->
          <q-expansion-item
            v-else
            :label="item.title"
            :caption="item.subItems ? '展開子選單' : ''"
            @click="item.link && navigate(item.link)"
            clickable
          >
            <q-list v-if="item.subItems">
              <q-item
                v-for="subItem in item.subItems"
                :key="subItem.title"
                clickable
                @click="navigate(subItem.link)"
              >
                <q-item-section>{{ subItem.title }}</q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>
        </template>
        <q-item>
          <q-item-section>
            <q-btn-dropdown flat :label="selectedLanguage" class="full-width">
              <q-list class="dropdown-menu1">
                <q-item
                  v-for="lang in languages"
                  :key="lang.code"
                  clickable
                  v-close-popup
                  @click="selectLanguage(lang)"
                >
                  <q-item-section>
                    <q-item-label>{{ lang.name }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- 登入對話框 -->
    <q-dialog v-model="isLoginModalVisible" persistent>
      <q-card class="login-card">
        <q-card-section class="row items-center q-pb-none">
          <q-space />

          <q-btn
            icon="close"
            flat
            round
            dense
            v-close-popup
            @click="hideLoginModal"
          />
        </q-card-section>

        <q-card-section class="q-pt-md q-px-lg">
          <div class="text-container">
            <h5 class="text-center">歡迎登入</h5>
            <div class="underline-container">
              <div class="underline"></div>
            </div>
          </div>
          <br />
          <br />
          <div class="login-button-container">
            <div id="g_id_signin" class="q-mt-md"></div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-layout>
</template>

<script>
import { defineComponent, ref, onMounted, computed, nextTick } from "vue";
import { logout, checkLogin, getToken, setToken } from "boot/account";
import { useLoginStore } from "stores/token";
import ReconnectingWebSocket from "reconnecting-websocket";
import { useQuasar } from "quasar";
import { api, baseURL } from "boot/axios";
import { useRouter, useRoute } from "vue-router";
import { useI18n } from "vue-i18n";

const langList = import.meta.glob("../../node_modules/quasar/lang/*.js");

export default defineComponent({
  name: "MainLayout",
  setup() {
    const router = useRouter();
    const loginStore = useLoginStore();
    const loginStatus = computed(() => loginStore.login);
    const $q = useQuasar();
    const route = useRoute();
    const username = computed(() => loginStore.user);
    const userRole = ref(null);
    const userSetting = ref(false);
    const { locale, t } = useI18n({ useScope: "global" });
    const drawerRight = ref(false);

    // 導航項目
    const navItems = ref([
      {
        title: t("首頁"),
        link: "/",
      },
      {
        title: t("關於我們"),
        link: "/about",
        subItems: [
          { title: "經營理念", link: "/about" },
          { title: "合作夥伴", link: "/about" },
          { title: "使用體驗", link: "/about" },
        ],
      },
      {
        title: t("服務項目"),
        link: "/service",
        subItems: [
          { title: "門診紀錄", link: "/service" },
          { title: "護理紀錄", link: "/service" },
          { title: "會議紀錄", link: "/service" },
          { title: "住院摘要", link: "/service" },
          { title: "衛教諮詢", link: "/service" },
          { title: "AI醫檢助手", link: "/service" },
        ],
      },
      {
        title: t("聯絡我們"),
        link: "/contact",
      },
    ]);

    // 語言選項
    const languages = ref([
      { code: "zh-TW", name: "中文" },
      { code: "en-US", name: "English" },
    ]);

    const selectedLanguage = computed(() => {
      return locale.value === "zh-TW" ? "中文" : "English";
    });

    function selectLanguage(lang) {
      locale.value = lang.code;
      langList[`../../node_modules/quasar/lang/${lang.code}.js`]().then(
        (lang) => {
          $q.lang.set(lang.default);
        }
      );
    }

    function navigate(link) {
      router.push(link);
    }

    // 其他原有功能...
    function wsConnect(username) {
      var ws = new ReconnectingWebSocket(
        baseURL.replace("https", "wss") + "ws/" + username
      );
      ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        $q.notify({
          position: "top",
          type: data.type,
          message: data.msg,
        });
      };
    }
    const renderGoogleButton = () => {
      if (document.getElementById("g_id_signin")) {
        google.accounts.id.renderButton(
          document.getElementById("g_id_signin"),
          {
            type: "standard",
            theme: "outline",
            size: "large",
            text: "signin_with",
            shape: "rectangular",
            logo_alignment: "left",
            width: 250,
          }
        );
      }
    };
    const isLoginModalVisible = ref(false); // 添加这行
    const loginModalRef = ref(null);

    const showLoginModal = () => {
      isLoginModalVisible.value = true;
      nextTick(() => {
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
          googleInit();
        }, 100);
      });
    };

    const hideLoginModal = () => {
      isLoginModalVisible.value = false;
    };

    const handleLoginSuccess = (userData) => {
      hideLoginModal();
      // 处理登录成功逻辑
      router.push("/components/Login.vue"); // 或其他你想導向的頁面
    };

    // Google 登入處理
    async function googleAuth(evt) {
      await login(evt, "google");
    }

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
        hideLoginModal(); // 關閉登入視窗
        await toProjectPage(); // 導航到專案頁面
        toProjectPage();
      } catch (error) {
        $q.loading.hide();
        $q.notify({
          position: "top",
          message: error.toString(),
          type: "negative",
        });
      }
    }

    function toProjectPage() {
      router.push("/scene");
    }

    // Google 登入初始化
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
        if (document.getElementById("g_id_signin")) {
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
        }
      } else {
        setTimeout(googleInit, 500);
      }
    }

    onMounted(async () => {
      if (route.path != "/intraApp") {
        if (await checkLogin()) {
          var token = getToken();
          loginStore.setValue(
            true,
            JSON.parse(atob(token.split(".")[1])).username
          );
          wsConnect(username.value);
        } else {
          loginStore.setValue(false, null);
        }
      }
    });

    // 組件掛載時檢查登入狀態
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

    return {
      loginModalRef,
      isLoginModalVisible,
      showLoginModal,
      hideLoginModal,
      handleLoginSuccess,
      navItems,
      languages,
      selectedLanguage,
      selectLanguage,
      navigate,
      drawerRight,
      loginStatus,
      username,
      userSetting,
      userRole,
      t,
      logoutFunc() {
        loginStatus.value = false;
        google.accounts.id.disableAutoSelect();
        logout();
      },
      initUserSetting() {
        const token = getToken();
        if (token) {
          const userInfo = JSON.parse(atob(token.split(".")[1]));
          userRole.value = userInfo.role;
        }
      },
    };
  },
});
</script>

<style scoped>
.underline-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0;
}
.text-container {
  margin-top: 3rem;
  text-align: center;
}
.toolbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
}
.brand {
  font-size: 1.5rem;
  font-weight: bold;
}

.center-container {
  display: flex;
  justify-content: left;
  flex-grow: 1;
}

.nav-buttons {
  display: flex;
  gap: 0.5rem;
}

.nav-button {
  position: relative;
  transition: all 0.3s ease;
  color: white;
  font-weight: 500;
  font-size: 18px;
}

.nav-button:hover {
  background: rgba(255, 255, 255, 0.1);
}

.nav-item {
  font-size: 16px;
}

.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  min-width: 200px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  margin-top: 8px;
}

.nav-button-container:hover.dropdown-menu {
  display: block;
  animation: fadeIn 0.2s ease;
}

.dropdown-item {
  padding: 0.75rem 1rem;
  color: #333;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.9rem;
  font-size: 16px;
}

.dropdown-item:hover {
  background-color: #f3f4f6;
  color: #0d9488;
  padding-left: 1.5rem;
}

.text-center {
  text-align: center;
  margin-bottom: 5rem;
  color: black;
  font-size: 2.5rem;
  font-weight: bold;
  padding-bottom: 1rem;
  width: 100%;
  margin: 0 auto 2rem auto;
  justify-content: center;
}

.hover-line {
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: #ffe66d;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav-item:hover .dropdown-menu {
  display: block;
  animation: fadeIn 0.2s ease;
  font-size: 18px;
}

.dropdown-item:hover {
  background-color: #f3f4f6;
  color: #0d9488;
  padding-left: 1.5rem;
}

.right-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
}

.q-btn-dropdown {
  font-size: 18px; /* 修改這裡的值來改變語言選擇器的字體大小 */
}

.q-btn {
  &[icon="login"] {
    font-size: 18px; /* 修改這裡的值來改變登入按鈕的字體大小 */
  }
}

.right-actions .q-btn[icon="login"] {
  font-size: 20px; /* 特別設置登入按鈕的大小 */
}

.login-card {
  width: 600px;
  max-width: 600px;
  height: 400px;
  border-radius: 8px;
}
.underline {
  width: 80%;
  height: 3px;
  background-color: #0d9488;
  width: 500px;
  margin: 0px 0 20px 0;
  transition: width 0.3s ease;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 3rem;
  position: center;
}
.text-center {
  text-align: center;
  margin-bottom: 2rem;
  color: black;
  font-size: 2.5rem;
  font-weight: bold;
  padding-bottom: 1rem;
  width: 100%;
  margin: 0 auto 2rem auto;
  justify-content: center;
}
.text-container {
  margin-top: 2rem;
  text-align: center;
}
.login-button-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
}

/* Google 按鈕自定義樣式 */
:deep(.nsm7Bb-HzV7m-LgbsSe) {
  background-color: #dc4e41 !important;
  border: none !important;
  color: white !important;
  border-radius: 4px !important;
  padding: 0 16px !important;
  height: 40px !important;
  font-family: "Roboto", sans-serif !important;
  font-size: 14px !important;
  font-weight: 500 !important;
  letter-spacing: 0.25px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  width: 300px !important;
  margin: 0 auto !important;
}

:deep(.nsm7Bb-HzV7m-LgbsSe:hover) {
  background-color: #c1351d !important;
}

:deep(.nsm7Bb-HzV7m-LgbsSe svg) {
  filter: brightness(0) invert(1) !important;
}

/* Google 圖標樣式 */
:deep(.google-button img) {
  filter: brightness(0) invert(1) !important; /* 將圖標變為白色 */
  margin-right: 8px !important;
}

:deep(.nsm7Bb-HzV7m-LgbsSe .l5Lhkf) {
  color: white !important;
}

/* 調整按鈕內部圖標間距 */

:deep(.nsm7Bb-HzV7m-LgbsSe .K4efff .Ce1Y1c) {
  margin-right: 8px !important;
}
.login-card h5 {
  margin: 3rem 0 0 0;
  color: black;
}

.q-mt-md {
  margin-top: 0;
  justify-content: center;
}
/* 確保 Google 按鈕容器有足夠空間 */
#g_id_signin {
  min-height: 40px;
  margin: 16px 0;
}

@media (max-width: 1023px) {
  .nav-buttons {
    display: none;
    font-size: 14px;
  }
}
/* 動畫效果 */
.q-menu--transition-jump-down-enter-active,
.q-menu--transition-jump-down-leave-active {
  transform-origin: top;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.q-menu--transition-jump-down-enter,
.q-menu--transition-jump-down-leave-to {
  opacity: 0;
  transform: translateY(-10px) scaleY(0.95);
}

.q-menu--transition-jump-up-enter-active,
.q-menu--transition-jump-up-leave-active {
  transform-origin: bottom;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.q-menu--transition-jump-up-enter,
.q-menu--transition-jump-up-leave-to {
  opacity: 0;
  transform: translateY(10px) scaleY(0.95);
}

@media (max-width: 768px) {
  .right-actions {
    display: flex;
    align-items: center;
    gap: 0rem;
    flex-shrink: 0;
  }
  .toolbar-container {
    display: flex;
    justify-content: right;
    align-items: right;
    padding: 0 25px;
  }
  .brand {
    font-size: auto;
    font-weight: bold;
  }
  .q-btn-dropdown {
    font-size: 14px;
  }

  /* 隱藏導航欄上的語言選擇 */
  .right-actions .q-btn-dropdown {
    display: none;
  }
}
@media (max-width: 425px) {
  .right-actions {
    display: flex;
    align-items: center;
    gap: 0rem;
    flex-shrink: 0;
  }
  .toolbar-container {
    display: flex;
    justify-content: right;
    align-items: right;
    padding: 0 25px;
  }
  .brand {
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
