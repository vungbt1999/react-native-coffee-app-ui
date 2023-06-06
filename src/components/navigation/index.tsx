import { NavigationContainer } from '@react-navigation/native';
import { Router } from '../../constants';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  HomeIcon as HomeOutline,
  HeartIcon as HeartOutline,
  ShoppingBagIcon as BagOutline
} from 'react-native-heroicons/outline';
import {
  HomeIcon as HomeSolid,
  HeartIcon as HeartSolid,
  ShoppingBagIcon as BagSolid
} from 'react-native-heroicons/solid';
import { themeColors } from '../../config';

// Screen
import ProductScreen from '../../screens/product';
import HomeScreen from '../../screens/home';
import FavoriteScreen from '../../screens/favorite';
import CartScreen from '../../screens/cart';
import { View } from 'react-native';

function Navigation(): JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          contentStyle: { backgroundColor: 'white' }
        }}
      >
        <Stack.Screen name={Router.Home} component={MyTabs} options={{ headerShown: false }} />
        <Stack.Screen
          name={Router.Product}
          component={ProductScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name={Router.Favorite} component={FavoriteScreen} />
        <Stack.Screen name={Router.Cart} component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MyTabs() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => menuIcons(route, focused),
        tabBarStyle: {
          marginBottom: 20,
          borderRadius: 50,
          backgroundColor: themeColors.bgLight,
          marginHorizontal: 20
        },
        tabBarItemStyle: {
          marginTop: 30
        }
      })}
    >
      <Tab.Screen name={Router.Home_Tab} component={HomeScreen} />
      <Tab.Screen name={Router.Favorite_Tab} component={FavoriteScreen} />
      <Tab.Screen name={Router.Cart_Tab} component={CartScreen} />
    </Tab.Navigator>
  );
}

const menuIcons = (route: any, focused: any) => {
  let icon;
  if (route.name === Router.Home_Tab) {
    icon = focused ? (
      <HomeSolid size="30" color={themeColors.bgLight} />
    ) : (
      <HomeOutline size="30" strokeWidth={2} color="white" />
    );
  } else if (route.name === Router.Favorite_Tab) {
    icon = focused ? (
      <HeartSolid size="30" color={themeColors.bgLight} />
    ) : (
      <HeartOutline size="30" strokeWidth={2} color="white" />
    );
  } else {
    icon = focused ? (
      <BagSolid size="30" color={themeColors.bgLight} />
    ) : (
      <BagOutline size="30" strokeWidth={2} color="white" />
    );
  }
  const buttonClass = focused ? 'bg-white' : '';
  return <View className={`flex items-center rounded-full p-3 shadow ${buttonClass}`}>{icon}</View>;
};
export default Navigation;
