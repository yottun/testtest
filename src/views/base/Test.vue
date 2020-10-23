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
  </div>
</template>

<script>
import Users from "../users/Users";
import axios from "axios";

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