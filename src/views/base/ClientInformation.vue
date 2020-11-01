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
      id: null,
      breakfast: null,
      lunch: null,
      dinner: null,
      breakfastMenu: null,
      lunchMenu: null,
      dinnerMenu: null,
      betweenMeals: null,
      eatOut: null,
      luxuryFood: null,
      mainCook: null,
      allergy: null,
      likeAndDislike: null,
      supplement: null,
      medicine: null,
      wakeUpTime: null,
      bedTime: null,
      timeOfSleeping: null,
      exerciseHabits: null,
      activityIntensity: null,
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
    this.breakfast = clientData.breakfast;
    this.lunch = clientData.lunch;
    this.dinner = clientData.dinner;
    this.breakfastMenu = clientData.breakfastMenu;
    this.lunchMenu = clientData.lunchMenu;
    this.dinnerMenu = clientData.dinnerMenu;
    this.betweenMeals = clientData.betweenMeals;
    this.eatOut = clientData.eatOut;
    this.luxuryFood = clientData.luxuryFood;
    this.mainCook = clientData.mainCook;
    this.allergy = clientData.allergy;
    this.likeAndDislike = clientData.likeAndDislike;
    this.supplement = clientData.supplement;
    this.medicine = clientData.medicine;
    this.wakeUpTime = clientData.wakeUpTime;
    this.bedTime = clientData.bedTime;
    this.timeOfSleeping = clientData.timeOfSleeping;
    this.exerciseHabits = clientData.exerciseHabits;
    this.activityIntensity = clientData.activityIntensity;
  },
  methods: {
    deleteClient() {
      if (!confirm("この作業は元に戻せません。削除しますか？")) {
        return false;
      } else {
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
      }
    },
  },
};
</script>
