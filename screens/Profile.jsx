import { Text, View } from "react-native";
import MainScreen from './MainScreen';
import TopNav from "./components/TopNav";
import BottomNav from "./components/BottomNav";
import { Image } from "@rneui/themed";
export default function Profile({navigation,type}) {
    return (
        <>
            <TopNav navigation={navigation}></TopNav>
            <View>

            </View>
            <BottomNav navigation={navigation} type={type}></BottomNav>
        </>
    )
}