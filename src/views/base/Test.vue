<template>
  <div id="app">
    <h2>ユーザー</h2>
    <table>
      <tr>
        <th>名前</th>
        <th>コメント</th>
        <th>日時</th>
      </tr>
      <tr v-for="post in posts" :key="post.name">
        <td>{{ post.fields.name.stringValue }}</td>
        <td>{{ post.fields.comment.stringValue }}</td>
        <td>{{ post.updateTime }}</td>
      </tr>
    </table>
    <button @click="getAuth">user</button>
  </div>
</template>

<script>
import Users from "../users/Users";
import axios from "axios";
import firebase from "firebase";

var db = firebase.firestore();

export default {
  name: "MyPage",
  components: {
    Users,
  },
  data() {
    return {
      name: "",
      comment: "",
      posts: [],
      user: {},
    };
  },
  computed: {
    idToken() {
      return this.$store.getters.idToken;
    },
  },
  created() {
    axios
      .get("/comments", {
        headers: {
          Authorization: `Bearer ${this.idToken}`,
        },
      })
      .then((response) => {
        this.posts = response.data.documents;
        console.log(response.data.documents);
      });
  },
  methods: {
    createComment() {
      axios
        .post(
          "/comments",
          {
            fields: {
              name: {
                stringValue: this.name,
              },
              comment: {
                stringValue: this.comment,
              },
            },
          },
          {
            headers: {
              Authorization: `Bearer ${this.idToken}`,
            },
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((eror) => {
          console.log(error);
        });
      this.name = "";
      this.comment = "";
    },

    // firebaseユーザー確認  うまく動かず
    getAuth() {
      firebase.auth().onAuthStateChanged(function (user) {
        this.user = user ? user : {};
        console.log(this.user);
        if (this.user) {
          console.log(this.user);
        } else {
          alert("no user");
        }
      });
      db.collection("users").doc("ken").collection("ken")
        .set({
          first: "Ken",
          last: "Lovelace",
          born: 1815,
        })
        .then(function (docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
        });
    },
  },
};
</script>

<style scoped>
tr,
td,
th {
  border: solid 1px black;
  padding: 5px;
}
</style>