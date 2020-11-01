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
          <div v-if="userData">
            {{ userData.displayName }} 様 こんにちは
            <br />
            メールアドレス：{{ userData.email }}<br />
            ID：{{ userData.uid }}
          </div>
        </CCol>
      </CRow>
      <CRow class="ml-3">
        <CCol></CCol>
      </CRow>
      <CRow class="ml-3 mr-auto">
        <CCol></CCol>
      </CRow>
      <!-- <div class="d-flex mt-4">
        <button class="m-auto" @click="nutritionistRegister">Myプロフィール登録</button>
      </div> -->
    </CSubheader>
  </CHeader>
</template>

<script>
import TheHeaderDropdownAccnt from "./TheHeaderDropdownAccnt";
import firebase from "firebase";
import Router from "vue-router";

export default {
  name: "TheHeader",
  components: {
    TheHeaderDropdownAccnt,
  },

  data() {
    return {
      userData: "",
      // nutritionistData: null,
    };
  },
  created() {
    const db = firebase.firestore();
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.commit("getUserData", user);
        this.userData = this.$store.state.a.userLogin;
        console.log(this.$store.state.a.userLogin.uid)
        db.collection("nutritionist")
          .doc(this.$store.state.a.userLogin.uid)
          .get()
          .then(function(doc) {
              if(doc.exists) {
                console.log(doc.data().birthday)
              }
          });
      }
    });
  },
  methods: {
    logout() {
      // this.$store.dispatch("logout");
      firebase.auth().signOut();
      this.$router.push("/pages/google-login");
    },
    // nutritionistRegister() {
    //   this.$router.push("nutritionist-register");
    // },
  },
};
</script>

<style scoped>
.goal {
  height: auto;
}
</style>
