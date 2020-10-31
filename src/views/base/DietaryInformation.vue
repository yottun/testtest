<template>
  <CRow>
    <div class="split-box left-box">
      <CCol>
        <CCard>
          <CCardHeader>
            <strong>クライアント情報</strong>
          </CCardHeader>
          <CCardBody>
            <strong>食事時間</strong><br />
            朝食：{{ breakfast }}時<br />
            昼食：{{ lunch }}時<br />
            夕食：{{ dinner }}時<br />
            <hr>
            <strong>食事内容</strong><br />
            朝食：{{ breakfastMenu }}<br />
            昼食：{{ lunchMenu }}<br />
            夕食：{{ dinnerMenu }}<br />
            間食：{{ betweenMeals }}<br />
            外食：{{ eatOut }}<br />
            <hr>
            <strong>嗜好品</strong><br />
            嗜好品：{{ luxuryFood }}<br />
            主調理者：{{ mainCook }}<br />
            アレルギー：{{ allergy }}<br />
            好き嫌い：{{ likeAndDislike }}<br />
            サプリメント：{{ supplement }}<br />
            服薬：{{ medicine }}<br />
            <hr>
            <strong>生活状況確認</strong><br />
            起床時間：{{ wakeUpTime }}時<br />
            就寝時間：{{ bedTime }}時<br />
            平均睡眠時間：{{ timeOfSleeping }}時間<br />
            運動習慣・種類：{{ exerciseHabits }}<br />
            身体活動レベル：{{ activityIntensity }}<br />
          <button @click="deleteClient">クライアント削除</button>
          </CCardBody>
        </CCard>
      </CCol>
    </div>
    <div class="split-box right-box">
      <CCol> </CCol>
    </div>
  </CRow>
</template>

<script>
// const db = firebase.firestore();
import firebase from "firebase";
export default {
  data() {
    return {
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
    const clientData = this.$store.state.a.clientInformation;
    // this.getData();
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
      db.collection("client")
        .doc(this.$store.state.a.userLogin.uid)
        .collection("client")
        .doc()
        .delete()
        .then(function () {
          console.log("Document successfully deleted!");
        })
        .catch(function (error) {
          console.error("Error removing document: ", error);
        });
    },
    // getData() {
    //   const clientData = this.$store.state.a.clientData;
    //   // this.id = clientData.id;
    //   // this.breakfast = null;
    //   console.log(this.breakfast);
    //   firebase
    //     .firestore()
    //     .collection("client")
    //     .doc(this.$store.state.a.userLogin.uid)
    //     .collection("client")
    //     .doc(clientData.id)
    //     .get()
    //     .then(function (doc) {
    //       if (doc.exists) {
    //         //   const lunch = this.lunch;
    //         console.log(doc.data().breakfast);
    //         // this.breakfast = doc.data().breakfast;
    //       }
    //     });
    // },
  },
};
</script>
