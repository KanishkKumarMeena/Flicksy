import React from 'react';
import { Text, View, Image, ScrollView, TextInput } from "react-native";
import {icons} from "@/constants/icons";

interface props {
    placeholder: string,
    onPress?: () => void,
    value?: string,
    onChangeText?: (text:string)=> void,
}

const SearchBar = ({placeholder, onPress, value, onChangeText}:props) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4 border-2 border-dark-100 shadow-2xl">
        <Image source={icons.search} className="size-5" resizeMode="contain" tintColor="#dba8a8" />
        <TextInput
            onPress={onPress}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            placeholderTextColor="#dba8a8"
            className="flex-1 ml-2 text-white"
        />
    </View>
  );
};

export default SearchBar;
