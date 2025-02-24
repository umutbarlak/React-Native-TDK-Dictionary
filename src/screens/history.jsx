import React, {useCallback, useEffect, useState} from 'react';
import Box from '../components/box';
import {ScrollView} from 'react-native';
import {MMKVLoader, useMMKVStorage} from 'react-native-mmkv-storage';
import HistoryCard from '../components/historyCard';
import HistoryIcon from '../components/icons/history';
import InfoMessage from '../components/infoMessage';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

const storage = new MMKVLoader().initialize();

const HistoryScreen = ({navigation}) => {
  const [history, setHistory] = useMMKVStorage('history', storage, []);

  useFocusEffect(
    useCallback(() => {
      // Storage'dan en güncel veriyi al ve state'i güncelle
      setHistory(
        storage.getString('history')
          ? JSON.parse(storage.getString('history'))
          : [],
      );
    }, []),
  );

  const handleDelete = title => {
    const newWords = history.filter(i => i !== title);
    setHistory(newWords);
  };

  if (history.length < 1) {
    return (
      <InfoMessage
        title="Henüz geçmiş yok"
        icon={<HistoryIcon width={31} height={32} color="gray" />}
      />
    );
  }

  return (
    <Box as={ScrollView} px={10} py={5} flexDirection="column">
      {history?.map((item, index) => (
        <HistoryCard
          onPress={() =>
            navigation.navigate('search-stack', {
              screen: 'detail',
              params: {keyword: item},
            })
          }
          key={index}
          item={item}
          type="history"
          handleDelete={() => handleDelete(item)}
        />
      ))}
    </Box>
  );
};

export default HistoryScreen;
