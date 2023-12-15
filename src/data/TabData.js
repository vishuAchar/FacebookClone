import FriendScreen from '../screens/FriendScreen';
import HomeScreen from '../screens/HomeScreen';
import MarketPlaceScreen from '../screens/MarketPlaceScreen';
import NotificationScrren from '../screens/NotificationScrren';
import ProfileScreen from '../screens/ProfileScreen';
import WatchScreen from '../screens/WatchScreen';

export const TabData = [
  {
    id: 1,
    route: HomeScreen,
    name: 'home',
    activeIconName: 'home',
    activeiconType: 'Entypo',
    inactiveIconName: 'home-outline',
    inactiveIconType: 'MaterialCommunityIcons',
    size: 25,
    unFocusSize: 28,
  },
  {
    id: 2,
    route: FriendScreen,
    name: 'friends',
    activeIconName: 'people-sharp',
    activeiconType: 'Ionicons',
    inactiveIconName: 'people-outline',
    inactiveIconType: 'Ionicons',
    size: 25,
    unFocusSize: 25,
  },
  {
    id: 3,
    route: WatchScreen,
    name: 'watch',
    activeIconName: 'youtube-tv',
    activeiconType: 'MaterialCommunityIcons',
    inactiveIconName: 'television-play',
    inactiveIconType: 'MaterialCommunityIcons',
    size: 25,
    unFocusSize: 25,
  },
  {
    id: 4,
    route: MarketPlaceScreen,
    name: 'marketPlace',
    activeIconName: 'shop',
    activeiconType: 'Entypo',
    inactiveIconName: 'storefront-outline',
    inactiveIconType: 'MaterialCommunityIcons',
    size: 25,
    unFocusSize: 25,
  },
  {
    id: 5,
    route: NotificationScrren,
    name: 'notification',
    activeIconName: 'notifications',
    activeiconType: 'Ionicons',
    inactiveIconName: 'notifications-outline',
    inactiveIconType: 'Ionicons',
    size: 25,
    unFocusSize: 25,
  },
  {
    id: 6,
    route: ProfileScreen,
    name: 'profile',
    activeIconName: 'person',
    activeiconType: 'Ionicons',
    inactiveIconName: 'person-outline',
    inactiveIconType: 'Ionicons',
    size: 24,
    unFocusSize: 24,
  },
];
