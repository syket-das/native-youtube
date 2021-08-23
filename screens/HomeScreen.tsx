import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'

import Videos from '../assets/Youtube Assets/data/videos.json'
import VideoListItem from '../components/VideoListItem/VideoListItem'

const HomeScreen = () => {
    return (
        <View>
            <FlatList
                data={Videos}
                renderItem={({ item }) => <VideoListItem video={item} /> }
            />

        </View>
    )
}

const styles = StyleSheet.create({

})



export default HomeScreen
