<template>
  <div>
    <CRow>
      <CCol sm="6" md="4">
      <CCard class="weight">
        <CCardHeader>体重記録</CCardHeader>
        <CCardBody><CChartLineSimple pointed border-color="warning"/></CCardBody>
      </CCard>
      </CCol>
      <CCol>
        <p class="title">知識理解度、認識の確認</p>
        <li>知っていること</li>
        <li>アドバイスされたこと</li>
        <li>わからないこと</li>
        <CTextarea
          label="インタビュー"
          placeholder="聞いたことを入力"
          horizontal
          rows="9"
        />
        <CTextarea
          label="Textarea"
          placeholder="Content..."
          horizontal
          rows="9"
        />
        <CTextarea
          label="Textarea"
          placeholder="Content..."
          horizontal
          rows="9"
        />
      </CCol>
    </CRow>
  </div>
</template>

<script>
import * as Charts from '../charts/index'
export default {
  name: 'Charts',
  components: {
    ...Charts
  }
}
</script>

<style>
  .weight {
    position: fixed;
  }
  .title {
    font-size: 20px;
  }
</style>
