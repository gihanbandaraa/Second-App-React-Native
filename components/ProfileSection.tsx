import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ProfileSection() {
    return (
        <View>
            <View style={styles.profileContainer}>
                <View style={styles.imageContainer}>

                    <Image
                        source={{
                            uri: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
                        }}
                        style={styles.profileImage}
                    />
                </View>
                <Text style={styles.profileName}>Gihan Bandara</Text>
                <View style={styles.iconContainer}>
                    <Image
                        source={{
                            uri: 'https://cdn-icons-png.flaticon.com/128/1827/1827422.png'
                        }}
                        style={styles.iconImage}
                    />
                    <Image
                        source={{
                            uri: 'https://cdn-icons-png.flaticon.com/128/9293/9293682.png'
                        }}
                        style={[styles.iconImage, styles.activeImage]}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    profileContainer: {
        backgroundColor: '#BDBFC5',
        flexDirection: 'row',
        alignItems: 'center',
        height: 100,
        margin: 12,
        borderRadius: 20
    },
    imageContainer: {
        width: 60,
        height: 60,
        margin: 10

    },
    profileImage: {
        height: 60,
        borderRadius: 60 / 2,

    },
    profileName: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black'
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 10,
        marginLeft: 100,
        padding: 8,
        borderRadius: 20
    },
    iconImage: {
        width: 30,
        height: 30,
        borderRadius: 25,
        marginHorizontal: 5
    },
    activeImage: {
        backgroundColor: '#d9d9d9',

    }

})