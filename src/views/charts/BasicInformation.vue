<template>
  <div>
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>体重記録</CCardHeader>
          <CCardBody
            ><CChartLineSimple pointed border-color="warning"
          /></CCardBody>
        </CCard>
      </CCol>
    </CRow>
    <CRow>
      <CCol md="">
        <CCard>
          <CCardHeader>
            <strong>食生活状況確認</strong>
          </CCardHeader>

          <CCardBody>
            <CForm>
              <p><strong>食事時間</strong></p>
              <CSelect
                label="朝"
                horizontal
                :options="times"
                id="eatMoning"
                v-model="eatMorning"
              />
              <CSelect
                label="昼"
                horizontal
                :options="times"
                id="eatLunch"
                v-model="eatLunch"
              />
              <CSelect
                label="夕"
                horizontal
                :options="times"
                id="eatDinner"
                v-model="eatDinner"
              />
              <hr />

              <p><strong>間食</strong></p>

              <CSelect label="午前" horizontal :options="times" />
              <CSelect label="午後" horizontal :options="times" />
              <CSelect label="夜食（夕食後）" horizontal :options="times" />
              <hr />

              <p><strong>食事内容</strong></p>

              <CTextarea
                label="朝食"
                placeholder="Content..."
                horizontal
                rows="3"
              />
              <CTextarea
                label="昼食"
                placeholder="Content..."
                horizontal
                rows="3"
              />
              <CTextarea
                label="夕食"
                placeholder="Content..."
                horizontal
                rows="3"
              />
              <CTextarea
                label="間食"
                placeholder="Content..."
                horizontal
                rows="3"
              />
              <CTextarea
                label="外食"
                placeholder="Content..."
                horizontal
                rows="3"
              />
              <hr />

              <p><strong>嗜好品</strong></p>

              <template v-for="(name, key) in checkboxNames">
                <CRow form class="form-group" :key="name">
                  <CCol tag="label" sm="3" class="col-form-label"> 種類 </CCol>
                  <CCol sm="9" :class="key % 2 === 1 ? 'form-inline' : ''">
                    <CInputCheckbox
                      v-for="(option, optionIndex) in options"
                      :key="key + option"
                      :label="option"
                      :name="`Option 1${key}`"
                      :checked="optionIndex === key"
                    />
                  </CCol>
                </CRow>
              </template>
              <CTextarea
                label="嗜好品の回数、種類の確認"
                placeholder="Content..."
                horizontal
                rows="3"
              />

              <hr />
              <p><strong>その他</strong></p>

              <template v-for="(name, key) in checkboxNames2">
                <CRow form class="form-group" :key="name">
                  <CCol tag="label" sm="3" class="col-form-label">
                    主調理者
                  </CCol>
                  <CCol sm="9" :class="key % 2 === 1 ? 'form-inline' : ''">
                    <CInputCheckbox
                      v-for="(option, optionIndex) in options2"
                      :key="key + option"
                      :label="option"
                      :name="`Option 1${key}`"
                      :checked="optionIndex === key"
                    />
                  </CCol>
                </CRow>
              </template>
              <template v-for="(name, key) in radioNames">
                <CRow form class="form-group" :key="name">
                  <CCol sm="3"> アレルギー </CCol>
                  <CCol>
                    <CInputRadioGroup
                      class="col-sm-9"
                      :options="options3"
                      :checked="`Option ${key}`"
                    />
                  </CCol>
                  <CCol sm="6">
                    <CTextarea placeholder="Content..." horizontal rows="2" />
                  </CCol>
                </CRow>
              </template>
              <template v-for="(name, key) in radioNames2">
                <CRow form class="form-group" :key="name">
                  <CCol sm="3"> 好き嫌い </CCol>
                  <CCol>
                    <CInputRadioGroup
                      class="col-sm-9"
                      :options="options3"
                      :checked="`Option ${key}`"
                    />
                  </CCol>
                  <CCol sm="6">
                    <CTextarea placeholder="Content..." horizontal rows="2" />
                  </CCol>
                </CRow>
              </template>
              <template v-for="(name, key) in radioNames3">
                <CRow form class="form-group" :key="name">
                  <CCol sm="3"> サプリメント </CCol>
                  <CCol>
                    <CInputRadioGroup
                      class="col-sm-9"
                      :options="options3"
                      :checked="`Option ${key}`"
                    />
                  </CCol>
                  <CCol sm="6">
                    <CTextarea placeholder="Content..." horizontal rows="2" />
                  </CCol>
                </CRow>
              </template>
              <template v-for="(name, key) in radioNames4">
                <CRow form class="form-group" :key="name">
                  <CCol sm="3"> 服薬 </CCol>
                  <CCol>
                    <CInputRadioGroup
                      class="col-sm-9"
                      :options="options3"
                      :checked="`Option ${key}`"
                    />
                  </CCol>
                  <CCol sm="6">
                    <CTextarea placeholder="Content..." horizontal rows="2" />
                  </CCol>
                </CRow>
              </template>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>
            <strong>食生活状況確認</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CSelect label="起床時間" horizontal :options="times" />
              <CSelect label="就寝時間" horizontal :options="times" />
              <template v-for="(name, key) in radioNames5">
                <CRow form class="form-group" :key="name">
                  <CCol sm="3"> 運動習慣 </CCol>
                  <CCol>
                    <CInputRadioGroup
                      class="col-sm-9"
                      :options="options3"
                      :checked="`Option ${key}`"
                    />
                  </CCol>
                  <CCol sm="6">
                    <CTextarea placeholder="Content..." horizontal rows="2" />
                  </CCol>
                </CRow>
              </template>
              <template v-for="(name, key) in radioNames6">
                <CRow form class="form-group" :key="name">
                  <CCol sm="3"> 活動状況 </CCol>
                  <CCol>
                    <CInputRadioGroup
                      class="col-sm-12"
                      :options="options4"
                      :checked="`Option ${key}`"
                    />
                  </CCol>
                </CRow>
              </template>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>
            <strong>目標別</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <p><strong>ダイエット</strong></p>
              <CTextarea
                label="ダイエット歴"
                placeholder="Content..."
                horizontal
                rows="3"
              />
              <CTextarea
                label="ダイエットのイメージ"
                placeholder="Content..."
                horizontal
                rows="3"
              />

              <hr />
              <p><strong>筋肉</strong></p>
              <template v-for="(name, key) in radioNames7">
                <CRow form class="form-group" :key="name">
                  <CCol sm="3"> トレーニングの有無 </CCol>
                  <CCol>
                    <CInputRadioGroup
                      class="col-sm-9"
                      :options="options3"
                      :checked="`Option ${key}`"
                    />
                  </CCol>
                </CRow>
              </template>
              <CTextarea
                label="トレーニングの内容・時間"
                placeholder="Content..."
                horizontal
                rows="3"
              />
              <CTextarea
                label="トレーニング前後の食事"
                placeholder="Content..."
                horizontal
                rows="3"
              />
              <CTextarea
                label="プロテイン、サプリメント"
                placeholder="Content..."
                horizontal
                rows="3"
              />
              <CTextarea
                label="運動歴"
                placeholder="Content..."
                horizontal
                rows="3"
              />
            </CForm>
          </CCardBody>
          <CCardFooter>
            <CButton type="submit" size="sm" color="primary" @click="createData"
              ><CIcon name="cil-check-circle" /> Submit</CButton
            >
            <CButton type="reset" size="sm" color="danger"
              ><CIcon name="cil-ban" /> Reset</CButton
            >
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
          <!-- <CCardFooter>
            <CButton type="submit" size="sm" color="primary" @click="createData"
              ><CIcon name="cil-check-circle" /> Submit</CButton
            >
            <CButton type="reset" size="sm" color="danger"
              ><CIcon name="cil-ban" /> Reset</CButton
            >
          </CCardFooter> -->
  </div>
</template>

<script>
import * as Charts from "./index.js";
import axios from "axios";
export default {
  name: "Charts",
  components: {
    ...Charts,
  },

  name: "BasicInformation",

  name: "Forms",
  data() {
    return {
      eatMorning: "",
      eatLunch: "",
      eatDinner: "",
      selected: [], // Must be an array reference!
      horizontal: { label: "col-3", input: "col-9" },
      times: [
        { label: "0:00〜1:00", value: "0:00〜1:00" },
        { label: "1:00〜2:00", value: "1:00〜2:00" },
        { label: "2:00〜3:00", value: "2:00〜3:00" },
        { label: "3:00〜4:00", value: "3:00〜4:00" },
        { label: "4:00〜5:00", value: "4:00〜5:00" },
        { label: "5:00〜6:00", value: "5:00〜6:00" },
        { label: "6:00〜7:00", value: "6:00〜7:00" },
        { label: "7:00〜8:00", value: "7:00〜8:00" },
        { label: "8:00〜9:00", value: "8:00〜9:00" },
        { label: "9:00〜10:00", value: "9:00〜10:00" },
        { label: "10:00〜11:00", value: "10:00〜11:00" },
        { label: "11:00〜12:00", value: "11:00〜12:00" },
        { label: "12:00〜13:00", value: "12:00〜13:00" },
        { label: "13:00〜14:00", value: "13:00〜14:00" },
        { label: "14:00〜15:00", value: "14:00〜15:00" },
        { label: "15:00〜16:00", value: "15:00〜16:00" },
        { label: "16:00〜17:00", value: "16:00〜17:00" },
        { label: "17:00〜18:00", value: "17:00〜18:00" },
        { label: "18:00〜19:00", value: "18:00〜19:00" },
        { label: "19:00〜20:00", value: "19:00〜20:00" },
        { label: "20:00〜21:00", value: "20:00〜21:00" },
        { label: "21:00〜22:00", value: "21:00〜22:00" },
        { label: "22:00〜23:00", value: "22:00〜23:00" },
        { label: "23:00〜0:00", value: "23:00〜0:00" },
      ],
      options: [
        "特に無し",
        "アルコール",
        "タバコ",
        "菓子類",
        "ジュース類",
        "コーヒー",
        "紅茶",
      ],
      options2: ["本人", "配偶者", "親", "子ども", "その他"],
      options3: ["あり", "なし"],
      options4: [
        "生活の大部分が座位で、静的な活動が中心",
        "座位中心の仕事だが、職場内での移動や立位での作業・接客等、あるいは通勤・買い物・家事、軽いスポーツ等のいずれかを含む場合",
        "移動や立位の多い仕事への従事者、あるいは、スポーツ等余暇における活発な運動習慣を持っている場合",
      ],
      // selectOptions: [
      //   'Option 1', 'Option 2', 'Option 3',
      //   {
      //     value: 'some value',
      //     label: 'Selected option'
      //   }
      // ],
      // selectedOption: 'some value',

      formCollapsed: true,
      checkboxNames: ["Inline Checkboxes"],
      checkboxNames2: ["Inline Checkboxes2"],
      radioNames: ["Radios"],
      radioNames2: ["Radios2"],
      radioNames3: ["Radios3"],
      radioNames4: ["Radios4"],
      radioNames5: ["Radios5"],
      radioNames6: ["Radios6"],
      radioNames7: ["Radios7"],
    };
  },
  methods: {
    // validator(val) {
    //   return val ? val.length >= 4 : false;
    // },
    createData() {
      axios
        .post(
          "/basicInformation",
          {
            fields: {
              eatMorning: {
                stringValue: this.eatMorning,
              },
              eatLunch: {
                stringValue: this.eatLunch,
              },
              eatDinner: {
                stringValue: this.eatDinner,
              },
            },
          },
          {
            headers: {
              Authorization: `Bearer ${this.idToken}`,
            },
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((eror) => {
          console.log(error);
        });
    },
  },
};
</script>
