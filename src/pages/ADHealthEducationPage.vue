<template>
  <q-page class="flex flex-start">
    <!-- <q-pull-to-refresh @refresh="refresh" class="full-width"> -->
    <div
      class="flex column full-width items-center justify-start"
      style="height: inherit"
    >
      <div
        class="flex column no-wrap full-height justify-start items-start q-mt-md"
        style="width: 90%"
      >
        <div class="flex column q-mb-md fit no-wrap">
          <q-scroll-area class="full-height outline" ref="chatHistoryScroll">
            <div
              v-for="item in chatHistory"
              :key="item.id"
              class="flex column q-mb-md q-pa-sm"
              :style="item.role == 'USER' ? { backgroundColor: '#f4f4f4' } : {}"
            >
              <div v-if="item.role == 'USER'" class="flex items-center">
                <q-avatar>
                  <img src="USER.png" />
                </q-avatar>
                <div class="text-h6 q-ml-md">使用者</div>
              </div>
              <div v-else class="flex items-center">
                <q-avatar>
                  <img src="AI.png" />
                </q-avatar>
                <div class="text-h6 q-ml-md">AI</div>
              </div>
              <div
                v-html="item.content"
                class="markdown-body q-pa-sm"
                :style="{ backgroundColor: '#ffffff00' }"
              ></div>
              <!-- <q-separator
                  v-if="chatHistory.indexOf(item) != chatHistory.length - 1"
                  color="starlux-light"
                  size="3px"
                  class="q-my-md"
                /> -->
            </div>
            <div class="q-pa-md" v-if="aiThinking">
              <q-spinner-dots color="primary" size="2em" />
            </div>
          </q-scroll-area>
          <div
            class="q-mt-md outline flex col-grow items-center"
            style="min-height: 50px; height: auto; border-radius: 10px"
          >
            <!-- <div class="flex col-shrink"> -->
            <!-- <q-file
                v-model:model-value="imageInput"
                style="width: 0px; height: 0px"
                ref="imageUpload"
                @update:model-value="insertImage"
                accept="image/*"
              />
              <q-btn icon="image" flat @click="imageUpload.pickFiles()" /> -->
            <!-- </div> -->
            <div id="editor" class="col"></div>
            <div class="flex col-shrink">
              <q-btn icon="send" @click="sendChat" flat />
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { api, baseURL } from "boot/axios";
import { useQuasar } from "quasar";
import { checkLogin, getToken } from "boot/account";
import { useRouter, useRoute, onBeforeRouteLeave } from "vue-router";
import {
  RecordRTCPromisesHandler,
  invokeSaveAsDialog,
  StereoAudioRecorder,
} from "recordrtc";
import VADBuilder, { VADMode, VADEvent } from "@ozymandiasthegreat/vad";
import dateFormat from "dateformat";
import MarkdownIt from "markdown-it";
import emoji from "markdown-it-emoji";
import markdownItMark from "markdown-it-mark";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import mime from "mime-types";
import "github-markdown-css/github-markdown-light.css";
import Quill from "quill";
import "quill/dist/quill.core.css";

export default defineComponent({
  name: "ADHealthEducationPage",
  components: {},
  setup() {
    let session_id = null;

    const userInput = ref(null);
    const chatHistory = ref([]);
    const chatHistoryScroll = ref(null);
    const aiThinking = ref(false);

    const md = MarkdownIt({
      breaks: true,
      linkify: true,
      typographer: true,
      highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return hljs.highlight(str, { language: lang }).value;
          } catch (__) {}
        }

        return ""; // use external default escaping
      },
    });
    md.use(emoji);
    md.use(markdownItMark);

    let quill = null;
    const options = {
      debug: "info",
      modules: {
        toolbar: false,
      },
      placeholder: "Write here.",
      theme: "snow",
    };

    function DeltaParser(data) {
      const opsList = data.ops;
      let text = "";
      let images = [];
      let mdText = "";
      for (let i = 0; i < opsList.length; i++) {
        // console.log(typeof opsList[i].insert);
        if (typeof opsList[i].insert === "string") {
          text += opsList[i].insert;
          mdText += opsList[i].insert;
        } else {
          images.push(opsList[i].insert.image);
          mdText += " ![](" + opsList[i].insert.image + "){height=100}";
        }
      }
      // console.log(text);
      // console.log(images);
      // console.log(md.render(mdText));
      return {
        text: text,
        images: images,
        mdText: mdText,
      };
    }

    function convertChatHistory(ChatHistoryOrg) {
      for (var i = 0; i < ChatHistoryOrg.length; i++) {
        ChatHistoryOrg[i].content = md.render(ChatHistoryOrg[i].content);
      }
      return ChatHistoryOrg;
    }

    onMounted(async () => {
      if (await checkLogin()) {
        try {
          const get = await api.get("/AI/ChatHistoryUUID", {
            headers: {
              Authorization: "Bearer " + getToken(),
            },
          });
          const { data } = get;
          session_id = data;
          console.log(session_id);
          quill = new Quill("#editor", options);
        } catch (error) {
          throw Error(error);
        }
      }
    });

    async function clearHistory() {
      try {
        await api.delete("/AI/ChatHistoryUUID", {
          data: { session_id: session_id },
          headers: {
            Authorization: "Bearer " + getToken(),
          },
        });
      } catch (error) {
        throw Error(error);
      }
    }

    onBeforeRouteLeave(async (to, from, next) => {
      await clearHistory();
      window.onbeforeunload = null;
      next();
    });

    // window.onbeforeunload = async function () {
    //   await clearHistory();
    //   return null;
    // };

    return {
      aiThinking,
      userInput,
      chatHistoryScroll,
      chatHistory,
      async sendChat() {
        let res = DeltaParser(quill.getContents());
        console.log(res);

        chatHistory.value.push({
          role: "USER",
          content: md.render(res.text),
          // img: userInputImg.value,
        });
        setTimeout(() => {
          chatHistoryScroll.value.setScrollPercentage("vertical", 1, 300);
        }, 500);

        const formdata = new FormData();
        // formdata.append("projectID", route.params.projectId);
        formdata.append("text", res.text);
        formdata.append("chatBotName", "AD");
        formdata.append("chat_history_uuid", session_id);

        quill.setText("");
        try {
          aiThinking.value = true;
          const post = await api.post("/AI/ChatBotLLM", formdata, {
            headers: {
              Authorization: "Bearer " + getToken(),
            },
          });
          const { data } = post;
          // const data = "Currently no AI response!";
          // chatHistory.value.push({
          //   role: "AI",
          //   content: md.render(data),
          //   // img: null,
          // });
          chatHistory.value = convertChatHistory(data);
          aiThinking.value = false;
        } catch (error) {
          chatHistory.value.push({
            role: "AI",
            content: md.render("好像出錯了...\n我可能無法回答您"),
            // img: null,
          });
          aiThinking.value = false;
          throw Error(error);
        }
      },
    };
  },
});
</script>
<style lang="sass" scoped>
.outline
  border: 1px solid lightgray
  border-radius: 10px
.audioStyle
  flex: 1 0 auto

.hrDiv
  width: calc(50% - 20px)
</style>
<style lang="sass">
.ql-editor
  max-height: 200px
</style>
