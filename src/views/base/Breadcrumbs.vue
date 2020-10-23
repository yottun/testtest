<template>
  <CRow>
    <div class="split-box left-box">
        <CCol sm="8" md="2">
          <CCard>
            <div class="menu">
            ステップ1：<br />情報収集<br />
            <hr />
            ステップ2：<br />ティーチング<br />
            <hr />
            ステップ3：<br />目標の確認<br />
            <hr />
            ステップ4：<br />確認<br />
            <hr />
            ステップ5：<br />Q＆A<br />
            <hr />
            ステップ6：<br />アドバイス<br />
            <hr />
            ステップ7：<br />力づけ<br />
            </div>
          </CCard>
        </CCol>
        <CCol>
          <BasicInformation></BasicInformation>
        </CCol>
    </div>
    <div class="split-box right-box">
        <CCol>
          <BasicInformation></BasicInformation>
        </CCol>
    </div>
  </CRow>
</template>

<script>
import * as Charts from "../charts/index";
import BasicInformation from "../charts/BasicInformation";

export default {
  name: "Charts",
  components: {
    ...Charts,
    BasicInformation,
  },
};
</script>

<style>

.split-box {
  display: flex;
  position: relative;
  width: 50%;
  height: 75vh;
}
.menu {
  position: fixed;
}
.left-box {
  left: 0;
  overflow-y: scroll;
}

.right-box {
  right: 0;
  overflow-y: scroll;
}
</style>
