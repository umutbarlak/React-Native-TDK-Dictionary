import React, {useEffect, useRef, useState} from 'react';
import Box from './box';
import Text from './text';
import Input from './input';
import theme from '../utils/theme';
import SearchIcon from './icons/search';
import {Keyboard, TouchableOpacity} from 'react-native';
import Button from './button';
import CloseSvg from './icons/closeSvg';
import LetterButtons from './letterButtons';
import {MMKVLoader, useMMKVStorage} from 'react-native-mmkv-storage';
const storage = new MMKVLoader().initialize();

const SearchInput = ({onChangeFocus, getSearchData, setSearchData}) => {
  const [history, setHistory] = useMMKVStorage('history', storage, []);

  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    onChangeFocus(focus);
  }, [focus]);

  const onCancel = () => {
    Keyboard.dismiss();
    setFocus(false);
    setValue('');
    setSearchData(null);
  };

  const onClear = () => {
    setValue('');
    setSearchData(null);
  };

  const handleSubmit = () => {
    if (value !== '') {
      getSearchData(value.toLocaleLowerCase());
    }
  };

  return (
    <Box>
      <Box flexDirection="row" alignItems="center" p={16}>
        <Box
          style={{
            shadowColor: '#858383',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 14,
          }}
          borderWidth={1}
          borderColor={
            !focus ? 'transparent' : value !== '' ? '#ff6360' : '#D1D1D1'
          }
          flex={1}
          borderRadius="normal"
          flexDirection="row"
          alignItems="center"
          bg="white">
          <Box px={10} pr={10}>
            <TouchableOpacity onPress={handleSubmit}>
              <SearchIcon color={theme.colors.textMedium} />
            </TouchableOpacity>
          </Box>

          <Box position="relavite" flex={1}>
            <Input
              autoCapitalize={'none'}
              outlineColor="red"
              ref={inputRef}
              value={value}
              onChangeText={setValue}
              borderRadius="normal"
              px={10}
              onFocus={() => setFocus(true)}
              height={52}
              color={'black'}
              placeholder="Türkçe Sözlük'te Ara"
              placeholderTextColor={theme.colors.textMedium}
            />

            {value !== '' && (
              <Button onPress={onClear} position="absolute" right={12} top={14}>
                <CloseSvg width="22" color={theme.colors.textDark} />
              </Button>
            )}
          </Box>
        </Box>
        {focus && (
          <Button mx={10} height={52} onPress={onCancel}>
            <Text color="black">Vazgeç</Text>
          </Button>
        )}
      </Box>

      {focus && <LetterButtons setValue={setValue} />}
    </Box>
  );
};

export default SearchInput;
