import {
    StyleSheet,
    Text,
    View,
    Linking,
    Image,
    TouchableOpacity
} from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(webSiteLink: string) {
        Linking.openURL(webSiteLink)
    }
    return (
        <View>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>What is New 
                    in React Native 2024 :)</Text>
                </View>
                <Image
                    source={{
                        uri: 'https://miro.medium.com/v2/resize:fit:1024/0*dhDZY5VlvfPB5WtZ.png'
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.bodyContainer}>
                    <Text style={styles.bodyText} >
                        In 2024, React Native continues to flourish,
                        powering cross-platform mobile app development with its efficiency and versatility,
                        driving innovation in the mobile development landscape.
                    </Text>
                </View>

                <View style={styles.footerContainer}>
                    <TouchableOpacity
                        onPress={() => openWebsite('https://medium.com/@gihanbandara999/file-structure-of-the-react-native-9e74ee30fca1')}>
                        <Text style={styles.link} >
                            Read here
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => openWebsite('https://github.com/Gihan1329')}>
                        <Text style={styles.link} >
                            Follow Me
                        </Text>
                    </TouchableOpacity>
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
        marginHorizontal: 25,
        marginVertical: 8,
        borderRadius: 8,

    },
    elevatedCard: {
        backgroundColor: '#d9d9d9',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        }
    },
    headingContainer: {},
    headerText: {
        marginVertical: 8,
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color:'black'
    },
    cardImage: {
        height: 250,
        marginBottom: 10,
        margin: 8
    },
    bodyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bodyText: {
        fontSize: 16,
        fontWeight: '400',
        margin: 15
    },
    footerContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-evenly'

    },
    link: {
        fontSize: 16,
        margin: 10,
        color:'black',
        fontWeight:'bold',
        borderRadius:20,
        backgroundColor:'lightblue',
        padding:9
    }
})