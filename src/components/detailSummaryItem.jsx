import React from 'react';
import Box from './box';
import Text from './text';

const DetailSummaryItemContainer = ({children, border, ...props}) => {
  return (
    <Box bg="white" px={26} {...props}>
      <Box py={20} borderTopWidth={border ? 1 : 0} borderColor="light">
        <Box flexDirection="row">
          <Text color={'textLight'} ml={-12}>
            1
          </Text>
          <Text color="red" ml={5}>
            İSİM
          </Text>
        </Box>

        <Box mt={8}>{children}</Box>
      </Box>
    </Box>
  );
};

export const DetailSummaryItemTitle = ({children, ...props}) => {
  return (
    <Text fontWeight="600" {...props}>
      {children}
    </Text>
  );
};

export const DetailSummaryItemSummary = ({children, ...props}) => {
  return (
    <Text fontWeight="500" ml={10} mt={12} color="textLight" {...props}>
      {children}
    </Text>
  );
};

export default DetailSummaryItemContainer;
