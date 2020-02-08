import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        wizardList: [],
        text: ""
    },
    getters: {
        filterWizards(state) {
            return state.wizardList.filter(wizard =>
                wizard.name.toLowerCase().includes(text.toLowerCase()))
        }
    },
    mutations: {
        setWizards(state, wizardList) {
            state.wizardList = wizardList;
        },
    },
    actions: {
        getWizards({ commit }) {
            fetch("http://hp-api.herokuapp.com/api/characters")
                .then(response => response.json())
                .then(wizardList => {
                    commit("setWizards", wizardList)
                    localStorage.setItem("wizards", JSON.stringify(wizardList));
                });
        }
    }
})