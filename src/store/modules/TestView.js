const state = {
    givenAnswers: [],
}

const getters = {

}

const mutations = {
    SET_ANSWER(state, answer) {
        state.givenAnswers.push({
            question: answer.question, 
            answers: answer.answers
        });
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