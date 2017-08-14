import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

const HEAD_SHOW_SUCCESS = 'HEAD_SHOW_SUCCESS';
const HEAD_SHOW_FAIL = 'HEAD_SHOW_FAIL';

const actions = {

    SHOW_HEAD_SUCC: ({commit}) => {
        commit(types.HEAD_SHOW_SUCCESS);
    },
    SHOW_HEAD_FAIL: ({commit}) => {
        commit(types.HEAD_SHOW_FAIL);
    }
};

const state = {
    hideShow: true
};

const mutations = {

    [HEAD_SHOW_SUCCESS](state) {
        state.hideShow = true;
    },
    [HEAD_SHOW_FAIL](state) {
        state.hideShow = false;
    }
};

const getters = {
    hideShow(state) {
        return state.hideShow;
    }
};

export default new Vuex.Store({
    modules: {
        mutations: {
            state,
            mutations,
            getters
        }
    },
    actions
});
