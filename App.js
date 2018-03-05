import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from './constants/Colors';
import { HomeScreen } from './src/screens/';

EStyleSheet.build(Colors);


export default class App extends React.Component {

  render() {
    return <HomeScreen />;
  };

  // static defaultProps = {
  //   fetchCircles
  // }

  // state = {
  //   loading: false,
  //   circles: []
  // }

  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const data = await this.props.fetchCircles();
  //   setTimeout(() => this.setState({ loading: false, circles: data.circles}), 2000);
  // }

  // render() {
  //   if (this.state.loading) {
  //     return (
  //       <View style={styles.container}>
  //         <ActivityIndicator size="large" />
  //       </View>
  //     );
  //   }
  //   return (
  //     <View style={styles.container}>
  //       <Text>Circles</Text>
  //       {this.state.circles.map((circle, i) => (
  //         <Text key={i}>{circle.title}</Text>
  //       ))}
  //     </View>
  //   );
  // }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
