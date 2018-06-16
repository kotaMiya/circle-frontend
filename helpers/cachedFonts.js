import { Font } from 'expo'

const cachedFonts = fonts => 
    fonts.map(font => Font.loadAsync(font));

export const fontAssets = cachedFonts([
    {
        workSansRegular: require('../assets/fonts/WorkSans-Regular.ttf')
    },
    {
        workSansLight: require('../assets/fonts/WorkSans-Light.ttf')
    },
    {
        workSansSemiBold: require('../assets/fonts/WorkSans-SemiBold.ttf')
    },
    {
        workSansMedium: require('../assets/fonts/WorkSans-Medium.ttf')
    },
    {
        poiretOneRegular: require('../assets/fonts/PoiretOne-Regular.ttf')
    },
    {
        questrialRegular: require('../assets/fonts/Questrial-Regular.ttf')
    }
]);