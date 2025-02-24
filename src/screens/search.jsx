import React, {useEffect, useState} from 'react';
import Box from '../components/box';
import {SafeAreaView} from 'react-native-safe-area-context';
import SugesstionCard from '../components/sugesstionCard';
import SearchHistoryList from '../components/searchHistoryList';
import HomeSearch from '../components/homeSearch';
import FocusAwareStatusBar from '../components/statusBar';
import Text from '../components/text';
import {MMKVLoader, useMMKVStorage} from 'react-native-mmkv-storage';
const storage = new MMKVLoader().initialize();

const SearchScreen = ({navigation}) => {
  const [history, setHistory] = useMMKVStorage('history', storage, []);

  const [isSearchFocus, setSearchFocus] = useState(false);
  const [homeData, setHomeData] = useState(null);
  const [searchData, setSearchData] = useState(null);

  const getHomeData = async () => {
    const response = await fetch('https://sozluk.gov.tr/icerik');
    const data = await response.json();
    setHomeData(data);
  };

  const getSearchData = async value => {
    const response = await fetch(`https://sozluk.gov.tr/gts?ara=${value}`);
    const data = await response.json();

    if (data.error) {
      return setSearchData(data);
    }

    navigation.navigate('detail', {keyword: value});

    if (!history.includes(value)) {
      setHistory([value, ...history]);
    }
  };

  useEffect(() => {
    getHomeData();
  }, []);

  return (
    <Box as={SafeAreaView} bg={isSearchFocus ? 'softRed' : 'red'}>
      <FocusAwareStatusBar
        barStyle={isSearchFocus ? 'dark-content' : 'light-content'}
      />
      <HomeSearch
        getSearchData={getSearchData}
        setSearchFocus={setSearchFocus}
        isSearchFocus={isSearchFocus}
        setSearchData={setSearchData}
      />
      <Box bg="softRed" height="100%" pt={isSearchFocus ? 0 : 26}>
        {isSearchFocus ? (
          <Box flex={1}>
            {searchData?.error && (
              <Text textAlign="center" p={10} bg="#07a7ff">
                {searchData.error}
              </Text>
            )}
            <SearchHistoryList navigation={navigation} />
          </Box>
        ) : (
          <Box px={16} py={30} flex={1}>
            <SugesstionCard
              title="Bir Kelime"
              data={homeData?.kelime[0]}
              onPress={() =>
                navigation.navigate('detail', {
                  keyword: homeData?.kelime[0].madde,
                })
              }
            />
            <SugesstionCard
              mt={40}
              title="Bir Deyim-Atasözü"
              data={homeData?.atasoz[0]}
              onPress={() =>
                navigation.navigate('detail', {
                  keyword: homeData?.atasoz[0].madde,
                })
              }
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default SearchScreen;
