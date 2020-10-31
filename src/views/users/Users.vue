<template>
  <CRow>
    <CCol col="" xl="">
      <CCard>
        <CCardHeader> クライアント一覧 </CCardHeader>
        <CCardBody>
          <CDataTable
            hover
            striped
            :items="items"
            :fields="fields"
            :items-per-page="8"
            clickable-rows
            :active-page="activePage"
            @row-clicked="rowClicked"
            :pagination="{ doubleArrows: false, align: 'center' }"
            @page-change="pageChange"
          >
            <template #status="data">
              <td>
                <CBadge :color="getBadge(data.item.status)">
                  {{ data.item.status }}
                </CBadge>
              </td>
            </template>
          </CDataTable>
          <button @click="clientCreate">クライアント新規登録</button>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
// import { firestore } from "firebase";
import usersData from "./UsersData";
import firebase from "firebase";
// import 'firebase/firestore'

const db = firebase.firestore();

export default {
  name: "Users",
  data() {
    return {
      // items: usersData,
      items: [],
      userData: null,
      fields: [
        { key: "username", label: "名前", _classes: "font-weight-bold" },
        { key: "email", label: "email" },
        { key: "sex", label: "性別" },
        { key: "birthday", label: "誕生日" },
        { key: "address", label: "出身地" },
        { key: "id", label: "id" },
      ],
      activePage: 1,
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.commit("getUserData", user);
        db.collection("client")
          .doc(this.$store.state.a.userLogin.uid)
          .collection("client")
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              console.log(this.$store.state.a.userLogin);
              this.items.push({
                username: doc.data().name,
                email: doc.data().email,
                sex: doc.data().pickedSex,
                birthday: doc.data().birthday,
                address: doc.data().address,
                id: doc.id
              });
              // this.items.push({ email: doc.data().email });
              console.log(doc.id);
            });
          });
      }
    });
  },
  watch: {
    $route: {
      immediate: true,
      handler(route) {
        if (route.query && route.query.page) {
          this.activePage = Number(route.query.page);
        }
      },
    },
  },
  methods: {
    getBadge(status) {
      switch (status) {
        case "Active":
          return "success";
        case "Inactive":
          return "secondary";
        case "Pending":
          return "warning";
        case "Banned":
          return "danger";
        default:
          "primary";
      }
    },
    rowClicked(id) {
      // this.$router.push({ path: `users/${index + 1}` });
      this.$store.commit("getClientData", id);
      this.$router.push("/base/breadcrumbs");
    },
    pageChange(val) {
      this.$router.push({ query: { page: val } });
    },
    clientCreate() {
      this.$router.push("client-create");
    },
  },
};
</script>
