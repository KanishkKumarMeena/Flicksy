import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { ImageBackground } from "expo-image";
import { Tabs } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const TabIcon = ({ focused, icon, title }:any) => {
    if(focused){
        return (
            <ImageBackground
                source={images.highlight2}
                style={styles.activeTab}
                className="h-20 shadow-2xl"
            >
                <View style={styles.tabContent}>
                    <Image source={icon} tintColor={"#151312"} style={styles.icon} />
                    <Text style={styles.title}>{title}</Text>
                </View>
            </ImageBackground>
        );
    }

    return (
        <View style={styles.inactiveTab}>
            <Image source={icon} tintColor={"#dba8a8"} style={styles.icon} />
        </View>
    );
};

const styles = StyleSheet.create({
    activeTab: {
        width: 170,
        height: 40,
        borderRadius: 100,
        overflow: 'hidden',
        marginTop: 8,
    },
    inactiveTab: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
    },
    tabContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: 20,
        height: 20,
    },
    title: {
        color: '#151312',
        fontSize: 12,
        fontWeight: '600',
        marginLeft: 4,
    }
});

const _Layout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarItemStyle: {
                    width: '50%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingHorizontal: 2
                },
                tabBarStyle: {
                    backgroundColor: '#690808',
                    borderRadius: 50,
                    marginHorizontal: 20,
                    marginBottom: 36,
                    height: 48,
                    position: 'absolute',
                    overflow: 'hidden',
                    borderWidth: 1,
                    borderColor: '#3D1F1F'
                }
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon icon={icons.home} title="Home" focused={focused} />
                    )
                }}
            />
            <Tabs.Screen
                name="search"
                options={{
                    title: 'Search',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon icon={icons.search} title="Search" focused={focused} />
                    )
                }}
            />
        </Tabs>
    );
};

export default _Layout;