import { View, Text, Image, TextInput } from 'react-native'
import { COLORS, FONTS, SIZES, assets, ruralData } from '../constants';
import Icon from "react-native-vector-icons/Ionicons";
import { useState } from 'react';

const HomeHeader = ({ onSearch }) => {
  const [locdata, setLocdata] = useState(ruralData);
  return (
    <View style={{
      backgroundColor: "#A90011",
      padding: 14,
      height: 210
    }}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <View style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 0,
          marginBottom: 0,
        }}>
          <Text style={{
            fontSize: 35,
            fontFamily: FONTS.bold,
            fontWeight: "100",
            color: "#000",
          }}>
            Indo
          </Text>
          <Text style={{
            fontSize: 35,
            fontFamily: FONTS.semiBold,
            fontWeight: "100",
            color: "#FFF",
          }}
          >
            Desa
          </Text>
        </View>


        <View style={{ width: 50, height: 50 }}>
          <Image
            source={assets.person04}
            resizeMode="contain"
            style={{ width: '100%', height: '100%' }}
          />
          <Image
            source={assets.badge}
            resizeMode="contain"
            style={{ position: 'absolute', width: 15, height: 15, bottom: 0, right: 0 }}
          />
        </View>
      </View>

      <View style={{ marginVertical: SIZES.font }}>
        <Text style={{
          fontFamily: FONTS.bold, fontSize: 15,
          color: "#fff"
        }}>
          Hello! User👋
        </Text>
        <Text style={{
          fontFamily: FONTS.bold, fontSize: SIZES.large,
          color: "#FFF", marginTop: SIZES.base / 2
        }}>
          Let's meet the locals!
        </Text>
      </View>

      <View style={{ marginTop: 8 }}>
        <View style={{
          width: '100%',
          borderRadius: SIZES.font,
          backgroundColor: COLORS.white,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: SIZES.font,
          paddingVertical: SIZES.small - 2,
        }}>
          <Image
            source={assets.search}
            color="black"

            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: SIZES.base }}
          />

          <TextInput
            placeholder="Search by name"
            style={{ flex: 1 }}
            onChangeText={onSearch}
          />

          <Icon size={18} name="close" color="white"
            onPress={() => {
              onSearch("");
            }} />
        </View>

      </View>

    </View>
  )
}

export default HomeHeader