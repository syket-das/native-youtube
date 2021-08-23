import React from 'react'
import { View, Text } from 'react-native'

import { BottomSheetFlatList } from '@gorhom/bottom-sheet'

import comments from '../../assets/Youtube Assets/data/comments.json'
import VideoComment from '../VideoComment/VideoComment'

const VideoComments = () => {
    return (
        <View style={{backgroundColor: '#141414', flex: 1,}} >
            <BottomSheetFlatList 
            data={comments}
            renderItem={({item}) => <VideoComment comment={item} /> }
            >

            </BottomSheetFlatList>

        </View>
    )
}

export default VideoComments
