import React, { useState } from "react";
import { View, Text, Image } from "react-native";

import { RuralTitle } from "./SubInfo";
import { COLORS, SIZES, FONTS } from "../constants";

const DetailsDesc = ({ data }) => {
    const [text, setText] = useState(data.description.slice(0, 100));
    const [readMore, setReadMore] = useState(false);

    return (
        <>
            <View
                style={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <RuralTitle
                    title={data.name}
                    subTitle={data.creator}
                    titleSize={SIZES.extraLarge}
                    subTitleSize={SIZES.font}
                />
            </View>

            <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
                <Text
                    style={{
                        fontSize: SIZES.font,
                        fontFamily: FONTS.semiBold,
                        color: COLORS.primary,
                    }}
                >
                    Background Story
                </Text>
                <View
                    style={{
                        marginTop: SIZES.base,
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.secondary,
                            fontSize: SIZES.small,
                            fontFamily: FONTS.regular,
                            lineHeight: SIZES.large,
                        }}
                    >
                        {text}
                        {!readMore && "..."}
                        <Text
                            style={{
                                color: COLORS.primary,
                                fontSize: SIZES.small,
                                fontFamily: FONTS.semiBold,
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
                            {readMore ? " Show Less" : " Read More"}
                        </Text>
                    </Text>
                </View>

                <Text
                    style={{
                        fontSize: SIZES.font,
                        fontFamily: FONTS.semiBold,
                        color: COLORS.primary,
                        marginTop: SIZES.base
                    }}
                >
                    Location
                </Text>

                <Text
                    style={{
                        color: COLORS.secondary,
                        fontSize: SIZES.small,
                        fontFamily: FONTS.regular,
                        lineHeight: SIZES.large,
                    }}
                >
                    Jalan Sudirman Blok E5 No 4 {'\n'}
                    Phone : 021 8829472
                </Text>

                <Text
                    style={{
                        fontSize: SIZES.font,
                        fontFamily: FONTS.semiBold,
                        color: COLORS.primary,
                        marginTop: SIZES.base
                    }}
                >
                    Product
                </Text>

                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}>
                    <Image
                        marginTop={10}
                        source={data.img1}
                        resizeMode="cover"
                        style={{ width: "49%", height: 120 }}
                    />

                    <Image
                        marginTop={10}
                        source={data.img2}
                        resizeMode="cover"
                        style={{ width: "49%", height: 120 }}
                    />
                </View>

            </View>
        </>
    );
};

export default DetailsDesc;