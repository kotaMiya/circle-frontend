import React from 'react';
import Expo, { AppLoading } from 'expo';
import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from './constants/Colors';
import { HomeScreen } from './src/screens/';
// import { cachedFonts } from './helpers';

EStyleSheet.build(Colors);


export default class App extends React.Component {

  // state = {
  //   fontLoaded: false
  // };

  // componentDidMount() {
  //   this._loadAssetAsync();
  // }

  // async _loadAssetAsync() {
  //   const fontAssets = cachedFonts([
  //     {
  //       workSansRegular: require('./assets/fonts/WorkSans-Regular.ttf')
  //     },
  //     {
  //       workSansLight: require('./assets/fonts/WorkSans-Light.ttf')
  //     },
  //     {
  //       workSansSemiBold: require('./assets/fonts/WorkSans-SemiBold.ttf')
  //     },
  //     {
  //       workSansMedium: require('./assets/fonts/WorkSans-Medium.ttf')
  //     },
  //   ]);

  //   await Promise.all(fontAssets);

  //   this.setState({ fontLoaded: true });
  // }

  render() {
    // if (!this.state.fontLoaded) {
    //   return <AppLoading />;
    // }
    return (
      <HomeScreen />
    );
  };
};