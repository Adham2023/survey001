// this will mixins for TesView file
export const getQuestionMixin =  {
    methods: {
        getQuestionToSkip(i) {
            console.log("Getting Skipped Question")
            console.log("skipped to: ", this.$store.state.newProject.Questions);
           return this.$store.state.newProject.Questions.find( q => q.Number == i); 
        }
    }
}