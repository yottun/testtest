<template>
  <div>
    <CRow>
      <CCol>
        <!-- <CCardHeader>
            <strong>食生活状況確認</strong>
          </CCardHeader> -->
        <CCardBody>
          <CForm>
            <p><strong>ステップ１</strong></p>
            <p><strong>1. やってみてどうだったか</strong></p>
            <CCol class="flex">
              <CTextarea
                label="できたこと"
                placeholder="Content..."
                horizontal
                rows="3"
                v-model="clientData.breakfastMenu"
              />
              <div class="score">
                <div>
                  <label for="1">1
                  <input type="radio" name="score" id="1" /></label>
                </div>
                <div>
                  <label for="2">2
                  <input type="radio" name="score" id="" /></label>
                </div>
                <div>
                  <label for="3">3
                  <input type="radio" name="score" id="" /></label>
                </div>
                <div>
                  <label for="4">4
                  <input type="radio" name="score" id="" /></label>
                </div>
                <div>
                  <label for="5">5
                  <input type="radio" name="score" id="" /></label>
                </div>
              </div>
            </CCol>
            <CTextarea
              label="できなかったこと"
              placeholder="Content..."
              horizontal
              rows="3"
              v-model="clientData.dinnerMenu"
            />

            <p>
              <strong>2. 理解できなかったこと、上手くいかなかったこと</strong>
            </p>

            <CTextarea
              label=" "
              placeholder="Content..."
              horizontal
              rows="3"
              v-model="clientData.betweenMeals"
            />

            <p>
              <strong
                >3.
                できなかったこと、理解できなかったこと、上手くいかなかったことをどうやるか</strong
              >
            </p>

            <CTextarea
              label="目標の提示・確認"
              placeholder="Content..."
              horizontal
              rows="3"
              v-model="clientData.eatOut"
            />
            <CTextarea
              label="行動計画"
              placeholder="Content..."
              horizontal
              rows="3"
              v-model="clientData.eatOut"
            />
            <CTextarea
              label="ビジュアライズ"
              placeholder="Content..."
              horizontal
              rows="3"
              v-model="clientData.eatOut"
            />

            <p><strong>4. 理解度を確認する</strong></p>
            <CTextarea
              label=""
              placeholder="Content..."
              rows="3"
              v-model="clientData.luxuryFood"
            />

            <p><strong>5. 気になっていることはないか</strong></p>
            <CTextarea
              label=""
              placeholder="Content..."
              rows="3"
              v-model="clientData.mainCook"
            />
            <p><strong>6. 管理栄養士から最後にアドバイス(提案)</strong></p>
            <CTextarea
              label=""
              placeholder="Content..."
              rows="3"
              v-model="clientData.allergy"
            />
            <p><strong>7. 力づけ</strong></p>
            <CTextarea
              label=""
              placeholder="Content..."
              rows="3"
              v-model="clientData.likeAndDislike"
            />
          </CForm>
        </CCardBody>
        <CCardFooter>
          <CButton type="submit" size="sm" color="primary" @click="coaching"
            ><CIcon name="cil-check-circle" /> Submit</CButton
          >
          <CButton type="reset" size="sm" color="danger"
            ><CIcon name="cil-ban" /> Reset</CButton
          >
        </CCardFooter>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import axios from "axios";
import firebase from "firebase";

export default {
  name: "BasicInformation",
  name: "Forms",
  data() {
    return {
      id: null,
      clientData: {
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
      },
    };
  },
  methods: {
    coaching() {
      const clientData = this.$store.state.a.clientData;
      this.id = clientData.id;
      firebase
        .firestore()
        .collection("client")
        .doc(this.$store.state.a.userLogin.uid)
        .collection("client")
        .doc(this.id)
        .set(
          {
            breakfast: this.clientData.breakfast,
            lunch: this.clientData.lunch,
            dinner: this.clientData.dinner,
            breakfastMenu: this.clientData.breakfastMenu,
            lunchMenu: this.clientData.lunchMenu,
            dinnerMenu: this.clientData.dinnerMenu,
            betweenMeals: this.clientData.betweenMeals,
            eatOut: this.clientData.eatOut,
            luxuryFood: this.clientData.luxuryFood,
            mainCook: this.clientData.mainCook,
            allergy: this.clientData.allergy,
            likeAndDislike: this.clientData.likeAndDislike,
            supplement: this.clientData.supplement,
            medicine: this.clientData.medicine,
            wakeUpTime: this.clientData.wakeUpTime,
            bedTime: this.clientData.bedTime,
            timeOfSleeping: this.clientData.timeOfSleeping,
            exerciseHabits: this.clientData.exerciseHabits,
            activityIntensity: this.clientData.activityIntensity,
          },
          { merge: true }
        )
        .then(() => {})
        .catch((error) => {});
      this.$store.commit("getClientData", this.clientData);
      this.$router.push("/base/dietaryInformation");
    },
  },
};
</script>
<style scoped>
.flex {
  display: flex;
}
.score {
  display: flex;
  flex-direction: column;
}
</style>