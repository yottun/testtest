<template>
  <div
    class="d-flex align-items-center min-vh-100"
    :style="{
      backgroundSize: 'cover',
      backgroundImage:
        'url(' + require('@/assets/images/background_image.jpg') + ')',
    }"
  >
    <CContainer>
      <CRow class="justify-content-center">
        <CCol md="6">
          <CCard class="">
            <CCardBody>
              <!-- <CForm> -->
              <h1>eat+</h1>
              <p class="text-muted">Sign In to your account</p>
              <CRow>
                <CCol col="" class="">
                  <div class="google-button">
                    <img
                      @click="googleLogin"
                      src="../../assets/icons/btn_google_signin_light_normal_web@2x.png"
                      alt=""
                    />
                  </div>
                </CCol>
              </CRow>
            </CCardBody>
            <CCardFooter class="">
              <CRow>
                <CCol col="6">
                  <CButton block color="facebook"> Facebook </CButton>
                </CCol>
                <CCol col="6">
                  <CButton block color="twitter"> Twitter </CButton>
                </CCol>
              </CRow>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
import Router from "vue-router";
import firebase from "firebase";
export default {
  name: "GooleLogin",
  data() {
    return {
      //   email: "",
      //   password: "",
    };
  },
  methods: {
    googleLogin() {
      firebase
        .auth()
        .signInWithRedirect(new firebase.auth.GoogleAuthProvider());
      this.$router.push("/mypage");
    },
    toRegister() {
      this.$router.push("register");
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
.card-body {
  margin: 0 auto;
}
img {
  height: 40px;
  transition-duration: 0.3s;
}
.google-button:hover img {
  opacity: 0.6;
  transition-duration: 0.3s;
  cursor: pointer;
}
</style>