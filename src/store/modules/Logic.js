const state = {
    currentQuestion: '',
    Answers: [],
    Rule: '',
    skipToQuestion:'',
    operator: '',
    
}
const getters = {
    
}
const mutations = {
    CURRENT_QUESTION(state, question){
        state.currentQuestion = question;
    },
    SKIP_TO_QUESTION(state, question) {
        state.skipToQuestion = question;
    },
    ANSWERS(state, answers) {
        state.answers = answers;
    },
    OPERATOR(state, operator) {
        state.operator = operator;
    },
    SET_RULE(state, rule) {
        state.Rule = rule
    }
    
   
}
const actions = {
    CURRENT_QUESTION(context, question) {
        context.commit('CURRENT_QUESTION', question);
    },
    SKIP_TO_QUESTION(context, question) {
        context.commit('SKIP_TO_QUESTION', question);
    },
    ANSWERS(context, answers) {
        context.commit('ANSWERS', answers);
    },
    OPERATOR(context, operator) {
        context.commit('OPERATOR', operator);
    },
    MAKE_RULE({commit, state}) {
        let answers = state.Answers;
        let op = state.operator;
        let Rule = op + '' + answers;
        commit('SET_RULE', Rule);
    }

}
export const Logic = {
    state,
    getters,
    mutations,
    actions
}