import { Text, StyleSheet, View, ScrollView } from 'react-native'
import React, { Component } from 'react'

export default function ElevatedCard() {
    return (
      <View>
        <Text style={styles.headingText}>Elevated Card</Text>
        <ScrollView horizontal={true} style={styles.container}>
            <View style={[styles.card,styles.cardElevated]}>
                <Text>Tap</Text>
            </View>

            <View style={[styles.card,styles.cardElevated]}>
                <Text>Tap</Text>
            </View>
            <View style={[styles.card,styles.cardElevated]}>
                <Text>me</Text>
            </View>
            <View style={[styles.card,styles.cardElevated]}>
                <Text>and</Text>
            </View>
            <View style={[styles.card,styles.cardElevated]}>
                <Text>scroll</Text>
            </View>
            <View style={[styles.card,styles.cardElevated]}>
                <Text>for</Text>
            </View>
            <View style={[styles.card,styles.cardElevated]}>
                <Text>more...</Text>
            </View>
            <View style={[styles.card,styles.cardElevated]}>
                <Text>😊</Text>
            </View>
        </ScrollView>
      </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 20,
        marginTop:8,
        marginHorizontal: 8,
        fontWeight: 'bold'
    },
    container:{
        padding:10,
        
    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:100,
        margin:8
    },
    cardElevated:{
        backgroundColor:'lightblue',
        elevation:9,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:'red'
    }
})