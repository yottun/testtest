<template>
  <div id="app">
    <CCard>
      <CCardHeader>
        <CIcon name="cil-justify-center" /><strong>USER検索</strong>
      </CCardHeader>
      <CCardBody>
        <CNavbar light color="light">
          <CForm inline>
            <CInput class="mr-sm-2" placeholder="Search" size="sm" />
            <CButton color="outline-success" class="my-2 my-sm-0" type="submit"
              >Search</CButton
            >
          </CForm>
        </CNavbar>
      </CCardBody>
    </CCard>
    <Users></Users>
    <h3>投稿する</h3>
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
    </div>
  </div>
</template>

<script>
import Users from "../views/users/Users";
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
  created() {
    axios.get("/comments").then((response) => {
      this.posts = response.data.documents;
      console.log(response.data.documents);
    });
  },
  methods: {
    createComment() {
      axios
        .post("/comments", {
          fields: {
            name: {
              stringValue: this.name,
            },
            comment: {
              stringValue: this.comment,
            },
          },
        })
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
