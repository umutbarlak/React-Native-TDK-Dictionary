import React from 'react';
import Box from './box';
import Text from './text';
import RightArrow from './icons/rightArrow';
import {TouchableOpacity} from 'react-native';
import StarSvg from './icons/star';
import DeleteSvg from './icons/deleteSvg';

const HistoryCard = props => {
  const {item, type, handleFavorite, handleDelete, onPress} = props;
  return (
    <Box
      onPress={onPress}
      my={5}
      as={TouchableOpacity}
      activeOpacity={0.5}
      borderRadius="normal"
      p={20}
      bg="white"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center">
      <Text fontSize={16} fontWeight="bold">
        {item}
      </Text>
      <Box flexDirection="row" alignItems="center" gap={10}>
        {type === 'favori' ? (
          <TouchableOpacity onPress={handleFavorite}>
            <StarSvg color="#ffdf00" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handleDelete}>
            <DeleteSvg color="red" />
          </TouchableOpacity>
        )}
        <RightArrow color="red" />
      </Box>
    </Box>
  );
};

export default HistoryCard;
