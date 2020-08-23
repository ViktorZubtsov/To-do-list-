import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
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
    getters: {
        getcurModal: state => {
            return state.curModal;
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
        }
    }
});
