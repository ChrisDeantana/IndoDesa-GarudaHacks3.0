import { useNavigation } from "@react-navigation/native";
import { View, Image, Text } from "react-native";
import { useState } from 'react';

import { COLORS, SIZES, SHADOWS, assets, FONTS } from "../constants";
import { CircleButton, RectButton } from "./Button";
import { SubInfo, RuralTitle } from './SubInfo'

const RuralCard = ({ data }) => {
    const navigation = useNavigation();
    const [text, setText] = useState(data.description.slice(0, 100));
    const [readMore, setReadMore] = useState(false);


    return (
        <View style={{
            backgroundColor: COLORS.white,
            borderRadius: SIZES.font,
            marginBottom: SIZES.extraLarge,
            margin: SIZES.base,
            ...SHADOWS.dark
        }}>
            <View style={{ width: '100%', height: 250 }}>
                <Image
                    source={data.image}
                    resizeMode='cover'
                    style={{
                        width: "100%",
                        height: "100%",
                        borderTopLeftRadius: SIZES.font,
                        borderTopRightRadius: SIZES.font,
                    }}
                />
                <CircleButton imgUrl={assets.heart} right={10} top={10} />
            </View>

            <SubInfo data={data} />

            <View style={{
                width: "100%",
                padding: SIZES.font,
                justifyContent: "space-between",
                flexDirection: 'row'
            }}>
                <RuralTitle
                    title={data.name}
                    subTitle={data.creator}
                    titleSize={SIZES.large}
                    subTitleSize={SIZES.small}
                />
                <RectButton
                    width={120}
                    height={46}
                    fontSize={SIZES.font}
                    handlePress={() => navigation.navigate("Details", { data })}
                />
            </View>

            <View style={{
                marginTop: -20,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: 'center',
                padding: SIZES.font
            }}>
                <Text style={{
                    fontSize: SIZES.small,
                    fontFamily: FONTS.regular,
                    color: COLORS.secondary,
                    lineHeight: SIZES.large
                }}>
                    {text}

                    {!readMore && '...'}
                    <Text style={{
                        fontSize: SIZES.small,
                        fontFamily: FONTS.semiBold,
                        color: COLORS.primary,
                        width: '100%',


                    }}
                        onPress={() => {
                            if (!readMore) {
                                setText(data.description);
                                setReadMore(true);
                            } else {
                                setText(data.description.slice(0, 100));
                                setReadMore(false);
                            }
                        }}
                    >
                        {readMore ? ' Show less' : 'Read More'}
                    </Text>
                </Text>

            </View>

        </View>

    )
}

export default RuralCard