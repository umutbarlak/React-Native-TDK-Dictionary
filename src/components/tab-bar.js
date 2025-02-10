import {useLinkBuilder, useTheme} from '@react-navigation/native';
import Button from './button';
import SearchIcon from './icons/search';
import HistoryIcon from './icons/history';
import BookMarkIcon from './icons/bookmark';

import Box from './box';
import theme from '../utils/theme';

function TabBar({state, descriptors, navigation}) {
  const {colors} = useTheme();
  const {buildHref} = useLinkBuilder();

  return (
    <Box
      bg="white"
      pb={20}
      style={{
        flexDirection: 'row',
        shadowColor: '#858383',
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity: 0.3,
        shadowRadius: 11,
        elevation: 14,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        return label === 'search-stack' ? (
          <Box p={15} mt={-15} bg="white" borderRadius="full" key={index}>
            <Button borderRadius={'full'} size={56} bg="red" onPress={onPress}>
              <SearchIcon color="white" />
            </Button>
          </Box>
        ) : (
          <Button
            pt={6}
            flexDirection="column"
            height={56}
            key={index}
            flex={1}
            onPress={onPress}>
            {label === 'history' ? (
              <HistoryIcon
                color={isFocused ? theme.colors.red : theme.colors.textLight}
              />
            ) : (
              <BookMarkIcon
                color={isFocused ? theme.colors.red : theme.colors.textLight}
              />
            )}
            <Box
              size={4}
              bg={isFocused ? 'red' : ''}
              mt={6}
              borderRadius="full"
            />
          </Button>
        );
      })}
    </Box>
  );
}

export default TabBar;
