import React, {useEffect, useRef, useState} from 'react';
import Box from './box';
import Text from './text';
import Input from './input';
import theme from '../utils/theme';
import SearchIcon from './icons/search';
import {Keyboard, TouchableOpacity} from 'react-native';
import Button from './button';
import CloseSvg from './icons/closeSvg';

const SearchInput = ({onChangeFocus}) => {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState('');
  const inputRef = useRef(null); // Input referansı

  useEffect(() => {
    onChangeFocus(focus);
  }, [focus]);

  const onCancel = () => {
    Keyboard.dismiss();
    setFocus(false);
  };

  const onClear = () => {
    setValue('');
  };

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      style={{
        shadowColor: '#858383',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 14,
      }}>
      <Box
        flex={1}
        borderRadius="normal"
        flexDirection="row"
        alignItems="center"
        bg="white">
        {!focus && (
          <Box px={10} pr={10}>
            <TouchableOpacity
              onPress={() => {
                setFocus(true);
                inputRef.current?.focus();
              }}>
              <SearchIcon color={theme.colors.textMedium} />
            </TouchableOpacity>
          </Box>
        )}
        <Box flex={1} position="relavite">
          <Input
            outlineColor="red"
            ref={inputRef}
            value={value}
            onChange={setValue}
            borderRadius="normal"
            px={10}
            borderWidth={1}
            borderColor={!focus ? 'transparent' : '#D1D1D1'}
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
  );
};

export default SearchInput;
