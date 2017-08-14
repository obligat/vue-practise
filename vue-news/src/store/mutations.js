import {
    HEAD_SHOW_SUCCESS,
    HEAD_SHOW_FAIL
} from './type'

const state={
    hideShow:true
};

const mutations={
    /*头部*/
    [HEAD_SHOW_SUCCESS](state){
        state.hideShow=true;
    },
    [HEAD_SHOW_FAIL](state){
        state.hideShow=false;
        //console.log(state.headShow);
    }
};

const getters={
    hideShow(state){
        return state.hideShow;
    }
};

export default{
    state,
    mutations,
    getters
}