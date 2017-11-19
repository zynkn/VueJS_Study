import Vue from 'vue';
import Vuex from 'vuex';
import Constant from '../constant';
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        todolist: [
            { todo: '영화보기', done: false },
            { todo: '주말 산책', done: false },
            { todo: 'ES6 학습', done: false },
            { todo: '잠실 야구장', done: true }
        ]
    },
    mutations: {
        [Constant.ADD_TODO]: (state, payload) => {
            if (payload.todo !== '') {
                state.todolist.push({ todo: payload.todo, done: false });
            }
        },
        [Constant.DONE_TOGGLE]: (state, payload) => {
            state.todolist[payload.index].done = !state.todolist[payload.index].done
        },
        [Constant.DELETE_TODO]: (state, payload) => {
            state.todolist.splice(payload.index, 1);
        }
    },
    actions: {
        [Constant.ADD_TODO]: (store, payload) => {
            console.log('### addTodo!!!');
            store.commit(Constant.ADD_TODO, payload);
        },
        [Constant.DELETE_TODO]: (store, payload) => {
            console.log('### deleteTodo!!!');
            store.commit(Constant.DELETE_TODO, payload);
        },
        [Constant.DONE_TOGGLE]: (store, payload) => {
            console.log('### doneToggle!!!');
            store.commit(Constant.DONE_TOGGLE, payload);
        }
    }
});

export default store;