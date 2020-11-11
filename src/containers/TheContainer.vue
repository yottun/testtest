<template>
  <div v-if="userData" class="c-app">
    <!-- <TheSidebar /> -->
    <CWrapper>
      <TheHeader :user="userData" />
      <div class="c-body">
        <main class="c-main">
          <CContainer fluid>
            <transition name="fade" mode="out-in">
              <router-view :key="$route.path"></router-view>
            </transition>
          </CContainer>
        </main>
      </div>
      <TheFooter />
    </CWrapper>
  </div>
</template>

<script>
import TheSidebar from "./TheSidebar";
import TheHeader from "./TheHeader";
import TheFooter from "./TheFooter";
import firebase from "firebase";

export default {
  name: "TheContainer",
  data() {
    return {
      isLogin: false,
      userData: null,
      // loading: true
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.commit("getUserData", user);
        this.userData = this.$store.state.a.userLogin;
      }
    });
  },
  methods: {},
  components: {
    TheSidebar,
    TheHeader,
    TheFooter,
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.c-body {
  background-color: snow;
}
</style>
