import { View, SafeAreaView, FlatList, Text } from 'react-native'

import { COLORS, NFTData } from "../constants"
import { FocusedStatusBar } from "../components"
import VisitHeader from '../components/VisitHeader'
import VisitCard from '../components/VisitCard'

const Visit = ({ route, navigation }) => {
    const { data } = route.params;
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatusBar background={COLORS.primary} />

            <View style={{ flex: 1 }}>
                <View style={{ zIndex: 0 }}>
                    <FlatList
                        data={data.trip}
                        renderItem={({ item }) => <VisitCard trip={item} />}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={<VisitHeader data={data} navigation={navigation} />}
                    />
                </View>

            </View>

        </SafeAreaView>
    )
}

export default Visit