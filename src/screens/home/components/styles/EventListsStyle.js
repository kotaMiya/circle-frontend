import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    root: {
        flex: 1,
    },
    titleContainer: {
        flex: 0.1,
        marginTop: '10%',
        padding: '2.5%'
    },
    title: {
        color: '$blackRock',
        fontSize: 22,
        fontFamily: "questrialRegular"
    },
    contentContainer: {
        flex: 1,
    },
    circleCard: {
        height: 126,
        width: 126,
        marginRight: 5,
        marginLeft: 5,
        backgroundColor: '$orangeColor',
        borderRadius: 100
    },
    circleCardTopContainer: {
        flex: 1,
        position: 'relative',
    },
    circleCardTitle: {
        position: 'absolute',
        color: '$whiteColor',
        top: '15%',
        left: '20%',
        fontFamily: "questrialRegular",
  
    },
    circleCardBottomContainer: {
        flex: 0.4,
        backgroundColor: '#333333',
        opacity: 0.9,
        justifyContent: 'center',
        paddingRight: 5,
        paddingLeft: 5,
    },
    circleCardName: {
        fontSize: 15,
        color: '$solitude',
    },
    circleCardDate: {
        fontSize: 13,
        color: '$solitude',
    }
});

export default styles;