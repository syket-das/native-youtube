import { StyleSheet } from "react-native";

const styles = {
    videoPlayer: {
        width: '100%',
        aspectRatio: 16/9,
    },
    videoInfoContainer: {
        margin: 10,
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 10,
    },
    tags: {
        color: '#0094e3',
        fontSize: 14,
        fontWeight: '500',
        marginVertical: 5,
    },
    subTitle: {
        color: 'gray',
        fontSize: 14,
        fontWeight: '500',
    },
    actionListContainer: {
        marginVertical: 10,
    },

    actionListItem: {
        width: 70,
        height: 60,
        justifyContent: 'space-around',
        alignItems: 'center',


    },
    actionText:{
        color: 'white',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    }
}

export default styles