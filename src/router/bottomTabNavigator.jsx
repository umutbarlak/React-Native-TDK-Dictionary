import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HistoryScreen from '../screens/history';
import FavoriteScreen from '../screens/favorite';
import SearchStack from './searchStackNavigator';
import TabBar from '../components/tab-bar';

const Tab = createBottomTabNavigator();

function BottomTabBarNavigator() {
  return (
    <Tab.Navigator
      tabBar={props => <TabBar {...props} />}
      initialRouteName="search-stack">
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
