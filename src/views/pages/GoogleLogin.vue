<template>
  <div class="c-app flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol md="10">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <CForm>
                  <h1>ログイン</h1>
                  <p class="text-muted">Sign In to your account</p>
                  <CRow>
                    <CCol col="6" class="text-left">
                      <CButton color="primary" class="px-3" @click="googleLogin"
                        >Googleログイン</CButton
                      >
                    </CCol>
                    <CCol col="6" class="text-right">
                      <CButton color="link" class="px-0"
                        >パスワードを忘れた方</CButton
                      >
                      <CButton color="link" class="d-lg-none"
                        >Register now!</CButton
                      >
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
            <CCard
              color="primary"
              text-color="white"
              class="text-center py-5 d-md-down-none"
              body-wrapper
            >
              <CCardBody>
                <h2>アカウントを<br>作ろう！</h2>
                <p>
                </p>
                <CButton
                  color="light"
                  variant="outline"
                  size="lg"
                  @click="toRegister"
                >
                  新規登録
                </CButton>
              </CCardBody>
            </CCard>
          </CCardGroup>
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
        this.$router.push("/");
    },
    toRegister() {
      this.$router.push("register");
    },
  },
};
</script>
