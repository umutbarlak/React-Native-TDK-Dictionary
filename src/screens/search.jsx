import React, {useEffect, useState} from 'react';
import Box from '../components/box';
import {SafeAreaView} from 'react-native-safe-area-context';
import SugesstionCard from '../components/sugesstionCard';
import SearchHistoryList from '../components/searchHistoryList';
import HomeSearch from '../components/homeSearch';
import FocusAwareStatusBar from '../components/statusBar';

const SearchScreen = ({navigation}) => {
  const [isSearchFocus, setSearchFocus] = useState(false);
  const [homeData, setHomeData] = useState(null);

  const getHomeData = async () => {
    const response = await fetch('https://sozluk.gov.tr/icerik');
    const data = await response.json();
    setHomeData(data);
  };

  useEffect(() => {
    getHomeData();
  }, []);

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
      <HomeSearch
        setSearchFocus={setSearchFocus}
        isSearchFocus={isSearchFocus}
      />
      <Box bg="softRed" height="100%" pt={isSearchFocus ? 0 : 26}>
        {isSearchFocus ? (
          <SearchHistoryList data={data} navigation={navigation} />
        ) : (
          <Box px={16} py={30} flex={1}>
            <SugesstionCard
              title="Bir Kelime"
              data={homeData?.kelime[0]}
              onPress={() =>
                navigation.navigate('detail', {
                  title: homeData?.kelime.madde,
                  keyword: homeData?.kelime[0],
                })
              }
            />
            <SugesstionCard
              mt={40}
              title="Bir Deyim-Atasözü"
              data={homeData?.atasoz[0]}
              onPress={() =>
                navigation.navigate('detail', {title: homeData?.atasoz.madde})
              }
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default SearchScreen;
