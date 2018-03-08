import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    root: {
        flex: 1,
    },
    titleContainer: {
        flex: 0.1,
        padding: '2.5%'
    },
    title: {
        color: '$whiteColor',
        fontSize: 25
    },
    contentContainer: {
        flex: 1,
    },
    circleCard: {
        height: 200,
        width: 175,
        marginRight: 5,
        marginLeft: 5,
        backgroundColor: '$orangeColor'
    },
    circleCardTopContainer: {
        flex: 1,
        position: 'relative',
    },
    circleCardTitle: {
        position: 'absolute',
        color: '$whiteColor',
        top: '5%',
        left: '5%',
    },
    circleCardBottomContainer: {
        flex: 0.4,
        backgroundColor: '$whiteColor',
        justifyContent: 'center',
        paddingRight: 5,
        paddingLeft: 5,
    },
    circleCardName: {
        fontSize: 15,
    },
    circleCardDate: {
        fontSize: 13,
    }
});

export default styles;