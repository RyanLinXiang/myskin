// import React, { Component } from 'react';
// import {
//   Text,
//   StyleSheet,
//   View,
//   FlatList,
//   TextInput,
//   ActivityIndicator,
//   Alert,
// } from 'react-native';

// import ConnectApi from '../../helpers/api';

// export default class Search extends Component {
//   constructor(props) {
//     super(props);
//     //setting default state
//     this.state = { isLoading: true, text: '' };
//     this.arrayholder = [];
//   }

  
//     // fetch('https://jsonplaceholder.typicode.com/posts')
//     //   .then(response => response.json())
//     //   .then(responseJson => {
//     //     this.setState(
//     //       {
//     //         isLoading: false,
//     //         dataSource: responseJson
//     //       },
//     //       function() {
//     //         this.arrayholder = responseJson;
//     //       }
//     //     );
//     //   })
//     //   .catch(error => {
//     //     console.error(error);
//     //   });
  
//   SearchFilterFunction(text) {
//     //passing the inserted text in textinput
//     const newData = this.arrayholder.filter(function(item) {
//       //applying filter for the inserted text in search bar
//       const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
//       const textData = text.toUpperCase();
//       return itemData.indexOf(textData) > -1;
//     });
//     this.setState({
//       //setting the filtered newData on datasource
//       //After setting the data it will automatically re-render the view
//       dataSource: newData,
//       text: text,
//     });
//   }
//   ListViewItemSeparator = () => {
//     //Item sparator view
//     return (
//       <View
//         style={{
//           height: 0.3,
//           width: '90%',
//           backgroundColor: '#080808',
//         }}
//       />
//     );
//   };
//   render() {
//     if (this.state.isLoading) {
//       //Loading View while data is loading
//       return (
//         <View style={{ flex: 1, paddingTop: 20 }}>
//           <ActivityIndicator />
//         </View>
//       );
//     }
//     return (
//       //ListView to show with textinput used as search bar
//       <View style={styles.viewStyle}>
//         <TextInput
//           style={styles.textInputStyle}
//           onChangeText={text => this.SearchFilterFunction(text)}
//           value={this.state.text}
//           underlineColorAndroid="transparent"
//           placeholder="Search Here"
//         />
//         <FlatList
//           data={this.state.dataSource}
//           ItemSeparatorComponent={this.ListViewItemSeparator}
//           renderItem={({ item }) => (
//             <Text style={styles.textStyle}>{item.title}</Text>
//           )}
//           enableEmptySections={true}
//           style={{ marginTop: 10 }}
//           keyExtractor={(item, index) => index.toString()}
//         />
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   viewStyle: {
//     justifyContent: 'center',
//     flex: 1,
//     marginTop: 40,
//     padding: 16,
//   },
//   textStyle: {
//     padding: 10,
//   },
//   textInputStyle: {
//     height: 40,
//     borderWidth: 1,
//     paddingLeft: 10,
//     borderColor: '#009688',
//     backgroundColor: '#FFFFFF',
//   },
// });