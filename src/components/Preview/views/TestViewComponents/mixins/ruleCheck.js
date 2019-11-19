// this will mixins for TesView file
export const ruleCheck =  {
    methods: {
        ruleOk(logic) {
            let currentAnswer = this.$store.state.TestView.currentAnswer;
            console.log('checkRule')
            if( typeof currentAnswer !== 'object') {
                currentAnswer = currentAnswer.split('');
            }
            let operator;
            let ans;
            for(let i = 0 ; i < logic.length; i++) {
                let l =  logic[0];
                operator = l.Rule[0];
                ans = l.Rule.slice(1, l.Rule.length);
                ans = ans.split(',');
           
                switch(operator) {
                    case '&':
                        console.log("in ccase &");
                        for(let j = 0; j < ans.length; j++) {
                            console.log("includes: ", currentAnswer.includes(ans[i]), ans[i])
                            if(!currentAnswer.includes(ans[i])) {
                                return {
                                    result: -1,
                                    skipTo: null
                                }
                            }
                        }
                        return  {
                            result: 1,
                            skipTo: l.Question
                        }
                    case '|':
                        console.log("in ccase |");
                        for(let j = 0; j < ans.length; j++) {
                            console.log("includes: ", currentAnswer.includes(ans[i]), ans[i])
                            if(currentAnswer.includes(ans[i])) {
                                return {
                                    result: 1,
                                    skipTo: l.Question
                                }
                             }
                        }
                        return  {
                            result: -1,
                            skipTo: null
                        }
                    // case '=':
                    //     console.log("in ccase =");
                    //     for(let j = 0; j < ans.length; j++) {
                    //         console.log("includes: ", currentAnswer.includes(ans[i]), ans[i])
                    //         if(currentAnswer.includes(ans[i])) {
                    //             return {
                    //                 result: 1,
                    //                 skipTo: l.Question
                    //             }
                    //          }
                    //     }
                    //     return  {
                    //         result: -1,
                    //         skipTo: null
                    //     }
                }

            }
        }
    }
}