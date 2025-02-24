import React from 'react';
import Box from './box';
import {CardBorder, CardContainer, CardSummary, CardTitle} from './card';
import {ActivityIndicator} from 'react-native';
import Text from './text';
import LoaderText from './loaderText';

const SugesstionCard = ({title, onPress, data, ...props}) => {
  return (
    <Box {...props}>
      <Text color="textLight">{title}</Text>
      <CardContainer mt={10} onPress={onPress}>
        {data ? (
          <CardBorder borderLeftWidth={1} borderColor="light" pl={12}>
            <CardTitle>{data?.madde}</CardTitle>
            <CardSummary>{data?.anlam}</CardSummary>
          </CardBorder>
        ) : (
          <Box>
            <LoaderText />
            <LoaderText width={280} mt={10} />
          </Box>
        )}
      </CardContainer>
    </Box>
  );
};

export default SugesstionCard;
