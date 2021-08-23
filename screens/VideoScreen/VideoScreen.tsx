import React, { useRef, useState, useEffect } from "react";
import { View, Text, Image, SafeAreaView, ScrollView, FlatList } from 'react-native'

import { AntDesign } from '@expo/vector-icons';

import styles from './styles'

import video from '../../assets/Youtube Assets/data/video.json'
import videos from '../../assets/Youtube Assets/data/videos.json'

import VideoListItem from '../../components/VideoListItem/VideoListItem';

import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';

const VideoScreen = () => {

    let viewsString = video.views.toString()
    if (video.views > 1000000) {
        viewsString = (video.views / 1000000).toFixed(1) + 'm'
    } else if (video.views > 1000) {
        viewsString = (video.views / 1000).toFixed(1) + 'k'
    }




    return (
        <View style={{ backgroundColor: '#111', flex: 1, }} >
            <VideoPlayer videoURI={video.videoUrl} thumbnailURI={video.thumbnail} />
         


            <View style={styles.videoInfoContainer} >
                <Text style={styles.tags}>{video.tags}</Text>
                <Text style={styles.title}>{video.title}</Text>
                <Text style={styles.subTitle}>{video.user.name} {viewsString} views  {video.createdAt}</Text>
            </View>

            <View style={styles.actionListContainer} >
                <ScrollView horizontal showsVerticalScrollIndicator={false}>
                    <View style={styles.actionListItem} >
                        <AntDesign name="like1" size={30} color="lightgray" />
                        <Text style={styles.actionText} >{video.likes}</Text>
                    </View>

                    <View style={styles.actionListItem} >
                        <AntDesign name="dislike2" size={30} color="lightgray" />
                        <Text style={styles.actionText} >{video.dislikes}</Text>
                    </View>


                    <View style={styles.actionListItem} >
                        <AntDesign name="export" size={30} color="lightgray" />
                        <Text style={styles.actionText} >{video.dislikes}</Text>
                    </View>

                    <View style={styles.actionListItem} >
                        <AntDesign name="download" size={30} color="lightgray" />
                        <Text style={styles.actionText} >{video.dislikes}</Text>
                    </View>

                    <View style={styles.actionListItem} >
                        <AntDesign name="download" size={30} color="lightgray" />
                        <Text style={styles.actionText} >{video.dislikes}</Text>
                    </View>

                    <View style={styles.actionListItem} >
                        <AntDesign name="download" size={30} color="lightgray" />
                        <Text style={styles.actionText} >{video.dislikes}</Text>
                    </View>

                    <View style={styles.actionListItem} >
                        <AntDesign name="download" size={30} color="lightgray" />
                        <Text style={styles.actionText} >{video.dislikes}</Text>
                    </View>

                    <View style={styles.actionListItem} >
                        <AntDesign name="download" size={30} color="lightgray" />
                        <Text style={styles.actionText} >{video.dislikes}</Text>
                    </View>


                </ScrollView>
            </View >

            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, borderColor: 'darkgray', borderTopWidth: 1, borderBottomWidth: 1 }} >
                <Image style={styles.avatar} source={{ uri: video.user.image }} />

                <View style={{ marginHorizontal: 10, flex: 1, }} >
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', }} >{video.user.name}</Text>
                    <Text style={{ color: 'gray', fontSize: 18 }} >{video.user.subscriber} subscribers</Text>
                </View>

                <Text style={{ color: 'red', fontSize: 18, fontWeight: 'bold', padding: 10, }} >Subscribe</Text>

            </View>

            <View style={{ padding: 10, marginVertical: 10, }} >
                <Text style={{ color: 'white' }} >Comments 555</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, }} >
                    <Image style={{ width: 35, height: 35, borderRadius: 17, }} source={{ uri: video.user.image }} />


                    <Text style={{ color: 'white', marginLeft: 10, }} >syaken djs dkd sld dkd dodf dfdd dkd dldmd dld,sd dkdffd dkdldmd dkdkd</Text>

                </View>
            </View>




        </View>
    )
}

const videoScreenWithRecommendation = () => {

    return (
        <SafeAreaView style={{ backgroundColor: '#111', flex: 1, }} >
            <FlatList
                data={videos}
                renderItem={({ item }) => <VideoListItem video={item} />}
                ListHeaderComponent={VideoScreen}


            />

        </SafeAreaView>
    )

}


export default videoScreenWithRecommendation
