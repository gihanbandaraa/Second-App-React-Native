import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
    return (
        <View>
            <Text style={styles.headingText}>Treading Places</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image
                    source={{
                        uri: 'https://us.lakpura.com/cdn/shop/files/sigiriya.jpg?v=1657769923&width=3840'
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Sigiriya Rock</Text>
                    <Text style={styles.cardLable}>Dambulla,Matale</Text>
                    <Text style={styles.cardDescription}>Sigiriya or Sinhagiri
                        is an ancient rock fortress located in the northern
                        Matale District near the town of
                        Dambulla in the Central Province, Sri Lanka.</Text>
                     <View style={styles.test}> 
                    <Text style={styles.cardFooter}>12min Away</Text>
                    </View>  
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 20,
        marginTop: 8,
        marginHorizontal: 8,
        fontWeight: 'bold'
    },
    card: {
        width: 350,
        height: 360,
        marginHorizontal: 26,
        marginVertical: 16,
        borderRadius: 8
    },
    cardElevated: {
        backgroundColor:'#d9d9d9',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        }
    },
    cardImage: {
        height: 180,
        marginBottom:10
    },
    cardBody: {
        flex:1,
        flexGrow:1,
        paddingHorizontal:20
    },
    cardTitle: {
        fontSize:22,
        fontWeight:'bold',
        marginBottom:6
    },
    cardLable: {
        fontSize:14,
        fontWeight:'400'
    },
    cardDescription: {
        fontSize:12,
        marginVertical:8,
        color:'black'
    },
    test:{
        flex:1,
        alignItems:'flex-end',
        justifyContent:'center'
    },
    cardFooter: {
        fontSize:14,
        fontWeight:'bold',
     
    }
})