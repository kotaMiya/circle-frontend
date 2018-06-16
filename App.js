import React from 'react';
import { Provider } from 'react-redux';
import { AsyncStorage, UIManager } from 'react-native';
import { persistStore } from 'redux-persist';
import Expo, { AppLoading } from 'expo';
import EStyleSheet from 'react-native-extended-stylesheet';

import Root from './src/Root';

import Colors from './constants/Colors';
import { fontAssets } from './helpers';
import store from './src/redux/store';

EStyleSheet.build(Colors);

if (UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default class App extends React.Component {

  state = {
    fontLoaded: false,
    ready: false,
  };

  componentDidMount() {
    this._loadAssetAsync();

    persistStore(
      store,
      {
        storage: AsyncStorage,
        whitelist: [
          'user',
        ],
      },
      () => this.setState({ ready: true })
    );
  }

  async _loadAssetAsync() {
    await Promise.all(fontAssets);

    this.setState({ fontLoaded: true });
  }

  render() {
    if (!this.state.fontLoaded || !this.state.ready) {
      return <AppLoading />;
    }
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  };
};