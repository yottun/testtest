<template>
  <div>
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>
            <strong>クライアント情報</strong>
          </CCardHeader>
          <CCardBody>
            名前：{{ username }}<br />
            居住地：{{ address }}<br />
            生年月日：{{ birthday }}<br />
            メールアドレス：{{ email }}<br />
            ID：{{ id }}<br />
            性別：{{ sex }}<br />
            <button @click="deleteClient">クライアント削除</button>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
// const db = firebase.firestore();
import firebase from "firebase";
export default {
  data() {
    return {
      username: null,
      address: null,
      birthday: null,
      email: null,
      id: null,
      sex: null,
    };
  },
  created() {
    const clientData = this.$store.state.a.clientData;
    this.username = clientData.username;
    this.address = clientData.address;
    this.birthday = clientData.birthday;
    this.email = clientData.email;
    this.id = clientData.id;
    this.sex = clientData.sex;
  },
  methods: {
    deleteClient() {
      firebase
        .firestore()
        .collection("client")
        .doc(this.$store.state.a.userLogin.uid)
        .collection("client")
        .doc(this.id)
        .delete()
        .then(function () {
          console.log("Document successfully deleted!");
        })
        .catch(function (error) {
          console.error("Error removing document: ", error);
        });

      this.$router.push("/mypage");
    },
  },
};
</script>
