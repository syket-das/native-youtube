import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList,
  Pressable,
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import styles from './styles';

import video from '../../assets/Youtube Assets/data/video.json';
import videos from '../../assets/Youtube Assets/data/videos.json';

import VideoListItem from '../../components/VideoListItem/VideoListItem';

import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';

import BottomSheet, { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import VideoComments from '../../components/VideoComments/VideoComments';

const VideoScreen = () => {
  const commentsSheetRef = useRef<BottomSheetModal>(null);

  let viewsString = video.views.toString();
  if (video.views > 1000000) {
    viewsString = (video.views / 1000000).toFixed(1) + 'm';
  } else if (video.views > 1000) {
    viewsString = (video.views / 1000).toFixed(1) + 'k';
  }

  const openComments = () => {
    commentsSheetRef.current?.present();
  };

  return (
    <View style={{ backgroundColor: '#111', flex: 1 }}>
      <VideoPlayer videoURI={video.videoUrl} thumbnailURI={video.thumbnail} />

      <View style={{ flex: 1 }}>
        <View style={styles.videoInfoContainer}>
          <Text style={styles.tags}>{video.tags}</Text>
          <Text style={styles.title}>{video.title}</Text>
          <Text style={styles.subTitle}>
            {video.user.name} {viewsString} views {video.createdAt}
          </Text>
        </View>

        <View style={styles.actionListContainer}>
          <ScrollView horizontal showsVerticalScrollIndicator={false}>
            <View style={styles.actionListItem}>
              <AntDesign name="like1" size={30} color="lightgray" />
              <Text style={styles.actionText}>{video.likes}</Text>
            </View>

            <View style={styles.actionListItem}>
              <AntDesign name="dislike2" size={30} color="lightgray" />
              <Text style={styles.actionText}>{video.dislikes}</Text>
            </View>

            <View style={styles.actionListItem}>
              <AntDesign name="export" size={30} color="lightgray" />
              <Text style={styles.actionText}>{video.dislikes}</Text>
            </View>

            <View style={styles.actionListItem}>
              <AntDesign name="download" size={30} color="lightgray" />
              <Text style={styles.actionText}>{video.dislikes}</Text>
            </View>

            <View style={styles.actionListItem}>
              <AntDesign name="download" size={30} color="lightgray" />
              <Text style={styles.actionText}>{video.dislikes}</Text>
            </View>

            <View style={styles.actionListItem}>
              <AntDesign name="download" size={30} color="lightgray" />
              <Text style={styles.actionText}>{video.dislikes}</Text>
            </View>

            <View style={styles.actionListItem}>
              <AntDesign name="download" size={30} color="lightgray" />
              <Text style={styles.actionText}>{video.dislikes}</Text>
            </View>

            <View style={styles.actionListItem}>
              <AntDesign name="download" size={30} color="lightgray" />
              <Text style={styles.actionText}>{video.dislikes}</Text>
            </View>
          </ScrollView>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
            borderColor: 'darkgray',
            borderTopWidth: 1,
            borderBottomWidth: 1,
          }}
        >
          <Image style={styles.avatar} source={{ uri: video.user.image }} />

          <View style={{ marginHorizontal: 10, flex: 1 }}>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
              {video.user.name}
            </Text>
            <Text style={{ color: 'gray', fontSize: 18 }}>
              {video.user.subscriber} subscribers
            </Text>
          </View>

          <Text
            style={{
              color: 'red',
              fontSize: 18,
              fontWeight: 'bold',
              padding: 10,
            }}
          >
            Subscribe
          </Text>
        </View>

        <Pressable
          onPress={openComments}
          style={{ padding: 10, marginVertical: 10 }}
        >
          <Text style={{ color: 'white' }}>Comments 555</Text>
        </Pressable>

        {/* All comments */}
        <BottomSheetModal
          ref={commentsSheetRef}
          snapPoints={['70%']}
          index={0}
          
            backgroundComponent={({style}) => <View style={[style, { backgroundColor: '#4d4d4d' }]} />}
            >
          <VideoComments />
        </BottomSheetModal>
      </View>
    </View>
  );
};

const VideoScreenWithRecommendation = () => {
  return (
    <SafeAreaView style={{ backgroundColor: '#111', flex: 1 }}>
      <BottomSheetModalProvider>
        <FlatList
          data={videos}
          renderItem={({ item }) => <VideoListItem video={item} />}
          ListHeaderComponent={VideoScreen}
        />
      </BottomSheetModalProvider>
    </SafeAreaView>
  );
};

export default VideoScreenWithRecommendation;
