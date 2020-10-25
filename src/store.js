import Vue from 'vue'
import Vuex from 'vuex'
import axios from "./axios-auth";
import router from './router';
import axiosRefresh from './axios-refresh';

Vue.use(Vuex)

const state = {
  sidebarShow: 'responsive',
  sidebarMinimize: false
}

const mutations = {
  toggleSidebarDesktop(state) {
    const sidebarOpened = [true, 'responsive'].includes(state.sidebarShow)
    state.sidebarShow = sidebarOpened ? false : 'responsive'
  },
  toggleSidebarMobile(state) {
    const sidebarClosed = [false, 'responsive'].includes(state.sidebarShow)
    state.sidebarShow = sidebarClosed ? true : 'responsive'
  },
  set(state, [variable, value]) {
    state[variable] = value
  }
}

const moduleA = {
  state: {
    idToken: null,
    userLogin: null,
    clientData: null
  },
  getters: {
    idToken: state => state.idToken
  },
  mutations: {
    updateIdToken(state, idToken) {
      state.idToken = idToken;
    },
    getUserData(state, user) {
      state.userLogin = user;
    },
    getClientData(state, client) {
      state.clientData = client;
    }
  },
  actions: {
    // autoLogin({ commit, dispatch }) {
      // const idToken = localStorage.getItem('idToken');
      // if (!idToken) return;
      // const now = new Date();
      // const expiryTimeMs = localStorage.getItem('expiryTimeMs');
      // const isExpired = now.getTime() >= expiryTimeMs;
      // const refreshToken = localStorage.getItem('refreshToken');
      // if (isExpired) {
      //   dispatch('refreshIdToken', refreshToken);
      // } else {
      //   const expiresInMs = expiryTimeMs - now.getTime();
      //   setTimeout(() => {
      //     dispatch('refreshIdToken', refreshToken);
      //   }, expiresInMs);
      //   commit('updateIdToken', idToken);
      // }
    // },
    login({ dispatch }, authData) {
      axios
        .post(
          "/accounts:signInWithPassword?key=AIzaSyCdkrusRo0EpOHoat_01-EgDTCR9QfYqww",
          {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true,
          }
        )
        .then((response) => {
          dispatch('setAuthData', {
            idToken: response.data.idToken,
            expiresIn: response.data.expiresIn,
            refreshToken: response.data.refreshToken,
          });
          router.push('/')
        });
    },
    logout({ commit }) {
      commit('updateIdToken', null);
      localStorage.removeItem('idToken');
      localStorage.removeItem('expiryTimeMs');
      localStorage.removeItem('refreshToken');
      router.push('pages/login');
    },
    refreshIdToken({ dispatch }, refreshToken) {
      axiosRefresh.post('/token?key=AIzaSyCdkrusRo0EpOHoat_01-EgDTCR9QfYqww',
        {
          grant_type: 'refresh_token',
          refresh_token: refreshToken
        }
      ).then(response => {
        dispatch('setAuthData', {
          idToken: response.data.id_token,
          expiresIn: response.data.expires_in,
          refreshToken: response.data.refresh_token
        });
      });
    },
    register({ dispatch }, authData) {
      axios
        .post(
          "/accounts:signUp?key=AIzaSyCdkrusRo0EpOHoat_01-EgDTCR9QfYqww",
          {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true,
          }
        )
        .then((response) => {
          dispatch('setAuthData', {
            idToken: response.data.idToken,
            expiresIn: response.data.expiresIn,
            refreshToken: response.data.refreshToken
          });
          router.push('/');
        });
    },
    setAuthData({ commit, dispatch }, authData) {
      const now = new Date();
      const expiryTimeMs = now.getTime() + authData.expiresIn * 1000;
      commit('updateIdToken', authData.idToken);
      localStorage.setItem('idToken', authData.idToken);
      localStorage.setItem('expiryTimeMs', expiryTimeMs);
      localStorage.setItem('refreshToken', authData.refreshToken);
      setTimeout(() => {
        dispatch('refreshIdToken', authData.refreshToken);
      }, authData.expiresIn * 1000);
    },
    nutritionist_register({ dispatch }, authData) {
      axios
        .post(
          "/accounts:signUp?key=AIzaSyCdkrusRo0EpOHoat_01-EgDTCR9QfYqww",
          {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true,
          }
        )
        .then((response) => {
          dispatch('setAuthData', {
            idToken: response.data.idToken,
            expiresIn: response.data.expiresIn,
            refreshToken: response.data.refreshToken
          });
          router.push('/');
        });
    },
  }
}

export default new Vuex.Store({
  state,
  mutations,
  modules: {
    a: moduleA
  }
})