import Constant from '../constant';

export default {
    [Constant.ADD_TODO]: (store, payload) => {
        console.log('### addTodo !!');
        store.commit(Constant.ADD_TODO, payload);
    },
    [Constant.DELETE_TODO]: (store, payload) => {
        console.log('### deleteTodo !!');
        store.commit(Constant.DELETE_TODO, payload);
    },
    [Constant.DONE_TOGGLE]: (store, payload) => {
        console.log('### doneToggle');
        store.commit(Constant.DONE_TOGGLE, payload);
    }
}