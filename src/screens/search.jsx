import {Button, ScrollView, StatusBar, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import LogoSvg from '../components/icons/logo';
import SearchInput from '../components/searchInput';
import Box from '../components/box';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useIsFocused} from '@react-navigation/native';
import Text from '../components/text';
import {Animated, useAnimatedValue} from 'react-native';
import {
  CardBorder,
  CardContainer,
  CardSummary,
  CardTitle,
} from '../components/card';
import {SimpleCardContainer, SimpleCardTitle} from '../components/simpleCard';

function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar {...props} /> : null;
}

const SearchScreen = ({navigation}) => {
  const [isSearchFocus, setSearchFocus] = useState(false);

  const animHeight = useAnimatedValue(250);
  const animOpacity = useAnimatedValue(200);

  useEffect(() => {
    if (isSearchFocus) {
      Animated.timing(animHeight, {
        toValue: 50 + 32,
        duration: 200,
        useNativeDriver: false,
      }).start();
      Animated.timing(animOpacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(animHeight, {
        toValue: 200,
        duration: 200,
        useNativeDriver: false,
      }).start();
      Animated.timing(animOpacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }, [isSearchFocus, animHeight]);

  const data = [
    {
      id: 1,
      title: 'Görev Yönetimi',
      summary: 'Takım içi görevlerin organize edilmesi için bir uygulama.',
    },
    {
      id: 2,
      title: 'E-Ticaret Platformu',
      summary: 'Ürün satışı ve sipariş yönetimi için modern bir platform.',
    },
    {
      id: 3,
      title: 'Blog Sitesi',
      summary: 'Kullanıcıların yazılar paylaşabileceği bir blog sistemi.',
    },
    {
      id: 4,
      title: 'Portföy Web Sitesi',
      summary: 'Kişisel veya kurumsal projeleri sergileyen bir site.',
    },
    {
      id: 5,
      title: 'Sohbet Uygulaması',
      summary: 'Gerçek zamanlı mesajlaşma sağlayan bir web uygulaması.',
    },
  ];

  return (
    <Box as={SafeAreaView} bg={isSearchFocus ? 'softRed' : 'red'}>
      <FocusAwareStatusBar
        barStyle={isSearchFocus ? 'dark-content' : 'light-content'}
      />

      <Box as={Animated.View} height={animHeight} zIndex={1}>
        <Box
          pb={26}
          as={Animated.View}
          opacity={animOpacity}
          flex={1}
          justifyContent="center"
          alignItems="center">
          <LogoSvg color={'white'} flex={1} />
        </Box>

        <Box
          p={16}
          width="100%"
          mb={isSearchFocus ? 0 : -40}
          zIndex={1}
          position="absolute"
          bottom={0}>
          <SearchInput onChangeFocus={status => setSearchFocus(status)} />
        </Box>
      </Box>

      <Box bg="softRed" height="100%" pt={isSearchFocus ? 0 : 26}>
        {isSearchFocus ? (
          <FlatList
            data={data}
            style={{padding: 16}}
            renderItem={({item}) => (
              <Box flex={1} bg="softRed" my={5}>
                <SimpleCardContainer
                  onPress={() => navigation.navigate('detail')}>
                  <SimpleCardTitle>{item.title}</SimpleCardTitle>
                </SimpleCardContainer>
              </Box>
            )}
            keyExtractor={item => item.id}
            ListHeaderComponent={
              <Text color="textLight" px={16} mb={10}>
                Son Aramalar
              </Text>
            }
          />
        ) : (
          <Box px={16} py={30} flex={1}>
            {/* <FlatList
              data={data}
              renderItem={({item}) => (
                <CardContainer my={10}>
                  <CardBorder borderLeftWidth={3} borderColor="light" pl={12}>
                    <CardTitle>{item.title}</CardTitle>
                    <CardSummary>{item.summary}</CardSummary>
                  </CardBorder>
                </CardContainer>
              )}
              keyExtractor={item => item.id}
            /> */}
            <Box>
              <Text color="textLight">Bir Deyim</Text>
              <CardContainer
                mt={10}
                onPress={() =>
                  navigation.navigate('detail', {title: 'on para'})
                }>
                <CardBorder borderLeftWidth={3} borderColor="light" pl={12}>
                  <CardTitle>on para</CardTitle>
                  <CardSummary>çok az (para)</CardSummary>
                </CardBorder>
              </CardContainer>
            </Box>

            <Box mt={30}>
              <Text color="textLight">Bir Atasözü</Text>
              <CardContainer
                mt={10}
                onPress={() =>
                  navigation.navigate('detail', {title: 'Siyem siyem ağlamak'})
                }>
                <CardBorder borderLeftWidth={3} borderColor="light" pl={12}>
                  <CardTitle>on para</CardTitle>
                  <CardSummary>çok az (para)</CardSummary>
                </CardBorder>
              </CardContainer>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default SearchScreen;
