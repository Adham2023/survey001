// this will mixins for TesView file
export const currentCompontMixin =  {
    methods: {
        currentComponent(i) {
            switch(i) {
                case 1:
                    return 'Multiple';
                    break;
                case 2:
                    return 'Single';
                    break;
                case 3: 
                    return 'Txt';
                    break;
                case 4: 
                    return 'Range';
                    break;
                case 5: 
                    return 'YesNo';
                    break;
                case 6: 
                    return 'Matrix';
                    break;
                case 7:
                    return 'Thanks';
                    break;
            }
        }
    }
}