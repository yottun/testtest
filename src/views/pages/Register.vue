<template>
  <div class="d-flex align-items-center min-vh-100">
    <CContainer fluid>
      <CRow class="justify-content-center">
        <CCol md="6">
          <CCard class="mx-4 mb-0">
            <CCardBody class="p-4">
              <CForm>
                <h1>登録</h1>
                <p class="text-muted">アカウント作成</p>
                <CInput
                  id="email"
                  type="email"
                  v-model="email"
                  placeholder="Username"
                  autocomplete="username"
                  description="emailアドレスを入力してください。"
                >
                  <template #prepend-content
                    ><CIcon name="cil-user"
                  /></template>
                </CInput>
                <!-- <CInput
                  placeholder="Email"
                  autocomplete="email"
                  prepend="@"
                /> -->
                <CInput
                  id="password"
                  type="password"
                  v-model="password"
                  placeholder="Password"
                  autocomplete="new-password"
                >
                  <template #prepend-content
                    ><CIcon name="cil-lock-locked"
                  /></template>
                </CInput>
                <CInput
                  placeholder="Repeat password"
                  type="password"
                  v-model="repassword"
                  autocomplete="new-password"
                  class="mb-4"
                >
                  <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                </CInput>
                <p class="passError">{{ passError }}</p>
                <CButton color="success" block @click="register"
                  >Create Account</CButton
                >
              </CForm>
            </CCardBody>
            <CCardFooter class="p-4">
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
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      repassword: "",
      passError: "",
    };
  },
  methods: {
    register() {
      if( this.password === this.repassword ) {
      this.$store.dispatch('register', {
        email: this.email,
        password: this.password
      });
      this.email = "";
      this.password = "";
      this.repassword = "";
    } else {
      this.passError = "パスワードが一致しません。";
    }},
  },
};
</script>
<style  scoped>
.passError {
  color: red;
}
</style>