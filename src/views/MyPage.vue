<template>
  <div id="app">
    <Users></Users>
  </div>
</template>

<script>
import Users from "../views/users/Users";
import axios from "axios";
import firebase from "firebase";

export default {
  name: "MyPage",
  components: {
    Users,
  },
  data() {
    return {
      userData: "",
    };
  },
  computed: {
    idToken() {
      return this.$store.getters.idToken;
    },
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.commit("getUserData", user);
        console.log(user);
        this.userData = this.$store.state.a.userLogin;
        console.log(this.$store.state.a.userLogin.uid);
      }
    });
  },
};
</script>
