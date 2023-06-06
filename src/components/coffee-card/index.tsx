import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { themeColors } from '../../config';
import { PlusIcon, StarIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { Router } from '../../constants';

type CoffeeCardProps = {
  id: number;
  name: string;
  price: string;
  volume: string;
  stars: string;
  image: any;
  desc: string;
};
export default function CoffeeCard(item: CoffeeCardProps) {
  const navigation = useNavigation();
  const { image, name, stars, volume, price } = item;
  return (
    <View
      style={{
        borderRadius: 40,
        backgroundColor: themeColors.bgDark,
        height: 350,
        width: 250
      }}
    >
      <View
        style={{
          shadowColor: 'black',
          shadowRadius: 30,
          shadowOffset: { width: 0, height: 40 },
          shadowOpacity: 0.8
        }}
        className="flex-row justify-center -mt-14"
      >
        <Image source={image} className="h-40 w-40" />
      </View>
      <View className="px-5 mt-5 space-y-3">
        <Text className="text-3xl text-white font-semibold z-10">{name}</Text>
        <View
          style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
          className="flex-row items-center rounded-3xl p-1 px-2 space-x-1 w-16"
        >
          <StarIcon size="15" color="white" />
          <Text className="text-base font-semibold text-white">{stars}</Text>
        </View>
        <View className="flex-row space-x-1 z-10 mb-6">
          <Text className="text-base text-white font-semibold opacity-60">Volume</Text>
          <Text className="text-base text-white font-semibold">{volume}</Text>
        </View>

        <View
          style={{
            backgroundColor: themeColors.bgDark,
            shadowColor: themeColors.bgDark,
            shadowRadius: 25,
            shadowOffset: { width: 0, height: 40 },
            shadowOpacity: 0.8
          }}
          className="flex-row justify-between items-center"
        >
          <Text className="text-white font-bold text-lg">{price}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(Router.Product as never, { ...item } as never)}
            style={{
              shadowColor: 'black',
              shadowRadius: 40,
              shadowOffset: { width: -20, height: -10 },
              shadowOpacity: 1
            }}
            className="p-4 bg-white rounded-full"
          >
            <PlusIcon size="25" strokeWidth={2} color={themeColors.bgDark} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
