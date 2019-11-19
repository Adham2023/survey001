const state = {
    currentAnswer: [],
    currentQuestion: []
}

const getters = {

}

const mutations = {
    SET_ANSWER(state, answer) {
       state.currentAnswer = answer;
    }
}

const actions = {
    SET_ANSWER(context, answer) {
        console.log("answer from child: ", answer);
       context.commit('SET_ANSWER', answer);
    }
}

export const TestView = {
    state,
    getters,
    mutations,
    actions
}