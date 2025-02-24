import React, {useCallback} from 'react';
import Box from '../components/box';
import {ScrollView} from 'react-native';
import {MMKVLoader, useMMKVStorage} from 'react-native-mmkv-storage';
import FavoriteSvg from '../components/icons/favorite';
import InfoMessage from '../components/infoMessage';
import HistoryCard from '../components/historyCard';
import {useFocusEffect} from '@react-navigation/native';
const storage = new MMKVLoader().initialize();

const FavoriteScreen = ({navigation}) => {
  const [words, setWords] = useMMKVStorage('word', storage, []);

  useFocusEffect(
    useCallback(() => {
      // Storage'dan en güncel veriyi al ve state'i güncelle
      setWords(
        storage.getString('word') ? JSON.parse(storage.getString('word')) : [],
      );
    }, []),
  );

  const handleFavorite = keyword => {
    if (!words.includes(keyword)) {
      setWords([keyword, ...words]);
    } else {
      const newWords = words.filter(i => i !== keyword);
      setWords(newWords);
    }
  };

  if (words.length < 1) {
    return (
      <InfoMessage
        title="Henüz favori yok"
        icon={<FavoriteSvg width={31} height={32} color="gray" />}
      />
    );
  }

  return (
    <Box as={ScrollView} px={10} py={5} flexDirection="column">
      {words?.map((item, index) => (
        <HistoryCard
          onPress={() =>
            navigation.navigate('search-stack', {
              screen: 'detail',
              params: {
                keyword: item,
              },
            })
          }
          item={item}
          key={index}
          type="favori"
          handleFavorite={() => handleFavorite(item)}
        />
      ))}
    </Box>
  );
};

export default FavoriteScreen;
