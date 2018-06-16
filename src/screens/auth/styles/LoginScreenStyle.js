import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    formWrapper: {
        flex: 0.5,
        width:  '90%',
    },
    buttonWrapper: {
        flex: 0.5,
        width:  '90%',
    },
    textOr: {
        fontFamily: 'questrialRegular',
        fontSize: 20,
    },
    footerWrapper: {
        flex: 0.1,
        flexDirection: 'row',
    },
    footerText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default styles;