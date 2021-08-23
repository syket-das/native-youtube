
import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
    thumbnail: {
        width: '100%',
        aspectRatio: 16 / 9,
    },
    timerContainer: {
        backgroundColor: '#00000099',
        height: 25,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 0,
        bottom: 5,
    },
    time: {
        color: 'white',
        fontWeight: 'bold',
        borderRadius: 4,

    },
    videoCard: {

    },
    titleRow: {
        flexDirection: 'row',
        padding: 10,

    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    middleContainer: {
        marginHorizontal: 10,
        flex: 1,
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 5,
    },
    subTitle: {
        color: 'gray',
        fontSize: 14,
        fontWeight: '500',
    }
})

export default styles