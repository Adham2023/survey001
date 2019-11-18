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
        console.log('Mutation ', answers);
        state.Answers = answers;
    },
    OPERATOR(state, operator) {
        state.operator = operator;
    },
    SET_RULE(state, rule) {
        state.Rule = rule
    },
    SET_CONFIG_TO_QUESTION(state) {
        
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
        console.log('Actions ' , answers);
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
    },
    SET_CONFIG_TO_QUESTION({state, rootState}) {
        console.log("Qurrent: ", state.currentQuestion);
        let config = {
            Question: state.skipToQuestion,
            Rule: state.Rule
        };
        state.skipToQuestion = '';
        rootState.newProject.Questions[state.currentQuestion-1].config.push(config);
        rootState.newProject.Questions[state.currentQuestion-1].config.sort((a, b) => (a.Question > b.Question) ? 1: -1);
               
    }

}
export const Logic = {
    state,
    getters,
    mutations,
    actions
}