import React from 'react';
import {FlatList} from 'react-native';
import Box from './box';
import Text from './text';
import {SimpleCardContainer, SimpleCardTitle} from './simpleCard';
import {MMKVLoader, useMMKVStorage} from 'react-native-mmkv-storage';
const storage = new MMKVLoader().initialize();
const SearchHistoryList = ({navigation}) => {
  const [history] = useMMKVStorage('history', storage, []);

  return (
    <FlatList
      data={history}
      style={{padding: 16}}
      renderItem={({item}) => (
        <Box flex={1} bg="softRed" my={5}>
          <SimpleCardContainer
            onPress={() =>
              navigation.navigate('detail', {
                keyword: item,
              })
            }>
            <SimpleCardTitle>{item}</SimpleCardTitle>
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
  );
};

export default SearchHistoryList;
