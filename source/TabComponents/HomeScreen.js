import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import { Container, Header, Title, Left, Right, Body, Icon, Item, Label, Input } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Carousel from 'react-native-anchor-carousel';
const { width } = Dimensions.get('window');

const data = [
    {
        uri: require('../../assets/movie1.jpg'),
        title: 'Lorem ipsum dolor sit amet',
        content: 'Neque porro quisquam est qui dolorem ipsum quia '
    },
    {
        uri: require('../../assets/movie1.jpg'),
        title: 'Lorem ipsum ',
        content: 'Neque porro quisquam est qui dolorem ipsum '
    },
    {
        uri: require('../../assets/movie1.jpg'),
        title: 'Lorem ipsum dolor',
        content: 'Neque porro quisquam est qui'
    },
    {
        uri: require('../../assets/movie1.jpg'),
        title: 'Lorem ipsum dolor',
        content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet'
    },
    {
        uri: require('../../assets/movie1.jpg'),
        title: 'Lorem ipsum ',
        content: 'Neque porro quisquam est qui dolorem ipsum quia dolor '
    }
];

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    renderItem = ({ item, index }) => {
        const { uri, title, content } = item;
        return (

            <TouchableOpacity
                activeOpacity={1}
                style={styles.item}
                onPress={() => {
                    this.numberCarousel.scrollToIndex(index);
                }}
            >
                <ImageBackground
                    source={uri}
                    style={styles.imageBackground}
                >
                    <View style={styles.TextContainer}>
                        <Text style={styles.topText}>COMING 2 AMERICA</Text>
                        <Text style={styles.middleText}>Was this movie a flop?</Text>
                        <Text style={styles.bottomText}>Read more...</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>

        )
    }

    render() {
        return (
            <Container>
                <ScrollView
                    style={styles.container}
                    contentContainerStyle={{ display: 'flex', alignItems: "center", flexDirection: 'column', alignSelf: 'center' }}
                >
                    <Text style={styles.header}>News</Text>
                    <View style={styles.caouselContainer}>
                        <Carousel
                            style={styles.carousel}
                            data={data}
                            renderItem={this.renderItem}
                            itemWidth={0.7 * width}
                            inActiveOpacity={0.3}
                            containerWidth={width - 10}
                            ref={(c) => {
                                this.numberCarousel = c;
                            }}
                        />
                    </View>
                    <View style={styles.cardList}>
                        <TouchableOpacity
                            style={styles.one}
                        >
                            <Image style={{ width: '30%', height: '80%', padding: 5 }} source={require('../../assets/movie2.jpg')} />
                            <View style={styles.textGroup}>
                                <View style={{}}>
                                    <Text style={{ color: 'white', }}>TED'S TECH TAKE</Text>
                                    <Text style={{ color: 'white' }}>INVESTORS BY STORMS</Text>
                                </View>
                                <View>
                                    <Text style={{ color: '#aaa' }}>Local tech shop takes the</Text>
                                    <Text style={{ color: '#aaa' }}>Industry by storm</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.one}
                        >
                            <Image style={{ width: '30%', height: '80%', padding: 5 }} source={require('../../assets/movie2.jpg')} />
                            <View style={styles.textGroup}>
                                <View style={{}}>
                                    <Text style={{ color: 'white', }}>TED'S TECH TAKE</Text>
                                    <Text style={{ color: 'white' }}>INVESTORS BY STORMS</Text>
                                </View>
                                <View>
                                    <Text style={{ color: '#aaa' }}>Local tech shop takes the</Text>
                                    <Text style={{ color: '#aaa' }}>Industry by storm</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.one}
                        >
                            <Image style={{ width: '30%', height: '80%', padding: 5 }} source={require('../../assets/movie2.jpg')} />
                            <View style={styles.textGroup}>
                                <View style={{}}>
                                    <Text style={{ color: 'white', }}>TED'S TECH TAKE</Text>
                                    <Text style={{ color: 'white' }}>INVESTORS BY STORMS</Text>
                                </View>
                                <View>
                                    <Text style={{ color: '#aaa' }}>Local tech shop takes the</Text>
                                    <Text style={{ color: '#aaa' }}>Industry by storm</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </Container>
        );
    }
}
const styles = StyleSheet.create({

    container: {
        backgroundColor: '#000',
    },
    header: {
        color: '#fff',
        backgroundColor: '#272727',
        width: width,
        height: hp('10%'),
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: wp('7%')
    },
    caouselContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: hp('3%'),
        width: wp('95%'),
        // marginLeft:wp('2%'),
    },
    carousel: {
        height: 150,
        width: wp('70%'),
    },
    item: {
        flex: 1,
        borderRadius: 15,
    },
    imageBackground: {
        flex: 2,
        backgroundColor: '#EBEBEB',
    },
    TextContainer: {
        height: '80%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    topText: {
        width: '70%',
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'left',
        marginBottom: 10,
        fontSize: wp('4%')
    },
    middleText: {
        width: '70%',
        color: '#f0f0f0',
        textAlign: 'left',
        marginBottom: 10,
        fontSize: wp('4%')
    },
    bottomText: {
        width: '70%',
        color: '#f0f0f0',
        textAlign: 'left',
        marginBottom: 10,
        fontSize: wp('3%'),
    },
    cardList: {
        width: wp('95%'),
        marginTop: hp('5%'),
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center',
        alignItems: 'center'
    },
    one: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#272727',
        marginBottom: 20,
        borderRadius:10,
        width: '85%',
        height: hp('20%'),
    },
    textGroup: {
        display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', height: '90%',
        marginLeft: 10

    }
});

// ...

export default HomeScreen;