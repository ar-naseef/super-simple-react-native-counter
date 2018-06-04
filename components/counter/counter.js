import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 10
        }
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement() {
        this.setState({
            count: this.state.count - 1
        })
    }

    reset() {
        this.setState({
            count: 0
        })
    }

    render() {
        return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button1}
                onPress={this.increment.bind(this)}
                title="increnent +"
                color="#333"
            ><Text style={styles.butText}>increment +</Text></TouchableOpacity>
            <Text style={styles.count}>{this.state.count}</Text>
            <TouchableOpacity
                style={styles.button2}
                onPress={this.decrement.bind(this)}
                color="#333"
            ><Text style={styles.butText}>decrement -</Text></TouchableOpacity>
            <TouchableOpacity
                style={styles.reset}
                onPress={this.reset.bind(this)}
                color="#333"
            ><Text style={styles.butText}>reset</Text></TouchableOpacity>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8f8f8f',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button1: {
        padding: 10,
        backgroundColor: '#555',
	    borderRadius:5
    },
    button2: {
        padding: 10,
        backgroundColor: '#555',
	    borderRadius:5
    },
    count: {
        fontSize: 50,
        padding: 40
    },
    reset: {
        marginTop: 20,
        padding: 20,
        backgroundColor: '#555',
	    borderRadius:5
    },
    butText: {
        textAlign: 'center'
    }
});
