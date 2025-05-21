import { Link } from "expo-router";
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {icons} from "@/constants/icons";

// Calculate the width of each item (30% of screen width)
const { width } = Dimensions.get('window');
const itemWidth = (width - 50 - 40) / 3; // screen width - padding - gaps

const MovieCard = ({id, poster_path, title, release_date, vote_average}: Movie) => {
  return (
    <View style={styles.container}>
      <Link href={`/movies/${id}`} asChild>
          <TouchableOpacity style={styles.touchable}>
              <Image
                  source={{
                      uri: poster_path
                      ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                      : 'https://placeholder.co/600x400/1a1a1a/ffffff.png'
                  }}
                  style={styles.image}
                  resizeMode="cover"
                  className="border-2 border-dark-100"
              />
              <Text style={styles.title} numberOfLines={2}>{title}</Text>

              <View className="flex-row items-center justify-start gap-x-1">
                  <Image source={icons.star} className="size-4"/>
                  <Text className="text-white text-xs font-bold uppercase">{Math.round(vote_average/2)}</Text>
              </View>

              <View className="flex-row items-center justify-between">
                  <Text className="text-xs text-light-300 font-medium mt-1">
                      {release_date?.split('-')[0]}
                  </Text>
                  {/*<Text className="text-xs font-medium text-light-300 uppercase">*/}
                  {/*    Movie*/}
                  {/*</Text>*/}
              </View>
          </TouchableOpacity>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: itemWidth,
    marginBottom: 16,
  },
  touchable: {
    width: '100%',
  },
  image: {
    width: '100%',
    height: 160,
    borderRadius: 8,
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 8,
  }
});

export default MovieCard;
