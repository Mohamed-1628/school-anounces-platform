import React,{useState,useEffect} from "react";
import {View , Text , StyleSheet , TouchableOpacity, ScrollView, Animated} from "react-native";
import { colors } from "../utils/colors";
import { Lost,Found, Shop,Sports,Gaming } from "../assets/icons";
import Icon from "react-native-vector-icons/FontAwesome5"
import Icon2 from "react-native-vector-icons/Ionicons"
import Icon3 from "react-native-vector-icons/MaterialIcons"
import state from "../state";
import { useSnapshot } from "valtio";
import { Link } from "expo-router"

const defaultRooms = [
    {
        title:"Lost objects",
        icon:Lost,
        isNotified:false,
        isCurrent:true,
    },
    {
        title:"Found objects",
        icon:Found,
        isNotified:true,
        isCurrent:false,
    },
    {
        title:"Shop",
        icon:Shop,
        isNotified:false,
        isCurrent:false,
    },
    {
        title:"My DMs",
        icon:() => <Icon name="user-alt" size={20} color="white"/>,
    }
]
const otherRooms = [
    {
        title:"Sports",
        icon: Sports,
        isNotified:false,
        isCurrent:false,
    },
    {
        title:"Gaming",
        icon: Gaming,
        isNotified:true,
        isCurrent:false,
    }
]
const Sidebar = () => {
    const snap = useSnapshot(state)
    const value = useState(new Animated.Value(-400))[0]
    const toggleSidebar = () => {
        Animated.timing(value, {
            toValue: 0,
            duration: 500,
            useNativeDriver: false,
        }).start()
    }
    const hideSidebar = () => {
        Animated.timing(value, {
            toValue: -400,
            duration: 500,
            useNativeDriver: false,
        }).start()
    }

    useEffect(() => {
        if(snap.isSidebarShown){
            toggleSidebar()
        }else{
            hideSidebar()
        }
    },[snap.isSidebarShown])


    const IconContainer = ({Icon,isNotified}) => {
        return (
            <View style={{
                width:45,
                height:45,
                borderRadius:50,
                backgroundColor:isNotified ? colors.lentils_orange : colors.dark_blue,
                flexDirection:"row",
                justifyContent:"center",
                alignItems:"center",
            }}>
                <Icon color="white"/>
            </View>
        )
    }
    return(
        <Animated.ScrollView
        style={{...styles.container,left:value}}
        >
            <View style={{
                width:"100%",
                height:"auto",
                flexDirection:"column",
                gap:20,
                marginBottom:200,
            }}>
                <View
                style={styles.rooms}
                >
                    <Text
                    style={styles.title}
                    >
                        Default rooms:
                    </Text>
                    <View
                    style = {styles.roomsContainer}
                    >
                    {defaultRooms.map((room,index) => (
                        <TouchableOpacity key={index}>
                            <View style={styles.roomContainer}>
                                <IconContainer Icon={room.icon} isNotified={room.isNotified}/>
                                <Text 
                                style={{
                                    ...styles.roomTitle,
                                    color:room.isNotified ? colors.lentils_orange : colors.dark_blue,
                                    fontWeight:room.isCurrent ? "900" : "500",
                                }}
                                >
                                    {room.title}
                                </Text>
                                {room.isNotified && (
                                    <View 
                                    style={{
                                        width:7,
                                        height:7,
                                        backgroundColor:colors.lentils_orange,
                                        borderRadius:50,
                                        marginLeft:"auto",
                                    }}></View>
                                )}
                            </View>
                        </TouchableOpacity>
                    ))}
                    </View>
                </View>

                <View style={styles.separator}></View>

                <View
                style={styles.rooms}
                >
                    <Text
                    style={styles.title}
                    >
                        Other rooms:
                    </Text>
                    <View
                    style = {styles.roomsContainer}
                    >
                    {otherRooms.map((room,index) => (
                        <TouchableOpacity key={index}>
                        <View style={styles.roomContainer}>
                            <IconContainer Icon={room.icon} isNotified={room.isNotified}/>
                            <Text 
                            style={{
                                ...styles.roomTitle,
                                color:room.isNotified ? colors.lentils_orange : colors.dark_blue,
                                fontWeight:room.isCurrent ? "900" : "500",
                            }}
                            >
                                {room.title}
                            </Text>
                            {room.isNotified && (
                                <View 
                                style={{
                                    width:7,
                                    height:7,
                                    backgroundColor:colors.lentils_orange,
                                    borderRadius:50,
                                    marginLeft:"auto",
                                }}></View>
                            )}
                        </View>
                    </TouchableOpacity>
                    ))}
                    </View>
                </View>
                <TouchableOpacity>
                    <View
                    style={styles.addRoomContainer}
                    >
                        <Icon name="plus" color="white" size={15}/>
                        <Text style={{color:"white", fontWeight:"800", fontSize:14}}>
                            Create my own room ...
                        </Text>
                    </View>
                </TouchableOpacity>

            </View>
            <View
            style={styles.footer}
            >
                {/* <Text style={{color:"black", fontWeight:"800", fontSize:14}}>
                    settings
                </Text> */}
                <TouchableOpacity>
                    <Link
                    href="/settings"
                    >
                        <Icon2 name="settings-sharp" color={colors.dark_blue} size={35}/>
                    </Link>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Link
                    href="/login"
                    >
                        <Icon3 name="logout" color={colors.dark_blue} size={35}/>
                    </Link>
                </TouchableOpacity>
            </View>

        </Animated.ScrollView>
    )
}
const styles = StyleSheet.create({
    container:{
        position:"absolute",
        width:"80%",
        height:"auto",
        top:0,
        bottom:0,
        zIndex:50,
        backgroundColor:colors.light_blue,
        padding:20,
        gap:20,
        overflow:"scroll",
    },
    rooms:{
        width:"100%",
        flexDirection:"column",
        gap:20,
    },
    title:{
        fontSize:18,
        fontWeight:"bold",
        color:colors.dark_blue,
    },
    roomsContainer:{
        width:"100%",
        flexDirection:"column",
        gap:10,
        paddingLeft:15,
    },
    roomContainer: {
        width:"100%",
        flexDirection:"row",
        gap:20,
        alignItems:"center",
    },
    roomTitle: {
        fontSize:16,
    },
    separator:{
        width:"100%",
        height:2,
        backgroundColor:colors.dark_blue,
    },
    addRoomContainer: {
        width:250,
        marginTop:20,
        backgroundColor:colors.medium_blue,
        paddingHorizontal:10,
        paddingVertical:15,
        flexDirection:"row",
        alignItems:"center",
        gap:10,
        borderRadius:20,
    },
    footer:{
        flexDirection:"row",
        justifyContent:"flex-end",
        alignItems:"center",
        position : "absolute",
        bottom:0,
        width:"100%",
        height:200,
        gap:15
    }
})


export default Sidebar