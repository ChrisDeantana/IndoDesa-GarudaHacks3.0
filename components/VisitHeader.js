import { View, Text, Image, TextInput, StatusBar } from 'react-native'
import { COLORS, FONTS, SIZES, assets } from '../constants'
import React from 'react'
import { CircleButton } from './Button'


const VisitHeader = ({ navigation }) => {
    return (
        <View style={{
            backgroundColor: "#A90011",
            padding: SIZES.font,
        }}>
            <View style={{
                marginVertical: SIZES.font,
            }}>

                <View style={{ paddingLeft: 60 }}>
                    <Text
                        style={{
                            fontFamily: FONTS.regular,
                            fontSize: SIZES.small,
                            color: COLORS.white,
                        }}
                    >
                        Take A Visit
                    </Text>

                    <Text
                        style={{
                            fontFamily: FONTS.bold,
                            fontSize: SIZES.large,
                            color: COLORS.white,
                            marginTop: SIZES.base / 2,
                        }}
                    >
                        Upcoming Trips 2022
                    </Text>

                    <CircleButton
                        imgUrl={assets.left}
                        // handlePress={() => navigation.goBack()}
                        handlePress={() => navigation.goBack()}
                        left={0}
                        top={0}
                    />

                </View>

            </View>

        </View>
    )
}

export default VisitHeader