const state = {
    givenAnswers: [],
}

const getters = {

}

const mutations = {
    SET_ANSWER(state, answer) {
        state.givenAnswers.push(answer);
    }
}

const actions = {
    SET_ANSWER(context, answer) {
        context.commit('SET_ANSWER', answer);
    }
}

export const TestView = {
    state,
    getters,
    mutations,
    actions
}