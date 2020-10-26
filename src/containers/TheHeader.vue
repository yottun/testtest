<template>
  <CHeader fixed with-subheader light>
    <CToggler
      in-header
      class="ml-3 d-lg-none"
      @click="$store.commit('toggleSidebarMobile')"
    />
    <CToggler
      in-header
      class="ml-3 d-md-down-none"
      @click="$store.commit('toggleSidebarDesktop')"
    />
    <!-- <CHeaderBrand class="mx-auto d-lg-none" to="/">
      <CIcon name="logo" height="48" alt="Logo"/>
    </CHeaderBrand> -->
    <CHeaderNav class="d-md-down-none mr-auto">
      <CHeaderNavItem class="px-3">
        <CHeaderNavLink to="/mypage"> MyPage </CHeaderNavLink>
      </CHeaderNavItem>
    </CHeaderNav>
    <CHeaderNav class="mr-4">
      <CHeaderNavItem class="d-md-down-none mx-2">
        <CHeaderNavLink>
          <CIcon name="cil-envelope-open" />
        </CHeaderNavLink>
      </CHeaderNavItem>
      <CHeaderNavItem class="d-md-down-none mx-2">
        <CHeaderNavLink>
          <div @click="logout">ログアウト</div>
        </CHeaderNavLink>
      </CHeaderNavItem>
      <TheHeaderDropdownAccnt />
    </CHeaderNav>
    <CSubheader class="px-3 goal">
      <CRow>
        <CCol>
      <p v-if="userData">
        {{ userData.displayName }} 様 こんにちは
        <br />
        メールアドレス：{{ userData.email }}<br />
        ID：{{ userData.uid }}
      </p>
        </CCol>
      </CRow>
    </CSubheader>
  </CHeader>
</template>

<script>
import TheHeaderDropdownAccnt from "./TheHeaderDropdownAccnt";
import firebase from "firebase";
import Router from "vue-router";

export default {
  name: "TheHeader",
  // props: ["user"],
  // userName: null,
  components: {
    TheHeaderDropdownAccnt,
  },

  data() {
    return {
      userData: "",
      // userName: null
      // ユーザー情報
    };
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
    // ,db
    //     .collection("client")
    //     .doc("2mOCpuq1sJVLkZfFcztcVvtlpc13")
    //     .collection("client")
    //     .get()
    //     .then(function (doc) {
    //       if (doc) {
    //         console.log("Document data:", docs.map(postDoc => doc.id));
    //       } else {
    //         console.log("No such document!");
    //       }
    //     })
    //     .catch(function (error) {
    //       console.log("Error getting document:", error);
    //     });
  },
  methods: {
    logout() {
      // this.$store.dispatch("logout");
      firebase.auth().signOut();
      this.$router.push("/pages/google-login");
    },
  },
};
</script>

<style scoped>
.goal {
  height: auto;
}
</style>
