import React, { useState } from 'react';
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { MagnifyingGlassIcon, MapPinIcon } from 'react-native-heroicons/solid';
import { BellIcon } from 'react-native-heroicons/outline';
import { categories, coffeeItems, themeColors } from '../../config';
import Carousel from 'react-native-snap-carousel';
import CoffeeCard from '../../components/coffee-card';
import { useNavigation } from '@react-navigation/native';
import { Router } from '../../constants';

function HomeScreen(): JSX.Element {
  const [category, setCategory] = useState<number>(1);
  const navigation = useNavigation();

  return (
    <View className="flex-1 relative bg-white">
      <StatusBar />
      <Image
        source={require('../../../assets/images/beansBackground1.png')}
        className="w-full absolute -top-5 opacity-10"
        style={{ height: 220 }}
      />
      <SafeAreaView className="flex-1">
        <View className="px-4 flex-row justify-between items-center">
          <TouchableOpacity onPress={() => navigation.navigate(Router.Profile as never)}>
            <Image
              source={require('../../../assets/images/avatar.png')}
              className="h-9 w-9 rounded-full"
            />
          </TouchableOpacity>
          <View className="flex-row items-center space-x-2">
            <MapPinIcon size="25" color={themeColors.bgLight} />
            <Text className="text-base font-semibold">New York, NYC</Text>
          </View>
          <BellIcon size="27" color="black" />
        </View>

        {/** Search bar */}
        <View className="mx-5 mt-14">
          <View className="flex-row justify-center items-center rounded-full p-1 bg-[#e6e6e6]">
            <TextInput placeholder="Search" className="p-4 flex-1 font-semibold text-gray-700" />
            <TouchableOpacity
              className="rounded-full p-2"
              style={{ backgroundColor: themeColors.bgLight }}
            >
              <MagnifyingGlassIcon size="25" strokeWidth={2} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/** Category */}
        <View className="px-5 mt-6">
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={(item) => String(item.id)}
            className="overflow-visible"
            renderItem={({ item }) => {
              const isActive = item.id === category;
              const activeTextClass = isActive ? 'text-white' : 'text-gray-700';

              return (
                <TouchableOpacity
                  onPress={() => setCategory(item.id)}
                  style={{ backgroundColor: isActive ? themeColors.bgLight : 'rgba(0,0,0,0.07)' }}
                  className="p-4 px-5 rounded-full mr-2 shadow"
                >
                  <Text className={`font-semibold ${activeTextClass}`}>{item.title}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        {/** Coffee cards */}
        <View className="mt-16 py-2">
          <Carousel
            containerCustomStyle={{ overflow: 'visible' }}
            vertical={false}
            data={coffeeItems}
            renderItem={({ item }: any) => <CoffeeCard {...item} />}
            firstItem={1}
            inactiveSlideOpacity={0.75}
            inactiveSlideScale={0.77}
            sliderWidth={430}
            itemWidth={260}
            loop={true}
            slideStyle={{ display: 'flex', alignItems: 'center' }}
          />
        </View>
      </SafeAreaView>
    </View >
  );
}

export default HomeScreen;
