// import React from 'react';
// import { Text, View, StyleSheet } from 'react-native';
// import { AppLoading } from 'expo';
// import * as Font from 'expo-font';
// import Text from './CustomText';

// let customFonts = {
//   'Roboto-Light': require('../assets/fonts/Roboto-Light.ttf'),
//   'Roboto-Italic': require('../assets/fonts/Roboto-Italic.ttf'),
//   'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
//   'Roboto-BoldItalic': require('../assets/fonts/Roboto-BoldItalic.ttf')
// };

// export default class App extends React.Component {
//   state = {
//     fontsLoaded: false,
//   };

//   async _loadFontsAsync() {
//     await Font.loadAsync(customFonts);
//     this.setState({ fontsLoaded: true });
//   }

//   componentDidMount() {
//     this._loadFontsAsync();
//   }

//   render() {
//     if (this.state.fontsLoaded) {
//       return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//           <Text type={bold}>Platform Default</Text>
//           <Text style={{ fontFamily: 'Roboto' }}>Roboto</Text>
//         </View>
//       );
//     } else {
//       return <AppLoading />;
//     }
//   }
// }