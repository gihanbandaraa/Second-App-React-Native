import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'


export default function StoriesSection() {
    const Users = [
        {
            uid: '1',
            userName: 'John Doe',
            status: 'Live',
            profilePictureUri: 'https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=800',
            backgroundImageUri: 'https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=800',
            viewCount: 1000
        },
        {
            uid: '2',
            userName: 'Jane Smith',
            status: 'Premium',
            profilePictureUri: 'https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&w=800',
            backgroundImageUri: 'https://images.pexels.com/photos/1261731/pexels-photo-1261731.jpeg?auto=compress&cs=tinysrgb&w=800',
            viewCount: 500
        },
        {
            uid: '3',
            userName: 'Michael',
            status: 'Live',
            profilePictureUri: 'https://images.pexels.com/photos/977796/pexels-photo-977796.jpeg?auto=compress&cs=tinysrgb&w=800',
            backgroundImageUri: 'https://images.pexels.com/photos/96627/pexels-photo-96627.jpeg?auto=compress&cs=tinysrgb&w=800',
            viewCount: 2000
        }
    ];


    return (
        <View>
            <Text style={styles.headingText}>Stories</Text>

            <ScrollView style={styles.storiesContainer} horizontal={true}>
                {Users.map(({ uid, userName, backgroundImageUri, profilePictureUri, viewCount, status }) => (
                    <View key={uid} style={styles.userCard}>
                        <ImageBackground
                            source={{
                                uri: backgroundImageUri
                            }}
                            style={styles.backgroundImage}
                        >
                            <View style={styles.topPartText}>
                                <View style={styles.statusStyleContainer}>
                                    <Text style={styles.statusStyle} >{status}</Text>
                                </View>
                                <Text style={styles.viewCountStyle} >{viewCount}</Text>
                            </View>
                            <View style={styles.downPartText} >
                                <View style={styles.downPartTextContainer}>
                                    <Image source={{
                                        uri: profilePictureUri
                                    }}
                                        style={styles.profileImage} />
                                    <Text style={styles.userName} >{userName}</Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                ))}

            </ScrollView>


        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginHorizontal: 10,
        marginVertical: 8
    },
    storiesContainer: {
        padding: 10,
    },
    userCard: {
        margin: 10,
        borderRadius: 20,
        backgroundColor: '#d9d9d9'

    },
    backgroundImage: {
        width: 150,
        height: 200,
    },
    topPartText: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    statusStyleContainer: {
        margin: 5
    },
    statusStyle: {

        backgroundColor: 'red',
        fontSize: 10,
        color: 'white',
        borderRadius: 8,
        padding: 6,
        fontWeight: 'bold'

    },
    viewCountStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 8
    },
    downPartTextContainer:{
        flexDirection:'column',
        width:120,
        alignItems:'center',
        marginVertical:5,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius:15
       
    },
    downPartText: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 5,
        height: 20,
 

    },
    profileImage: {
        height: 40,
        width: 40,
        borderRadius: 60 / 2,
        marginTop:5
    },
    userName: {
        fontSize: 10,
        fontWeight: 'bold',
        color: 'white'
    },
  
})