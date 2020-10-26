<template>
  <div
    class="d-flex align-items-center min-vh-100"
    :style="{
      backgroundSize: 'cover',
      backgroundImage:
        'url(' + require('@/assets/images/background_image.jpg') + ')',
    }"
  >
    <CContainer fluid>
      <CRow class="justify-content-center">
        <CCol md="6">
          <CCard class="mx-4 mb-0">
            <CCardBody class="p-4">
              <CForm>
                <h1>Nutritionist Register</h1>
                <h2>基本情報入力</h2>
                <p class="text-muted">プロフィール登録</p>
                <CInput id="name" type="text" v-model="name" label="名前">
                  <template #prepend-content
                    ><CIcon name="cil-user"
                  /></template>
                </CInput>
                <CInput id="ruby" type="text" v-model="ruby" label="フリガナ">
                  <template #prepend-content
                    ><CIcon name="cil-user"
                  /></template>
                </CInput>
                <CInput
                  id="nickname"
                  type="text"
                  v-model="nickname"
                  label="ニックネーム"
                >
                  <template #prepend-content
                    ><CIcon name="cil-user"
                  /></template>
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
                <div>管理栄養士免許<br /></div>
                <div class="picked-license">
                  <input
                    name="picked-license"
                    id="yes"
                    type="radio"
                    value="あり"
                    v-model="pickedLicense"
                  />
                  <label for="yes">あり</label>
                  <input
                    name="picked-license"
                    id="no"
                    type="radio"
                    value="なし"
                    v-model="pickedLicense"
                  />
                  <label for="no">なし</label>
                </div>
                <div>栄養指導経験<br /></div>
                <div class="picked-experience">
                  <input
                    name="picked-experience"
                    id="picked-experience-yes"
                    type="radio"
                    value="あり"
                    v-model="pickedExperience"
                  />
                  <label for="picked-experience-yes">あり</label>
                  <input
                    name="picked-experience"
                    id="picked-experience-yes-no"
                    type="radio"
                    value="なし"
                    v-model="pickedExperience"
                  />
                  <label for="picked-experience-yes-no">なし</label>
                  <input
                    name="experience-yes"
                    type="text"
                    placeholder="ありの場合"
                    v-model="experienceYes"
                  />年
                </div>
                <CButton color="success" block @click="nutritionist_register"
                  >Create Account</CButton
                >
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
import axios from "axios";
import firebase from "firebase";

export default {
  name: "NutritionistRegister",
  data() {
    return {
      name: "",
      ruby: "",
      nickname: "",
      pickedSex: "",
      birthday: "",
      address: "",
      pickedLicense: "",
      pickedExperience: "",
      experienceYes: "",
    };
  },
  computed: {
    idToken() {
      return this.$store.getters.idToken;
    },
  },
  methods: {
    nutritionist_register() {
      axios
        .post(
          "/nutritionist",
          {
            fields: {
              name: {
                stringValue: this.name,
              },
              ruby: {
                stringValue: this.ruby,
              },
              nickname: {
                stringValue: this.nickname,
              },
              pickedSex: {
                stringValue: this.pickedSex,
              },
              birthday: {
                stringValue: this.birthday,
              },
              address: {
                stringValue: this.address,
              },
              pickedLicense: {
                stringValue: this.pickedLicense,
              },
              pickedExperience: {
                stringValue: this.pickedExperience,
              },
              experienceYes: {
                stringValue: this.experienceYes,
              },
              // created_at: _created_at
              // createdAt: {
              //   stringValue: firebase.firestore.FieldValue.serverTimestamp(),
              //   },
              // updatedAt: {
              //   stringValue: firebase.firestore.FieldValue.serverTimestamp(),
              // }
            },
          },
          {
            // headers: {
            //   Authorization: `Bearer ${this.idToken}`,
            // },
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((eror) => {
          console.log(error);
        });
      this.name = "";
      this.ruby = "";
      this.nickname = "";
      this.birthday = "";
      this.address = "";
      this.experienceYes = "";
      this.$router.push("/");
      // console.log(checkedLicense);
    },
  },
};
</script>
<style  scoped>
.passError {
  color: red;
}
body {
  /* background-size: cover; */
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
.main {
}
</style>