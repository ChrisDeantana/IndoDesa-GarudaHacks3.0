import { View, Image } from 'react-native'

import { COLORS, SIZES, SHADOWS } from '../constants'
import { TripTitle } from './SubInfo'

const VisitCard = ({ trip }) => {

    return (
        <View style={{
            backgroundColor: COLORS.white,
            borderRadius: 10,
            marginBottom: SIZES.extraLarge,
            margin: SIZES.base,
            ...SHADOWS.dark,
            display: 'flex',
            flexDirection: 'row',
        }}>
            <View style={{ width: "60%", padding: SIZES.font }}>
                <TripTitle
                    title={trip.place}
                    subTitle={trip.subplace}
                    date={trip.date}
                    long={trip.long}
                    type={trip.Type}
                />
            </View>

            <View style={{ width: "100%", height: 150 }}>
                <Image
                    source={trip.image}
                    resizeMode="cover"
                    style={{
                        width: "40%",
                        height: "100%",
                        borderBottomRightRadius: SIZES.font,
                        borderTopRightRadius: SIZES.font,
                    }}
                />
            </View>

        </View>
    )
}

export default VisitCard