<template>
  <CRow class="main">
    <div>
      <CCard>aiueo</CCard>
    </div>
    <div class="main-conteiner">
      <div class="split-box left-box">
        <div class="inner-split-box inner-left-box1">
          <CCol class="">
            <ClientInformation></ClientInformation>
            <DietaryInformation></DietaryInformation>
          </CCol>
        </div>
        <!-- <div class="inner-split-box inner-right-box1">
          <CCol class="font-size">
            ステップ1：<br />コーチング<br />
            <hr />
            ステップ2：<br />ティーチング<br />
            <hr />
            ステップ3：<br />コーチング<br />(目標の確認)<br />
            <hr />
            ステップ4：<br />確認<br />
            <hr />
            ステップ5：<br />Q＆A<br />
            <hr />
            ステップ6：<br />アドバイス<br />
            <hr />
            ステップ7：<br />力づけ<br />
          </CCol>
        </div> -->
      </div>
      <div class="split-box right-box">
        <div class="inner-split-box inner-left-box">
          <CCol>
            <CCard>
              <CTabs class="center" variant="pills">
                <CTab title="食生活状況確認" active>
                  <BasicInformation></BasicInformation>
                </CTab>
                <CTab title="コーチング" active>
                  <Coaching></Coaching>
                </CTab>
              </CTabs>
            </CCard>
          </CCol>
        </div>
        <div class="inner-split-box inner-right-box">
          <CCol>
            <CCard>
              <!-- <CTabs variant="pills">
              <CTab title="チャット" active> -->
              <Chat></Chat>
              <!-- </CTab>
            </CTabs> -->
            </CCard>
          </CCol>
        </div>
      </div>
    </div>
  </CRow>
</template>

<script>
import * as Charts from "../charts/index";
import BasicInformation from "../charts/BasicInformation";
import Coaching from "../charts/Coaching";
import DietaryInformation from "./DietaryInformation";
import ClientInformation from "./ClientInformation";
import Chat from "../base/Chat";
import usersData from "../users/UsersData";

export default {
  name: "Charts",
  components: {
    ...Charts,
    BasicInformation,
    ClientInformation,
    DietaryInformation,
    Chat,
    Coaching,
  },
  data() {
    return {};
  },
  created() {},
};
</script>

<style>
.main {
  display: flex;
  flex-direction: column;
}

.main-conteiner {
  display: flex;
}

.split-box {
  display: flex;
  position: relative;
  /* width: 50%; */
  /* height: 75vh; */
}
.menu {
  /* position: fixed; */
  width: 20%;
}
.menu2 {
  width: 80%;
}
.left-box {
  left: 0;
  overflow-y: scroll;
  height: 80vh;
  width: 30%;
}

.right-box {
  right: 0;
  overflow-y: scroll;
  height: 80vh;
  width: 70%;
}
.inner-split-box {
  display: flex;
  position: relative;
  /* width: 50%; */
  /* height: 75vh; */
}
.menu {
  position: fixed;
}
.inner-left-box {
  left: 0;
  overflow-y: scroll;
  height: 80vh;
  width: 60%;
}

.inner-right-box {
  right: 0;
  overflow-y: scroll;
  height: 80vh;
  width: 40%;
}
.inner-left-box1 {
  left: 0;
  overflow-y: scroll;
  height: 80vh;
  width: 100%;
}

.inner-right-box1 {
  right: 0;
  overflow-y: scroll;
  height: 80vh;
  width: 30%;
}
.font-size {
  margin-top: 40px;
}
.nav-pills {
  background-color: #ff9080;
  padding: 0.3rem 1.25rem;
}
.nav-pills .nav-link.active {
  color: #3c4b64;
  background-color: mistyrose;
  font-weight: bold;
}
a {
  color: #3c4b64;
}
.nav-link {
  margin-left: 10px;
}
</style>
