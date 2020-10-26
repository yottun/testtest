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
            :items-per-page="10"
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

export default {
  name: "Users",
  data() {
    return {
      // items: usersData,
      items: [
        {
          // username: null,
          // registered: "2012/01/01",
          // role: "Member",
          // status: "Active",
        },
      ],
      userData: "",
      // users: null,
      fields: [
        { key: "username", label: "名前", _classes: "font-weight-bold" },
        { key: "email", label: "email" },
        { key: "sex", label: "性別" },
        { key: "birthday", label: "誕生日" },
        { key: "address", label: "出身地" },
      ],
      activePage: 1,
    };
  },
  created() {
    var db = firebase.firestore();

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.commit("getUserData", user);
        // db.collection("nutritionist")
        //   .get()
        //   .then((querySnapshot) => {
        //     querySnapshot.forEach((doc) => {
        //       this.items.push({ username: doc.data().name});
        //       console.log(doc.data().name);
        //     });
        //   });
        db.collection("client")
          .doc(this.$store.state.a.userLogin.uid)
          .collection("client")
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.items.push({
                username: doc.data().name,
                email: doc.data().email,
                sex: doc.data().pickedSex,
                birthday: doc.data().birthday,
                address: doc.data().address,
              });
              // this.items.push({ email: doc.data().email });
              console.log(doc.data().name);
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
    rowClicked(item, index) {
      // this.$router.push({ path: `users/${index + 1}` });
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
