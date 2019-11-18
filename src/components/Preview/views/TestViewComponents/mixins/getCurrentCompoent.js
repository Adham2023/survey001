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
                    return 'Text';
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
            }
        }
    }
}