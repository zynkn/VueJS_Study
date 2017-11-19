import Vue from 'vue';
import Vuex from 'vuex';
import Constant from '../constant';
import SearchApi from '../api/SearchAPI';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        contacts: []
    },
    mutations: {
        [Constant.SEARCH_CONTACT]: (state, payload) => {
            state.contacts = payload.contacts;
        }
    },
    actions: {
        [Constant.SEARCH_CONTACT]: (store, payload) => {
            SearchApi.searchContact(payload.name)
                .then((response) => {
                    store.commit(Constant.SEARCH_CONTACT, { contacts: response.data })
                });
        }
    }
});

export default store;