import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, Modal } from 'react-native'
import FastImage from "react-native-fast-image";
import { Colors } from "../../../styles/colors";
import { Photos as ph } from '../components/ConstantData'
const { width, height } = Dimensions.get('window')

const Photos = ({ following, followers, likes, ...props }) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [modalImage, setModalImage] = useState('');

    return (
        <View style={styles.contanier}>
            <View style={styles.header}>
                <Text style={styles.headingText}>Photos</Text>
            </View>

            <View style={styles.photos}>
                {ph.map((item) => {
                    return (
                        <TouchableOpacity activeOpacity={0.9}
                            style={[styles.photo_item]} key={item.id}
                            onPress={() => {
                                setModalImage(item.image)
                                setModalVisible(true)
                            }}
                        >
                            <FastImage source={item.image} style={styles.image} resizeMode='cover' />
                        </TouchableOpacity>
                    )
                })}
            </View>

            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    // transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            {/* CLOSE BTN */}
                            <TouchableOpacity
                                style={{ position: 'absolute', right: 20, top: 20, zIndex: 2, borderRadius: 16, overflow: 'hidden' }}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                }}>
                                <FastImage source={require('../../../images/closeicon.png')} style={{ width: 30, height: 30, backgroundColor: Colors.white, padding: 5 }} />
                            </TouchableOpacity>

                            <FastImage source={modalImage} style={{ width: width, height: '100%' }} resizeMode='contain' />

                        </View>
                    </View>
                </Modal>
            </View>

        </View>
    )
}

export default Photos

const styles = StyleSheet.create({
    contanier: {
        paddingVertical: 20,
    },
    header: {
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        height: 40
    },
    headingText: {
        color: Colors.black,
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: '700',
        letterSpacing: 1,
        fontSize: 24,
    },
    photos: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden',
        marginHorizontal: 10,
        flexWrap: 'wrap',
        marginTop: 1,
    },
    photo_item: {
        marginBottom: 10,
    },
    image: {
        borderRadius: 6,
        height: ((Dimensions.get('window').width) / 2 - 25) * 1.5,
        width: (Dimensions.get('window').width) / 2 - 15,
        opacity: 0.8
    },

    // FOR IMAGE MODAL
    centeredView: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 44,
        flex: 1,
    },
    modalView: {
        // margin: 20,
        backgroundColor: Colors.black,
        // borderRadius: 20,
        // padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
})