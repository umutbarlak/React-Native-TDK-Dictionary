import React from 'react';
import Box from './box';
import Text from './text';
import Button from './button';

const LetterButtons = ({setValue}) => {
  const data = ['ç', 'ğ', 'ı', 'ö', 'ş', 'ü', 'â', 'î', 'û'];

  const handlePress = item => {
    setValue(prev => prev + item);
  };

  return (
    <Box flexDirection="row" bg="light" py={16}>
      {data.map(item => (
        <Button
          key={item}
          flex={1}
          height={16}
          onPress={() => handlePress(item)}>
          <Text>{item}</Text>
        </Button>
      ))}
    </Box>
  );
};

export default LetterButtons;
