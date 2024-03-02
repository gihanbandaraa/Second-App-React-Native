import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>FancyCard</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 20,
        marginTop:8,
        marginHorizontal: 8,
        fontWeight: 'bold'
    }
})