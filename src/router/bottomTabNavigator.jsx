import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HistoryScreen from '../screens/history';
import FavoriteScreen from '../screens/favorite';
import SearchStack from './searchStackNavigator';
import TabBar from '../components/tab-bar';
import {TouchableOpacity} from 'react-native';
import DeleteSvg from '../components/icons/deleteSvg';
import {MMKVLoader, useMMKVStorage} from 'react-native-mmkv-storage';

const Tab = createBottomTabNavigator();

function capitalizeTitle(title) {
  return title.charAt(0).toUpperCase() + title.slice(1);
}
const storage = new MMKVLoader().initialize();
function BottomTabBarNavigator() {
  const [history, setHistory] = useMMKVStorage('history', storage, []);

  return (
    <Tab.Navigator
      tabBar={props => <TabBar {...props} />}
      initialRouteName="search-stack"
      screenOptions={({route}) => ({
        headerTitle: capitalizeTitle(route.name),
      })}>
      <Tab.Screen name="history" component={HistoryScreen} />
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="search-stack"
        component={SearchStack}
      />
      <Tab.Screen name="favorite" component={FavoriteScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabBarNavigator;
