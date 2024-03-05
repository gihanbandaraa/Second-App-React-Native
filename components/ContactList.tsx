import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const Contacts = [
        {
            uid: '1',
            status: 'Online',
            name: 'John Doe',
            imageUrl: 'https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
            uid: '2',
            status: 'Offline',
            name: 'Jane Smith',
            imageUrl: 'https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
            uid: '3',
            status: 'Away',
            name: 'Michael',
            imageUrl: 'https://images.pexels.com/photos/977796/pexels-photo-977796.jpeg?auto=compress&cs=tinysrgb&w=800'
        }

    ];
    return (
        <View>
            <Text style={styles.headingText}>ContactList</Text>
            <ScrollView style={styles.container} horizontal={true} scrollEnabled={false} >
                {Contacts.map(({ uid, status, imageUrl, name }) => (
                    <View key={uid} style={styles.userCard}>
                        <Image
                            source={{
                                uri: imageUrl
                            }}
                            style={styles.userImage} />
                        <Text style={styles.userName}>{name}</Text>
                        <Text style={styles.userStatus}>{status}</Text>

                    </View>
                ))}
            </ScrollView>
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
    container: {
        margin: 10,
        backgroundColor: '#d9d9d9',
        padding: 10,
        height:150
    },
    userCard: {
        flex: 1,
        alignItems: 'center',
        backgroundColor:'white',
        marginHorizontal:10,
        padding:10,
        width:100,
        height:130,
        borderRadius:20
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2
    },
    userName: {
        fontSize:15,
        fontWeight:'bold'
    },
    userStatus: {
        color:'green',
    },

})