import React, {useEffect} from 'react';
import SearchInput from './searchInput';
import {Animated, useAnimatedValue} from 'react-native';
import Box from './box';
import LogoSvg from './icons/logo';

const HomeSearch = ({
  setSearchFocus,
  isSearchFocus,
  getSearchData,
  setSearchData,
}) => {
  const animHeight = useAnimatedValue(250);
  const animOpacity = new Animated.Value(1);
  useEffect(() => {
    if (isSearchFocus) {
      Animated.timing(animHeight, {
        toValue: 50 + 32 + 48,
        duration: 150,
        useNativeDriver: false,
      }).start();
      Animated.timing(animOpacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animHeight, {
        toValue: 200,
        duration: 250,
        useNativeDriver: false,
      }).start();
      Animated.timing(animOpacity, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }).start();
    }
  }, [isSearchFocus]);
  return (
    <Box as={Animated.View} height={animHeight} zIndex={1}>
      <Box
        style={{opacity: animOpacity}}
        pb={26}
        as={Animated.View}
        flex={1}
        justifyContent="center"
        alignItems="center">
        <LogoSvg color={'white'} flex={1} />
      </Box>

      <Box
        width="100%"
        mb={isSearchFocus ? 0 : -40}
        zIndex={1}
        position="absolute"
        bottom={0}>
        <SearchInput
          setSearchData={setSearchData}
          onChangeFocus={status => setSearchFocus(status)}
          getSearchData={getSearchData}
        />
      </Box>
    </Box>
  );
};

export default HomeSearch;
