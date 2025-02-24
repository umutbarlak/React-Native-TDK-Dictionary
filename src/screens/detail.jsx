import React, {useCallback, useEffect, useState} from 'react';
import Box from '../components/box';
import Text from '../components/text';
import ActionButton, {
  ActionButtonTitle,
} from '../components/icons/actionButton';
import SoundSvg from '../components/icons/sound';
import HandSvg from '../components/icons/hand';
import DetailSummaryItem from '../components/detailSummaryItem';
import {ScrollView} from 'react-native';
import LoaderText from '../components/loaderText';
import FavoriteSvg from '../components/icons/favorite';
import {MMKVLoader, useMMKVStorage} from 'react-native-mmkv-storage';
import FavoriteSolidSvg from '../components/icons/favoriteSolidSvg';
import {useFocusEffect} from '@react-navigation/native';

const storage = new MMKVLoader().initialize();

const DetailScreen = ({route}) => {
  const [words, setWords] = useMMKVStorage('word', storage, []);
  const [data, setData] = useState(null);

  useFocusEffect(
    useCallback(() => {
      // Storage'dan en güncel veriyi al ve state'i güncelle
      setWords(
        storage.getString('word') ? JSON.parse(storage.getString('word')) : [],
      );
    }, []),
  );

  const keyword = route.params.keyword;

  const getDetailData = async keyword => {
    const response = await fetch(`https://sozluk.gov.tr/gts?ara=${keyword}`);
    const data = await response.json();
    setData(data[0]);
  };

  useEffect(() => {
    setData(getDetailData(keyword));
  }, []);

  const handleFavorite = () => {
    if (!words.includes(keyword)) {
      setWords([keyword, ...words]);
    } else {
      const newWords = words.filter(i => i !== keyword);
      setWords(newWords);
    }
  };

  return (
    <Box as={ScrollView} p={16} flex={1} bg="softRed">
      <Box>
        <Text fontSize={32} fontWeight="bold">
          {keyword}
        </Text>
        {data?.lisan && (
          <Text color="textLight" mt={10}>
            {data && `${data.telaffuz && `(${data.telaffuz})`}`} {data?.lisan}
          </Text>
        )}
      </Box>
      <Box flexDirection="row" gap={12} mt={24}>
        <ActionButton disabled={!data}>
          <SoundSvg width={24} height={24} color="textLight" />
        </ActionButton>
        <ActionButton onPress={handleFavorite} disabled={!data}>
          {words?.includes(keyword) ? (
            <FavoriteSolidSvg width={24} height={24} color="textLight" />
          ) : (
            <FavoriteSvg width={24} height={24} color="textLight" />
          )}
        </ActionButton>
        <ActionButton disabled={!data} ml="auto">
          <HandSvg width={24} height={24} />
          <ActionButtonTitle>Türk İşaret Dili</ActionButtonTitle>
        </ActionButton>
      </Box>
      <Box mt={32}>
        {data
          ? data?.anlamlarListe?.map((item, index) => (
              <DetailSummaryItem key={index} data={item} border={index !== 0} />
            ))
          : [1, 2, 3].map((item, index) => (
              <DetailSummaryItem key={index} border={index !== 0}>
                <LoaderText />
                <LoaderText width={280} mt={10} />
              </DetailSummaryItem>
            ))}
      </Box>
    </Box>
  );
};

export default DetailScreen;
