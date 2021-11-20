import axios from "@axios";

export default {
    namespaced: true,
    state: {

    },

    getters: {},

    mutations: {



    },

    actions: {

        addContact(ctx, contact) {
            return new Promise((resolve, reject) => {
                axios
                    .post('api/contact', contact)
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },
    },
};
