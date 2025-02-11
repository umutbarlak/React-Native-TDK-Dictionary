import {View} from 'react-native';
import React from 'react';
import Box from './box';
import Text from './text';
import {color} from 'styled-system';
import Button from './button';

export const CardContainer = ({children, ...props}) => {
  return (
    <Button {...props} py={16} px={12} bg="white" borderRadius="normal">
      {children}
    </Button>
  );
};

export const CardBorder = ({children, ...props}) => {
  return (
    <Box flex={1} {...props}>
      {children}
    </Box>
  );
};

export const CardTitle = ({children}) => {
  return (
    <Text fontSize={18} fontWeight="bold">
      {children}
    </Text>
  );
};

export const CardSummary = ({children}) => {
  return (
    <Text fontSize={14} mt={8} color="textMedium">
      {children}
    </Text>
  );
};
