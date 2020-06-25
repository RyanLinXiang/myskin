import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

export default class UVTableData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['UV-Index', 'Intensität', 'Sonnenbrand'],
      tableData: [
        ['1-2', 'Sehr gering', 'Nein'],
        ['3-4', 'Schwach', 'Kaum'],
        ['5-6', 'Mäßig', 'Leicht'],
        ['7-8', 'Stark', 'Schnell'],
        ['9-11', 'Sehr stark', 'Sehr schnell'],
      ]
    }
  }
 
  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});