import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <Text style={styles.count}>{this.props.value}</Text>
    );
  }
}

const styles = StyleSheet.create({
    count: {
        fontSize: 50,
        padding: 40
    }
});