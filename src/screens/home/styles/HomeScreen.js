import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '$whiteColor'
    },
    topContainer: {
        flex: 0.8,
        justifyContent: 'center',
        marginLeft: '3%',
    },
    bottomContainer: {
        flex: 1.2,
    },
    addCircle: {
        marginRight: 15
    }
});

export default styles;