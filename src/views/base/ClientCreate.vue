<template>
  <div>
    <CRow class="">
      <CCol md="">
        <CCard class="">
          <CCardBody class="">
            <CForm>
              <h1>クライアント新規登録</h1>
              <h2>基本情報入力</h2>
              <CInput id="name" type="text" v-model="name" label="名前">
                <template #prepend-content><CIcon name="cil-user" /></template>
              </CInput>
              <CInput id="ruby" type="text" v-model="ruby" label="フリガナ">
                <template #prepend-content><CIcon name="cil-user" /></template>
              </CInput>
              <CInput
                id="email"
                type="email"
                v-model="email"
                label="メールアドレス"
              >
                <template #prepend-content><CIcon name="cil-user" /></template>
              </CInput>
              <div>性別<br /></div>
              <div class="sex">
                <input
                  name="sex"
                  id="male"
                  type="radio"
                  value="男"
                  v-model="pickedSex"
                />
                <label for="male">男</label>
                <input
                  name="sex"
                  id="female"
                  type="radio"
                  value="女"
                  v-model="pickedSex"
                />
                <label for="female">女</label>
                <input
                  name="sex"
                  id="queer"
                  type="radio"
                  value="どちらでもない"
                  v-model="pickedSex"
                />
                <label for="queer">どちらでもない</label>
              </div>
              <CInput
                id="birthday"
                type="text"
                v-model="birthday"
                label="生年月日"
                placeholder="例)20201119"
              >
                <template #prepend-content
                  ><CIcon name="cil-lock-locked"
                /></template>
              </CInput>
              <CInput
                id="address"
                type="text"
                v-model="address"
                label="居住地"
                placeholder="例)福岡県"
              >
                <template #prepend-content
                  ><CIcon name="cil-lock-locked"
                /></template>
              </CInput>
              <CButton color="success" block @click="addClient"
                >Create Account</CButton
              >
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import axios from "axios";
import firebase from "firebase";

let db = firebase.firestore();

export default {
  name: "ClientCreate",
  data() {
    return {
      name: "",
      ruby: "",
      email: "",
      pickedSex: "",
      birthday: "",
      address: "",
    };
  },
  computed: {},
  methods: {
    addClient() {
      firebase
        .firestore()
        .collection("client")
        .doc(this.$store.state.a.userLogin.uid)
        .collection("client")
        .doc()
        .set({
          name: this.name,
          ruby: this.ruby,
          email: this.email,
          pickedSex: this.pickedSex,
          birthday: this.birthday,
          address: this.address,
          // createdAt:firebase.firestore.Timestamp,
          // updatedAt:firebase.firestore.Timestamp 
        });
      // alert(this.$store.state.a.userLogin.uid);
      this.$router.push("/");
    },
  },
};
</script>
<style  scoped>
.passError {
  color: red;
}
label {
  margin-right: 10px;
}
.sex,
.picked-license,
.experience,
.picked-experience {
  padding: 15px;
}
</style>