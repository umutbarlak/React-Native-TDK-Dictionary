import React from 'react';
import Button from './button';
import Text from './text';

export const SimpleCardContainer = ({children, ...props}) => {
  return (
    <Button
      justifyContent="start"
      p={16}
      bg="white"
      borderRadius="normal"
      {...props}>
      {children}
    </Button>
  );
};

export const SimpleCardTitle = ({children}) => {
  return (
    <Text fontSize={16} fontWeight="bold">
      {children}
    </Text>
  );
};
