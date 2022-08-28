import { View, Text, Image } from 'react-native'

import { SIZES, FONTS, COLORS, SHADOWS, assets } from '../constants'

export const RuralTitle = ({ title, subTitle, titleSize, subTitleSize }) => {
  return (
    <View >
      <Text style={{
        fontFamily: FONTS.semiBold,
        fontSize: titleSize,
        color: COLORS.primary
      }}>{title}</Text>
      <View style={{ flexDirection: 'row', marginTop: 5 }}>
        <Image
          source={assets.location}
          resizeMode="contain"
          style={{ width: 20, height: 20, marginLeft: -3 }}
        />
        <Text style={{
          fontFamily: FONTS.regular,
          fontSize: subTitleSize,
          color: COLORS.primary,
          marginTop: 3,
        }}>{subTitle}</Text>
      </View>
    </View>

  )
}

export const TripTitle = ({ title, subTitle, date, long, type }) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: FONTS.bold,
          fontSize: 20,
          color: COLORS.primary
        }}>
        {title}
      </Text>
      <Text
        style={{
          fontFamily: FONTS.medium,
          fontSize: 15,
          color: COLORS.primary,
        }}>
        {subTitle}
      </Text>
      <Text
        style={{
          fontFamily: FONTS.medium,
          fontSize: 19,
          color: COLORS.primary,
          paddingVertical: 10,
        }}>
        {date} {long}
      </Text>
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: 15,
          color: COLORS.primary
        }}>
        {type}
      </Text>
    </View>
  )
}

export const ImageCmp = ({ imgUrl, index }) => {
  return (
    <Image
      source={imgUrl}
      resizeMode="cover"
      style={{
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        borderColor: COLORS.white,
        borderWidth: 3,
        marginLeft: index === 0 ? 0 : -SIZES.font
      }}
    />
  )
}

export const People = ({ photo }) => {
  return (
    <View style={{ flexDirection: 'row' }}
    >
      {[photo].map((imgUrl, index) => (
        <ImageCmp imgUrl={imgUrl} index={index} key={'People=${index}'} />
      ))}
    </View>
  )
}

export const EndDate = ({ role }) => {
  return (
    <View
      style={{
        paddingHorizontal: SIZES.font,
        paddingVertical: 8,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: '50%',
        maxHeight: '50%',
        marginTop: 30,
        borderRadius: 10,
      }}
    >

      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.large,
          color: COLORS.primary
        }}>
        {role}
      </Text>

    </View>
  )
}

export const SubInfo = ({ data }) => {
  return (
    <View style={{
      width: '100%',
      paddingHorizontal: SIZES.font,
      marginTop: -SIZES.xxxl,
      flexDirection: "row",
      justifyContent: 'space-between'
    }}>
      <People photo={data.people} />
      <EndDate role={data.role} />
    </View>
  )
}