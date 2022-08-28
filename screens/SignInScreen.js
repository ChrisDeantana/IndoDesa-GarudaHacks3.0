import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import { FONTS, assets } from '../constants'


const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();




    const handleLogin = () => {
        auth
            .signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Logged in with:', user.email);
            })
            .catch(error => alert(error.message))
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <View style={{
                display: "flex",
                flexDirection: "row",
                marginTop: 150,
                marginBottom: 50
            }}>
                <Text style={{
                    fontSize: 50,
                    fontFamily: FONTS.bold,
                    fontWeight: "100",
                    color: "#A90011",
                }}>
                    Indo
                </Text>
                <Text style={{
                    fontSize: 50,
                    fontWeight: "100",
                }}
                >
                    Desa
                </Text>
            </View>


            <View style={{
                width: '80%',
                marginBottom: 40,
            }}>
                <Text style={{
                    fontSize: 10,
                    paddingLeft: 5,
                    paddingBottom: 10
                }}>Username</Text>
                <View style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    flexDirection: 'row'
                }}>
                    <Image source={assets.user}
                        style={{
                            width: 15,
                            height: 15,
                        }} />
                    <TextInput
                        placeholder="Insert your username here"
                        value={email}
                        onChangeText={text => setEmail(text)}
                        style={{
                            backgroundColor: 'white',
                            paddingHorizontal: 15,
                            paddingBottom: 10,
                            borderRadius: 10,
                            width: '100%',
                        }}
                    />
                </View>
            </View>

            <View style={{
                width: '80%',
                marginBottom: 40,
            }}>
                <Text style={{
                    fontSize: 10,
                    paddingLeft: 5,
                    paddingBottom: 10
                }}>Password</Text>
                <View style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    flexDirection: 'row'
                }}>
                    <Image source={assets.padlock}
                        style={{
                            width: 17,
                            height: 17,
                        }} />
                    <TextInput
                        placeholder="Inside your password here"
                        value={password}
                        onChangeText={text => setPassword(text)}
                        style={{
                            backgroundColor: 'white',
                            paddingHorizontal: 15,
                            paddingBottom: 10,
                            borderRadius: 10,
                            width: '100%',
                        }}
                        secureTextEntry
                    />
                </View>
            </View>

            {/* <View style={
                styles.inputContainer}>
                <Text style={{
                    fontSize: 10,
                    paddingLeft: 5
                }}>Password</Text>
                <View style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    flexDirection: 'row'
                }}>
                    <Image source={assets.padlock}
                        style={{
                            width: 10,
                            height: 10,
                        }} />
                    <TextInput
                        placeholder="Inside your password here"
                        value={password}
                        onChangeText={text => setPassword(text)}
                        style={styles.input}
                        secureTextEntry
                    />
                </View>
            </View> */}

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Home")}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Login as Investors</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Home")}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>Login as Locals</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%',
        marginBottom: 40,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,

    },
    buttonContainer: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,

    },
    button: {
        backgroundColor: '#D11D27',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#D11D27',
        borderWidth: 2,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: 'red',
        fontWeight: '700',
        fontSize: 16,
    },
})