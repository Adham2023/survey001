const state = {
    question_counter: 1,
    Project:[],
    Title: '',
    Type: '',
    Questions: [],
}
const getters = {
    currentQuestion(state) {
        return state.question_counter;
    },
    getQuestion: state =>  number =>  {
       
        let Questions = state.Questions;
        let len = Questions.length;
        for(let i = 0 ; i < len; i++) {
            if(Questions[i].Number == number ) {
                console.log(Questions[i]);
                 return Questions[i];
            }
        }
        return null;
    }
}
const mutations = {
    DECREMENT_QUESTION_COUNTER(state) {
        state.question_counter--;
    },
    INCREMENT_QUESTION_COUNTER(state) {
        state.question_counter++;
    },
    SET_TITLE(state, title) {
        state.Title = title;
    },
    SET_TYPE(state, type) {
        state.Type = type;
    },
    ADD_QUESTION(state, question) {
        state.Questions.push(question);
    },
    CONVERT_TOJSON(state) {
        console.log(JSON.stringify(state.Project))
    },
    CONSTRUCT_NEW_PROJECT(state) {
        state.Project.push({
            Title: state.Title,
            Type: state.Type,
            Questions: state.Questions
        })
    }
}
const actions = {
    DECREMENT_QUESTION_COUNTER(context) {
        context.commit('DECREMENT_QUESTION_COUNTER');
    },
    INCREMENT_QUESTION_COUNTER(context) {
        context.commit('INCREMENT_QUESTION_COUNTER');
    },
    SET_TITLE(context, title) {
        context.commit('SET_TITLE', title);
    },
    SET_TYPE(context, type) {
        context.commit('SET_TYPE', type);
    },
    SET_NEW_PROJECT(context, project) {
        context.commit('SET_NEW_PROJECT', project);
    },
    ADD_QUESTION(context, question) {
        context.commit('ADD_QUESTION', question);
    },
    CONVERT_TOJSON(context) {
        context.commit('CONVERT_TOJSON')
    },
    CONSTRUCT_NEW_PROJECT(context) {
        context.commit('CONSTRUCT_NEW_PROJECT')
    }
}
export const newProject = {
    state,
    getters,
    mutations,
    actions
}