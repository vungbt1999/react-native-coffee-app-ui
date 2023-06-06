import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { ArrowLeftCircleIcon, StarIcon } from 'react-native-heroicons/outline';
import { HeartIcon, MinusIcon, PlusIcon, ShoppingBagIcon } from 'react-native-heroicons/solid';
import { SafeAreaView } from 'react-native-safe-area-context';
import { coffeeItems, themeColors } from '../../config';

function ProductScreen(props: any): JSX.Element {
  const item = props.route.params;
  const navigation = useNavigation();
  const sizes = ['small', 'medium', 'large'];
  const [size, setSize] = useState<string>('small');
  return (
    <View className="flex-1">
      <StatusBar barStyle="light-content" />
      <Image
        source={require('../../../assets/images/beansBackground2.png')}
        style={{ height: 300, borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }}
        className="w-full absolute"
      />
      <SafeAreaView className="space-x-4 flex-1 pb-[50]">
        <View className="mx-4 flex-row justify-between items-center">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowLeftCircleIcon size="50" strokeWidth={1.2} color="white" />
          </TouchableOpacity>

          <TouchableOpacity className="rounded-full border-2 border-white p-2">
            <HeartIcon size="24" color="white" />
          </TouchableOpacity>
        </View>

        <View
          className="flex-row justify-center"
          style={{
            shadowColor: themeColors.bgDark,
            shadowRadius: 30,
            shadowOffset: { width: 0, height: 30 },
            shadowOpacity: 0.9
          }}
        >
          <Image source={item.image} className="h-60 w-60" />
        </View>

        <View
          style={{ backgroundColor: themeColors.bgLight }}
          className="flex-row mx-4 items-center rounded-3xl p-1 px-2 space-x-1 w-16 opacity-90"
        >
          <StarIcon size="15" color="white" />
          <Text className="text-base font-semibold text-white">{item.stars}</Text>
        </View>

        <View className="mx-4 flex-row justify-between items-center mt-4">
          <Text style={{ color: themeColors.text }} className="text-3xl font-semibold">
            {item.name}
          </Text>
          <Text style={{ color: themeColors.text }} className="text-lg font-semibold">
            $ {item.price}
          </Text>
        </View>

        <View className="mx-4 space-y-2">
          <Text style={{ color: themeColors.text }} className="text-lg font-bold">
            Coffee size
          </Text>
          <View className="flex-row justify-between">
            {sizes.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={{
                    backgroundColor: size === item ? themeColors.bgLight : 'rgba(0,0,0,0.07)'
                  }}
                  className="p-3 px-8 rounded-full"
                  onPress={() => setSize(item)}
                >
                  <Text
                    className={`text-white capitalize ${
                      size === item ? 'text-white' : 'text-gray-700'
                    }`}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <View className="mx-4 space-y-2 max-h-60 overflow-auto">
          <Text style={{ color: themeColors.text }} className="text-lg font-bold">
            About
          </Text>
          <ScrollView>
            <Text className="text-gray-600">
              {item.desc}
              {item.desc}
              {item.desc}
              {item.desc}
              {item.desc}
              {item.desc}
              {item.desc}
            </Text>
          </ScrollView>
        </View>

        <View className="flex-row justify-between items-center mx-4 my-2">
          <View className="flex-row items-center space-x-1">
            <Text className="text-base text-gray-700 font-semibold opacity-50">Volume</Text>
            <Text className="text-base text-black font-semibold">{item.volume}</Text>
          </View>

          <View className="flex-row items-center space-x-4 border-gray-500 border rounded-full px-4">
            <TouchableOpacity>
              <MinusIcon size="20" strokeWidth={3} color={themeColors.text} />
            </TouchableOpacity>
            <Text style={{ color: themeColors.text }} className="font-extrabold text-lg">
              2
            </Text>
            <TouchableOpacity>
              <PlusIcon size="20" strokeWidth={3} color={themeColors.text} />
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex-row justify-between items-center mx-4 absolute bottom-[50]">
          <TouchableOpacity className="p-4 rounded-full border border-gray-400">
            <ShoppingBagIcon size="30" color="gray" />
          </TouchableOpacity>

          <TouchableOpacity
            style={{ backgroundColor: themeColors.bgLight }}
            className="p-5 rounded-full flex-1 ml-3"
          >
            <Text className="text-center text-base font-semibold text-white"> Buy now</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

export default ProductScreen;
