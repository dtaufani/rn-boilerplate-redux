import constants from "../constants/todo";

export default {
    set(todos) {
        return {
            todos,
            type: constants.set
        };
    },

    add(text) {
        return {
            text,
            type: constants.add
        };
    },

    delete(id) {
        return {
            id,
            type: constants.delete
        };
    },

    complete(id) {
        return {
            id,
            type: constants.complete
        };
    },

    loading() {
        return {
            type: constants.loading
        };
    }
};
