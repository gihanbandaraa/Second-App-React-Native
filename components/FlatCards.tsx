import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class FlatCards extends Component {
    render() {
        return (
            <View>
                <Text style={styles.headingText}>FlatCards</Text>
                <View style={styles.container}>
                    <View style={[styles.card, styles.cardOne]}>
                        <Text>Red</Text>
                    </View>
                    <View style={[styles.card, styles.cardTwo]}>
                        <Text>Blue</Text>
                    </View>
                    <View style={[styles.card, styles.cardThree]}>
                        <Text>Green</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 20,
        marginTop:8,
        marginHorizontal: 8,
        fontWeight: 'bold'
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 8

    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        margin: 8

    },
    cardOne: {
        backgroundColor: 'red'

    },
    cardTwo: {
        backgroundColor: 'blue'

    },
    cardThree: {
        backgroundColor: 'green'

    }
})