import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchScreen from '../screens/search';
import DetailScreen from '../screens/detail';
import LeftSvg from '../components/icons/leftSvg';
import Button from '../components/button';
import MoreSvg from '../components/icons/more';
import theme from '../utils/theme';

const Stack = createNativeStackNavigator();

function SearchStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="search"
        component={SearchScreen}
      />
      <Stack.Screen
        name="detail"
        component={DetailScreen}
        options={({route, navigation}) => ({
          headerLeft: () => (
            <Button onPress={() => navigation.goBack()}>
              <LeftSvg color={theme.colors.textDark} />
            </Button>
          ),
          headerRight: () => (
            <Button>
              <MoreSvg color={theme.colors.textDark} />
            </Button>
          ),
          title: route.params?.title,
          headerStyle: {
            backgroundColor: '#f8f8f8',
          },
          headerShadowVisible: false,
        })}
      />
    </Stack.Navigator>
  );
}

export default SearchStack;
