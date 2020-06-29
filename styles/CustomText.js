// import React, { Component } from 'react';
// import {Text, StyleSheet} from 'react-native';

// export default class CustomText extends Component {

//     setFontType = () => {
//         switch (type){
//             case 'italic':
//                 return 'Roboto-Italic';
//             case 'boldItalic':
//                 return 'Roboto-BoldItalic';
//             case 'bold':
//                 return 'Roboto-Bold';
//             default:
//                 return 'Roboto-Light';        
//         }
//     };



//     render() {
//         const font = this.setFontType(this.props.type ? this.props.type:'normal');
//         const style = [{fontFamily: font}, this.props.style || {}];
//         const allProps = Object.assign({}, this.props, {style:style})
//         return (
//                 <Text {...allProps}>{this.props.children}</Text>
//         )
//     }
// }

// const styles = StyleSheet.create ({
//     container: {
//         flex:1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     }
// });
