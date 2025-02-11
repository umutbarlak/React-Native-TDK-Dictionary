import React from 'react';
import Box from './box';
import {CardBorder, CardContainer, CardSummary, CardTitle} from './card';
import {ActivityIndicator} from 'react-native';
import Text from './text';

const SugesstionCard = ({title, onPress, data, ...props}) => {
  return (
    <Box {...props}>
      <Text color="textLight">{title}</Text>
      <CardContainer mt={10} onPress={onPress}>
        <CardBorder borderLeftWidth={3} borderColor="light" pl={12}>
          <CardTitle>{data?.madde}</CardTitle>
          <CardSummary>{data?.anlam}</CardSummary>
        </CardBorder>
      </CardContainer>
    </Box>
  );
};

export default SugesstionCard;
