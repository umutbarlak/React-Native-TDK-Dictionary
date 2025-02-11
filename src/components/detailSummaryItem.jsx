import React from 'react';
import Box from './box';
import Text from './text';

const DetailSummaryItemContainer = ({
  children,
  order,
  type,
  border,
  ...props
}) => {
  return (
    <Box bg="white" px={26} {...props}>
      <Box py={20} borderTopWidth={border ? 1 : 0} borderColor="light">
        {children}
      </Box>
    </Box>
  );
};

export const DetailItemOrderType = ({order, type}) => {
  return (
    <Box flexDirection="row">
      <Text color={'textLight'} ml={-12}>
        {order}
      </Text>
      <Text color="red" ml={5}>
        {type}
      </Text>
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
