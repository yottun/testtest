<template>
  <div>
    <div>
      <CCardHeader class="chat">
        <strong>チャット</strong>
      </CCardHeader>
      <CCardBody>
        <!-- <table>
        <tr v-for="(post, index) in posts" :key="index">
          <td>{{ post.name }}</td>
          <td>{{ new Date(post.date).toString() }}</td>
          <td>{{ post.body }}</td>
        </tr>
      </table> -->

        <transition-group name="chat" tag="div" class="list content">
          <section
            v-for="(post, index) in posts"
            :key="index"
            v-bind:class="[post.name === isActive ? 'item' : 'client-item']"
          >
            <div class="item-image">
              <!-- <img :src="image" width="40" height="40"> -->
            </div>
            <div
              v-bind:class="[
                post.name === isActive ? 'item-detail' : 'client-item-detail',
              ]"
            >
              <div class="item-name">{{ post.name }}</div>
              <div
                v-bind:class="[
                  post.name === isActive
                    ? 'item-message'
                    : 'client-item-message',
                ]"
              >
                <nl2br tag="div" :text="post.body" />
              </div>
              <!-- <div class="item-name">{{ post.date }}</div> -->
            </div>
          </section>
        </transition-group>
        <!-- <textarea
        v-model="body"
        rows="2"
        cols="60"
        placeholder="Your message"
      ></textarea> -->
        <!-- <button @click="submit">Submit</button> -->
        <button @click="witeToClipboard()">招待URLをコピー</button>
        <div id="target">
          https://eatas-chat.lolipop.io/#/chat?nutritionistId={{
            invitation
          }}&clientId={{ invitationClient }}
        </div>
        <form action="" @submit.prevent="submit" class="form">
          <textarea
            placeholder="Your message"
            v-model="body"
            @keydown.meta.enter.exact.prevent="submit"
          ></textarea>
          <button type="submit" class="send-button">Send</button>
        </form>
      </CCardBody>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
// 改行を <br> タグに変換するモジュール
import Nl2br from "vue-nl2br";
export default {
  // convertFromFirestoreTimestampToDatetime(timestamp) {
  //   const _d = timestamp ? new Date(timestamp * 1000) : new Date();
  //   const Y = _d.getFullYear();
  //   const m = (_d.getMonth() + 1).toString().padStart(2, '0');
  //   const d = _d.getDate().toString().padStart(2, '0');
  //   const H = _d.getHours().toString().padStart(2, '0');
  //   const i = _d.getMinutes().toString().padStart(2, '0');
  //   const s = _d.getSeconds().toString().padStart(2, '0');
  //   return `${Y}/${m}/${d} ${H}:${i}:${s}`;
  // },
  components: { Nl2br },
  data() {
    return {
      user: {}, // ユーザー情報
      posts: [], // 取得したメッセージを入れる配列
      input: "", // 入力したメッセージ
      message: "",
      unsubscribe: null,
      body: "",
      image: null,
      id: null,
      invitation: null,
      invitationClient: null,
      isActive: null,
    };
  },
  created() {
    this.isActive = this.$store.state.a.userLogin.displayName;
    this.invitation = this.$store.state.a.userLogin.uid;
    this.invitationClient = this.$store.state.a.clientData.id;
    const clientData = this.$store.state.a.clientData;
    this.id = clientData.id;
    firebase
      .firestore()
      .collection("client")
      .doc(this.$store.state.a.userLogin.uid)
      .collection("client")
      .doc(this.id)
      .collection("message")
      .orderBy("date", "asc")
      .onSnapshot((querySnapshot) => {
        const array = [];
        querySnapshot.docs.forEach((doc) => {
          array.push(doc.data());
          console.log(array[0].date.toString());
        });
        this.posts = array;
        console.log(this.posts);
      });
  },
  methods: {
    submit() {
      // firebase にメッセージを追加
      firebase
        .firestore()
        .collection("client")
        .doc(this.$store.state.a.userLogin.uid)
        .collection("client")
        .doc(this.id)
        .collection("message")
        .doc()
        .set({
          body: this.body,
          date: Date.now(),
          name: this.$store.state.a.userLogin.displayName,
          user: this.$store.state.a.userLogin.uid,
          image: this.$store.state.a.userLogin.photoURL,
        })
        .then(() => (this.body = ""))
        .catch((e) => alert(e));
    },
    witeToClipboard() {
      const copyText = this.$el.querySelector("#target").textContent;
      navigator.clipboard
        .writeText(copyText)
        .then(() => {
          alert("テキストコピー完了");
        })
        .catch((e) => {
          console.error(e);
        });
    },
  },
};
</script>

<style>
.content {
  /* margin: 0 auto; */
  max-width: 600px;
}
.form {
  /* position: fixed;
  background: #f5f5f5; */
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  height: 80px;
  width: 100%;
}
.form textarea {
  border: 1px solid #ccc;
  border-radius: 2px;
  height: 4em;
  /* width: calc(100% - 6em); */
  width: 100%;
  resize: none;
}
.list {
  margin-bottom: 50px;
}
.item {
  position: relative;
  display: flex;
  align-items: flex-end;
  margin-bottom: 0.8em;
}
.item-image img {
  border-radius: 20px;
  vertical-align: top;
}
.item-detail {
  margin: 0 0 0 1.4em;
}
.client-item-detail {
  margin: 0 0 0 auto;
}
.item-name {
  font-size: 75%;
}
.item-message {
  position: relative;
  display: inline-block;
  padding: 0.8em;
  background: #deefe8;
  border-radius: 4px;
  line-height: 1.2em;
}
.client-item-message {
  position: relative;
  display: inline-block;
  padding: 0.8em;
  background: mistyrose;
  border-radius: 4px;
  line-height: 1.2em;
}
.item-message::before {
  position: absolute;
  content: " ";
  display: block;
  left: -16px;
  bottom: 12px;
  border: 4px solid transparent;
  border-right: 12px solid #deefe8;
}
.client-item {
  position: relative;
  display: flex;
  align-items: flex-end;
  margin-bottom: 0.8em;
  margin: 0 auto;
}
.client-item-message::after {
  position: absolute;
  content: " ";
  display: block;
  right: -16px;
  bottom: 12px;
  border: 4px solid transparent;
  border-left: 12px solid mistyrose;
}
/* .item-message {
  position: relative;
  display: inline-block;
  padding: 0.8em;
  background: #deefe8;
  border-radius: 4px;
  line-height: 1.2em;
}
.item-message::before {
  position: absolute;
  content: " ";
  display: block;
  right: -16px;
  bottom: 12px;
  border: 4px solid transparent;
  border-left: 12px solid #deefe8;
} */
.send-button {
  height: 4em;
}
/* トランジション用スタイル */
.chat-enter-active {
  transition: all 1s;
}
.chat-enter {
  opacity: 0;
  transform: translateX(-1em);
}
.chat {
  background-color: #95e1d3;
}
</style>