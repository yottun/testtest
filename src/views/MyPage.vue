<template>
  <div id="app">
    <CCard>
      <CCardBody>
        <CRow>
          {{ userData.displayName }}<br />
          {{ userData.email }}<br />
          {{ userData.uid }}
        </CRow>
      </CCardBody>
    </CCard>
    <ClientCreate></ClientCreate>
    <Users></Users>
    <!-- <h3>投稿する</h3>
    <label for="name">ニックネーム</label>
    <input id="name" type="text" v-model="name" />
    <br /><br />

    <label for="comment">コメント</label>
    <textarea name="" id="comment" v-model="comment"></textarea>
    <br /><br />
    <button @click="createComment">コメントをサーバーに送る</button>
    <h2>掲示板</h2>
    <div v-for="post in posts" :key="post.name">
      <br />
      <div>名前:{{ post.fields.name.stringValue }}</div>
      <div>コメント:{{ post.fields.comment.stringValue }}</div>
    </div> -->
  </div>
</template>

<script>
import Users from "../views/users/Users";
import ClientCreate from "../views/base/ClientCreate";
import axios from "axios";
import firebase from "firebase";

export default {
  name: "MyPage",
  // props: ["user"],
  components: {
    Users,
    ClientCreate
  },
  data() {
    return {
      userData: "",
      clientData: "",
      // name: "",
      // comment: "",
      // posts: [],
    };
  },
  computed: {
    // idToken() {
    //   return this.$store.getters.idToken;
    // },
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.commit("getUserData", user);
        console.log(user);
        this.userData = this.$store.state.a.userLogin;
      }
    })
  },
  methods: {
    // createComment() {
    //   axios
    //     .post(
    //       "/comments",
    //       {
    //         fields: {
    //           name: {
    //             stringValue: this.name,
    //           },
    //           comment: {
    //             stringValue: this.comment,
    //           },
    //         },
    //       },
    //       {
    //         headers: {
    //           Authorization: `Bearer ${this.idToken}`,
    //         },
    //       }
    //     )
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((eror) => {
    //       console.log(error);
    //     });
    //   this.name = "";
    //   this.comment = "";
    // },
  },
};
</script>
