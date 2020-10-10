<template>
  <div>
    <CCard>
      <CCardHeader>
        <CIcon name="cil-justify-center"/><strong>USER検索</strong>
      </CCardHeader>
      <CCardBody>
        <CNavbar light color="light">
          <CForm inline>
            <CInput
              class="mr-sm-2"
              placeholder="Search"
              size="sm"
            />
            <CButton color="outline-success" class="my-2 my-sm-0" type="submit">Search</CButton>
          </CForm>
        </CNavbar>
      </CCardBody>
    </CCard>
    <Users></Users>
  </div>
</template>

<script>

import Users from '../views/users/Users'

export default {
  name: 'MyPage',
  components: {
    Users
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
