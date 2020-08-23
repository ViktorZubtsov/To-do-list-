import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'



Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      error: null,
      curModal: {
          title: "empty",
          isChoice: false,
          submitText: "empty",
          cancelText: "empty",
          contentText: "empty",
          submitFunc (){},
          isVisible: false
      }
    },

    mutations:{
      setcurModal (state, payload) {
          state.curModal = {
              title: "empty",
              isChoice: false,
              submitText: "empty",
              cancelText: "empty",
              contentText: "empty",
              submitFunc (){},
              isVisible: true
          };
          state.curModal = Object.assign(state.curModal, payload);
      },
      setError(state, error) {
        state.error = error
      },
      clearError(state) {
        state.error = null
      }
    },
    getters: {
        getcurModal: state => {
            return state.curModal;
        },
        error: s => s.error
    },
    actions: {

    },
    modules: {
      auth
    }
});
